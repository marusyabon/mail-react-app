import React from 'react';
import PropTypes from 'prop-types';

import './LetterItem.less';

class LetterItem extends React.PureComponent {
  static propTypes = {
    info:PropTypes.shape({
      date: PropTypes.string.isRequired,
      collocutor: PropTypes.string.isRequired,
      subject: PropTypes.string.isRequired,
      letter: PropTypes.string.isRequired
    }),
    cbRemoved: PropTypes.func.isRequired
  }

  formatDate = (date) => {
    let todayDay = Date.now();
    let letterDate = Date.parse(date);
    let options = {
      year: 'numeric',
      month: 'long',
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
      return new Date(this.props.info.date).toLocaleString("en-US", options)
    }
  }

  removeLetter = () => {
    this.props.cbRemoved(this.props.info.id);   
  }

  render() {

    let {date, collocutor, subject, letter} = this.props.info;
    date = this.formatDate(date);
   
    return (
      <div className="LetterArea">
        <div className="LetterHead">
          <div className="Theme">
            <h1>{subject}</h1>
            <h3>{collocutor}</h3>
            <p>{date}</p>
          </div>
          <div className="ControlBar">
            <button onClick={this.removeLetter}>Remove</button>
          </div>
        </div>     
        <div className="LetterBody">
          {letter}
        </div>
      </div>
    )
  }
}

export default LetterItem;