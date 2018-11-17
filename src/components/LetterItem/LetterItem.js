import React from 'react';
import PropTypes from 'prop-types';

class LetterItem extends React.PureComponent {
  static propTypes = {
    info:PropTypes.shape({
      date: PropTypes.string.isRequired,
      collocutor: PropTypes.string.isRequired,
      subject: PropTypes.string.isRequired,
      letter: PropTypes.string.isRequired
    }),
  }
  
  render() {

    let {id, collocutor, subject, letter} = this.props.info;
   
    return (
      <div className="LetterArea">
        <p>{id}</p>
        <h1>{subject}</h1>
      </div>
    )
  }
}

export default LetterItem;