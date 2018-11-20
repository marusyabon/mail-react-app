import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './ControllBar.less'

class ControllBar extends React.PureComponent {

  render() {
    return (
      <div className="ControllBar">
        <div className="ComposeBtn">
          <NavLink to={"/new-message"}>
            <span>New</span>
            <span>
              <i className="material-icons">email</i>
            </span>
          </NavLink>
        </div>
      </div>
    )
  }
}

export default ControllBar;