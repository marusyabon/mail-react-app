import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import MailNav from './components/MailNav/MailNav';
import ControllBar from './components/ControllBar/ControllBar';
import Home from './components/Home/Home';
import LettersList from './components/LettersList/LettersList';
import LetterItem from './components/LetterItem/LetterItem';
import NewLetter from './components/NewLetter/NewLetter';
import {default as isoFetch} from 'isomorphic-fetch';

import {connect} from 'react-redux';
import { create_list } from './redux/lettersAC';

class Router extends React.PureComponent {

  constructor(props) {
    super(props);
    this.loadData();
  }

  state = {
    dataReady: false,
    lettersList: {},
  };

  fetchError = (errorMessage) => {
    let showStr = "Вata not received";
    console.error(showStr);
  };

  fetchSuccess = (loadedData) => {
    console.log(loadedData);
    this.setState({
      dataReady:true,
      lettersList:loadedData,
    });
  };

  loadData = () => {

    isoFetch("https://invacont.net/appData.js", {
        method: 'post',
        headers: {
            "Accept": "application/js",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, PUT, PATCH, POST, DELETE",
            "Access-Control-Allow-Headers": "Content-Type"
        },
    })
        .then( (response) => { // response - HTTP-ответ
            if (!response.ok) {
                let Err=new Error("fetch error " + response.status);
                Err.userMessage="Ошибка связи";
                throw Err; // дальше по цепочке пойдёт отвергнутый промис
            }
            else
                return response.json(); // дальше по цепочке пойдёт промис с пришедшими по сети данными
        })
        .then( (data) => {
            try {
                this.fetchSuccess(data); // передаём полезные данные в fetchSuccess, дальше по цепочке пойдёт успешный пустой промис
            }
            catch ( error ){
                this.fetchError(error.message); // если что-то пошло не так - дальше по цепочке пойдёт отвергнутый промис
            }
        })
        .catch( (error) => {
            this.fetchError(error.userMessage||error.message);
        })
    ;

  };
          
  componentWillMount() {
    this.props.dispatch( create_list(this.state.lettersList) );
  }

  render() {

    return (
      <BrowserRouter>
        <div className="MailBox">
          <ControllBar />
          <div className="Flex">
            <MailNav />
              <Route path="/" exact component={Home} />
              <Route path="/messages/:foldname/:page?" component={LettersList} />
              <Route path="/message/:lid" component={LetterItem} />
              <Route path="/new-message" exact component={NewLetter} />
          </div>
        </div>  
      </BrowserRouter>
    );
  }
}
const mapStateToProps = function (state) {
  return {
    letters: state.letters,
  };
};

export default connect(mapStateToProps)(Router);