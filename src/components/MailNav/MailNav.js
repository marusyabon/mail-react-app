import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import './MailNav.less';

class MailNav extends React.PureComponent {

  render() {
    return (
      <div className="Sidebar">
        <ul>
          <li className="MainMenuItem">
            <NavLink to={"/messages/inbox"}>
              <span className="FolderIcon">
                <i className="material-icons">email</i>
              </span>
              <span className="FolderName">Inbox</span>
            </NavLink>
          </li>
          <li className="MainMenuItem">
            <NavLink to={"/messages/sent"}>
              <span className="FolderIcon">
                <i className="material-icons">reply</i>
              </span>
              <span className="FolderName">Sent</span>
            </NavLink>
          </li>
          <li className="MainMenuItem">
            <NavLink to={"/messages/trash"}>
              <span className="FolderIcon">
                <i className="material-icons">delete</i>
              </span>
              <span className="FolderName">Trash</span>
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default MailNav;