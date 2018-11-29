import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';
import { SlideToggle } from 'react-slide-toggle';
import './MailNav.less';

class MailNav extends React.Component {

  render() {
    return (
      <div className="Sidebar">
        <ul className="Desktop">
          <li className="MainMenuItem">
            <NavLink to={"/messages/inbox"} activeClassName="active">
              <span className="FolderIcon">
                <i className="material-icons">email</i>
              </span>
              <span className="FolderName">Inbox</span>
            </NavLink>
          </li>
          <li className="MainMenuItem">
            <NavLink to={"/messages/sent"} activeClassName="active">
              <span className="FolderIcon">
                <i className="material-icons">reply</i>
              </span>
              <span className="FolderName">Sent</span>
            </NavLink>
          </li>
          <li className="MainMenuItem">
            <NavLink to={"/messages/trash"} activeClassName="active">
              <span className="FolderIcon">
                <i className="material-icons">delete</i>
              </span>
              <span className="FolderName">Trash</span>
            </NavLink>
          </li>
        </ul>

        <div className="Mobile">

          <SlideToggle collapsed>
            {({onToggle, setCollapsibleElement}) => (          
              <React.Fragment>
                <button className="MenuBtn" onClick={onToggle}>
                  <span>
                    <i className="material-icons">menu</i>
                  </span>
                  <span>Menu</span>
                </button>
                <ul ref={setCollapsibleElement}>
                  <li className="MainMenuItem">
                    <NavLink to={"/messages/inbox"} activeClassName="active">
                      <span className="FolderIcon">
                        <i className="material-icons">email</i>
                      </span>
                      <span className="FolderName">Inbox</span>
                    </NavLink>
                  </li>
                  <li className="MainMenuItem">
                    <NavLink to={"/messages/sent"} activeClassName="active">
                      <span className="FolderIcon">
                        <i className="material-icons">reply</i>
                      </span>
                      <span className="FolderName">Sent</span>
                    </NavLink>
                  </li>
                  <li className="MainMenuItem">
                    <NavLink to={"/messages/trash"} activeClassName="active">
                      <span className="FolderIcon">
                        <i className="material-icons">delete</i>
                      </span>
                      <span className="FolderName">Trash</span>
                    </NavLink>
                  </li>
                </ul>
              </React.Fragment>
            )}
          </SlideToggle>
        </div>
      </div>
    );
  }
}

export default MailNav;