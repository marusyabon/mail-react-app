import React from 'react';
import PropTypes from 'prop-types';

import './NewLetter.less'

class NewLetter extends React.PureComponent {

  render() {
    return (
      <div className="NewLetter">
        <textarea name="" id="" rows="10"></textarea>
        <div className="sendButtonWrap">
          <button>
            <span>Send</span>
            <span>
              <i className="material-icons">reply</i>
            </span>
          </button>
        </div>
      </div>
    )
  }
}

export default NewLetter;