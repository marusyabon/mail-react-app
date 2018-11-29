import React from 'react';
import PropTypes from 'prop-types';

import './LetterItem.less';
import {connect} from 'react-redux';
import { remover_letter } from '../../redux/lettersAC';

class LetterItem extends React.PureComponent {

  static propTypes = {
    letters: PropTypes.object.isRequired,
  };

  state = {
    isRemoved: false
  }

  targetFolder = '';

  findData = () => {

    let letterId = this.props.match.params.lid;
    let lettersArr = this.props.letters.lettersList;

    for (let key in lettersArr) {
      if(lettersArr[key].find( c => c.id==letterId )) {
        this.targetFolder = key;
      }
    } 

    let info = lettersArr[this.targetFolder].find( c => c.id==letterId );

    return info;
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
      return new Date(date).toLocaleString("en-US", options)
    }
  }

  formatLetter = (letter) => {
    let strArr = letter.split("\n");
    let arr= [];
    let n=1;
    strArr.forEach(element => {
      arr.push(
          element, <br key={n++}/>
        )
    });
    return arr;
  }

  removeLetter = () => {
    this.props.dispatch( remover_letter(this.props.match.params.lid) );
    this.setState({
      isRemoved: true
    });

    setTimeout(this.props.history.goBack, 1000)
  }

  render() {

    let info = this.findData();
    let {id, date, collocutor, subject, letter} = info;

    let isTrash = (this.targetFolder == 'trash');
    date = this.formatDate(date);
    letter = this.formatLetter(letter);
   
    return (
      <React.Fragment>
      {
        this.state.isRemoved 
        ? 
        (
          <div className="DialogMessage fadeIn MailArea">
            <p>Letter moved to trash</p>
          </div>
        )
        :
        (
          <div className="LetterArea MailArea">
            <div className="LetterHead">
              <div className="Theme">
                <h1>{subject}</h1>
                <h3>{collocutor}</h3>
                <p>{date}</p>
              </div>
              <div className="ControlBar">
                {
                  !isTrash
                  ? <button onClick={this.removeLetter}>Remove</button>
                  : <p>removed</p>
                }
              </div>
            </div>     
            <div className="LetterBody">
              {letter}
            </div>
          </div>
        )
      }
    </React.Fragment>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    letters: state.letters,
  };
};

export default connect(mapStateToProps)(LetterItem);
