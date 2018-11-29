import React from 'react';

import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import { send_letter } from '../../redux/lettersAC';

import './NewLetter.less'

class NewLetter extends React.PureComponent {

  state = {
    showWarning: false,
    showError: false,
    isSend: false, 
    subject: '<No subject>',
    collocutor: '',
    message: ''
  };

  changeValue = (EO) => { 

    let key = EO.target.name;
    let val = EO.target.value;

    this.setState({
      [key]: val,
    })
  }

  validateForm = () => {
    var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let l_collocutor = this.state.collocutor;
    let l_message = this.state.message;

    if (!l_collocutor) {
      this.setState({
        showError: "Enter e-mail"
      })
    }
    
    else if (!reg.test(String(l_collocutor).toLowerCase())) {
      this.setState({
        showError: "Enter correct e-mail"
      })
    }
    else if (!l_message) {
      this.setState({
        showError: "The message can't be empty"
      })
    }

    else {
        this.sendLetter()
    }
  }

  closeErrorMes =() => {
    this.setState({
      showError: false
    })
  }

  sendLetter = () => {
    let l_subject = this.state.subject;
    let l_collocutor = this.state.collocutor;
    let l_message = this.state.message;
    let l_date = (new Date()).toJSON();
    let l_id = 's'+Date.now();

    let info = {
      id: l_id,
      collocutor: l_collocutor,
      subject: l_subject,
      letter: l_message,
      date: l_date
    }

    this.props.dispatch( send_letter(info) );
    this.setState({
      isSend: true
    })
  };

  cancelLetter = () => {
    this.state.message != '' 
    ?
    this.setState({
      showWarning: true
    }) 
    :
    this.props.history.goBack()
  }

  hideWarning = () => {
    this.setState({
      showWarning: false
    })
  }

  render() {
    return (
      <React.Fragment>
      {
        this.state.isSend
        ?
        (
          <div className="MailArea">
            <div className="DialogMessage">
              <p>Message sent</p>
            </div>
            <NavLink to={"/messages/inbox"} className="Btn">
              Back to inbox
            </NavLink>
          </div>
        )
        :
        (
          <div className="NewLetter MailArea">
            <div className="ButtonsPanel">
              <button className="Approve" onClick={this.validateForm}>
                <span>Send</span>
                <span>
                  <i className="material-icons">reply</i>
                </span>
              </button>

              <button className="Warning" onClick={this.cancelLetter}>
                <span>Cancel</span>
                <span>
                  <i className="material-icons">clear</i>
                </span>
              </button>
            </div>
            <div className="Theme">
              <div>
                <span>To:</span>
                <input type="email" name="collocutor" onChange={this.changeValue} />
              </div>
              <div>
                <span>Subject:</span>
                <input type="text" name="subject" onChange={this.changeValue} />
              </div>
            </div>
            <textarea name="message" id="" rows="10" onChange={this.changeValue}></textarea>
          </div>
        )
      }  
      {
        this.state.showWarning &&
        (
          <div className="PopupgBg">
            <div className="PopupMessage Flex">
              <div>
                <h3>Are you shure? The text of the letter will be lost</h3>
                <div className="ButtonsPanel">
                  <button className="SendLetter" className="Warning">
                    <NavLink to={"/messages/inbox"}>
                      <span>Ok</span>
                      <span>
                        <i className="material-icons">check</i>
                      </span>
                    </NavLink>
                  </button>

                  <button className="Approve" onClick={this.hideWarning}>
                    <span>Cancel</span>
                    <span>
                      <i className="material-icons">clear</i>
                    </span>
                  </button>
                </div>
              </div>
              
            </div>
          </div>
        )
      }   
      {
        this.state.showError &&
        (
          <div className="PopupgBg">
            <div className="PopupMessage Flex">
              <div>
                <h3>{this.state.showError}</h3>
                <div className="ButtonsPanel">
                  <button className="SendLetter" className="Approve" onClick={this.closeErrorMes}>
                      <span>Ok</span>
                      <span>
                        <i className="material-icons">check</i>
                      </span>
                  </button>
                  </div>
              </div>
            </div>
          </div>
        )
      }   
      </React.Fragment>
    )
  }
}

const mapStateToProps = function(state) {
  return {
    letters: state.letters,
  };
};

export default connect(mapStateToProps)(NewLetter);