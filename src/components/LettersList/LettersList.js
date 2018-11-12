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
      <li className="LetterItem" key={item.date}>
        <LetterLine
          date={item.date}
          collocutor={item.collocutor}
          subject={item.subject}
          letter={item.letter}
        />
      </li>
    )

    return (
      <ul className="LettersList">
        {lettersArr}
      </ul>
    );

  }

}

export default LettersList;
