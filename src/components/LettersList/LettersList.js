import React from 'react';
import PropTypes from 'prop-types';

import LetterLine from '../LetterLine/LetterLine';

import './LettersList.less';

class LettersList extends React.PureComponent {

  static propTypes = {
    letters: PropTypes.array.isRequired,
  }

  state = {
    lettersArr: this.props.letters
  }

  render() {

    let lettersArr = this.state.lettersArr.map(item => 
      <li className="LetterItem" key={item.id}>
        <LetterLine info={item}
        />
      </li>
    )

    return (
      <div className="LettersWrap">
        <ul className="LettersList">
          {lettersArr}
        </ul>
      </div>
    );

  }

}

export default LettersList;
