import React from 'react';
import {default as isoFetch} from 'isomorphic-fetch';

import LetterItem from '../components/LetterItem/LetterItem';
let lettersData = require('../../letters-list.json');

class Page_Letter extends React.PureComponent {
  
  state = {
    lettersArr: lettersData,
    letterId: this.props.match.params.lid
  };


  findFolder = () => {
    let letterId = this.state.letterId;
    let lettersArr = this.state.lettersArr;
    let targetFolder = this.state.activeFolder;

    for (let key in lettersArr) {
      if(lettersArr[key].find( c => c.id==letterId )) {
        targetFolder = key;
      }
    }  
    return targetFolder;
  }

  targetFolder = this.findFolder();

  findData = () => {
    let letterId = this.state.letterId;
    let lettersArr = this.state.lettersArr;

    let info = lettersArr[this.targetFolder].find( c => c.id==letterId )

    return info;
  }

  render() {

    let info = this.findData();

    return (
      <LetterItem 
        info={info} 
        folder={this.targetFolder}
      />
    );
    
  }

}
    
export default Page_Letter;
    