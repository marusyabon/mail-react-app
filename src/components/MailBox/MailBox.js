import React from 'react';
import PropTypes from 'prop-types';

import LettersList from '../LettersList/LettersList';

let incomingLetters = require('../../../incoming.json')

import './MailBox.less';

class MailBox extends React.PureComponent {
  render() {
    return (
      <div className="MailBox">
        <div className="Sidebar">
          <ul>
            <li>
              <span className="FolderIcon">
                <i className="material-icons">email</i>
              </span>
              <span className="FolderName">Inbox</span>
            </li>
            <li>
              <span className="FolderIcon">
                <i className="material-icons">reply</i>
              </span>
              <span className="FolderName">Sent</span>
            </li>
            <li>
              <span className="FolderIcon">
                <i className="material-icons">delete</i>
              </span>
              <span className="FolderName">Trash</span>
              </li>
          </ul>
        </div>

        <div className="LettersWrap">
          <LettersList letters={incomingLetters} />
        </div>
      </div>
    );
  }
}

export default MailBox;