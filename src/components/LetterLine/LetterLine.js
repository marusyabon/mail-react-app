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
  
  formatDate = (date) => {
    let todayDay = Date.now();
    let letterDate = Date.parse(date);
    let options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    }

    let timePassed = (todayDay - letterDate) / 1000;


    if (timePassed < 24*60*60) {

      let hours, minutes, sec;

      if (timePassed >= 60*60) {
        hours = parseInt(timePassed / (60*60));
        minutes = parseInt((timePassed - hours*60*60)/60);

        return hours+' hours, '+minutes+' minutes ago'
      }
      else {
        minutes = parseInt(timePassed/60);
        sec = parseInt(timePassed - minutes*60);

        return minutes+' minutes, '+sec+' sec ago'
      }
    }
    else { 
      return new Date(date).toLocaleString("en-US", options)
    }
  }

  render() {
    let {id, date, collocutor, subject, letter} = this.props.info;
    let excerpt = letter.slice(0,90);
    date = this.formatDate(date);
    
    return (
      <NavLink to={"/message/"+id}>
        <span className="Collocutor">{collocutor}</span>
        <span className="Subject">{subject}</span>
        <span className="Excerpt">{excerpt}</span>
        <span className="Date">{date}</span>
      </NavLink>
      
    )
  }
}   

export default LetterLine;