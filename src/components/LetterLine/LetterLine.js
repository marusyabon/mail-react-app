import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

class LetterLine extends React.PureComponent {
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
    let excerpt = letter.slice(0,90);
    
    return (
      <NavLink to={"/message/"+id}>
        <span className="Collocutor">{collocutor}</span>
        <span className="Subject">{subject}</span>
        <span className="Excerpt">{excerpt}</span>
      </NavLink>
      
    )
  }
}   

export default LetterLine;