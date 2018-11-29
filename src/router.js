import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import MailNav from './components/MailNav/MailNav';
import ControllBar from './components/ControllBar/ControllBar';
import Home from './components/Home/Home';
import LettersList from './components/LettersList/LettersList';
import LetterItem from './components/LetterItem/LetterItem';
import NewLetter from './components/NewLetter/NewLetter';

class Router extends React.PureComponent {
          
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
    
export default Router;
    