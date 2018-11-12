import React from 'react';
import PropTypes from 'prop-types';

class LetterLine extends React.PureComponent {
  static propTypes = {
    date: PropTypes.string.isRequired,
    collocutor: PropTypes.string.isRequired,
    subject: PropTypes.string.isRequired,
    letter: PropTypes.string.isRequired
  }

  render() {
    let excerpt = this.props.letter.slice(0,90);
    
    return (
      <React.Fragment>
        <span className="Collocutor">{this.props.collocutor}</span>
        <span className="Subject">{this.props.subject}</span>
        <span className="Excerpt">{excerpt}</span>
      </React.Fragment>
      
    )
  }
}   

export default LetterLine;