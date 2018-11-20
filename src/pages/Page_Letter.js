import React from 'react';
import {default as isoFetch} from 'isomorphic-fetch';

import LetterItem from '../components/LetterItem/LetterItem';
let lettersData = require('../../letters-list.json');

class Page_Letter extends React.PureComponent {
  
  state = {
    lettersArr: lettersData,
    activeFolder: 'inbox',
  };

  findData = (letterId) => {
    let lettersArr = this.state.lettersArr;
    let targetFolder;
    for (let key in lettersArr) {
      if(lettersArr[key].find( c => c.id==letterId )) {
        targetFolder = key;
        this.setState({
          activeFolder: targetFolder,
        }) 
      }
    }     
    console.log(targetFolder);
    return lettersArr[targetFolder].find( c => c.id==letterId );
  }

  removerLetter = (id) => {
    let folder = this.state.activeFolder;
    let targetLetter = this.state.lettersArr[folder].filter( p => p.id == id);

    // let newTrash = this.state.trash;
    // newTrash.push(targetLetter);

    let filterredFolder = this.state.lettersArr[folder].filter( p => {
      return p.id != id;
    });

    this.setState({
      [folder]: [...filterredFolder],
    })
    console.log(id)
  }

  render() {

    let letterId=this.props.match.params.lid;
    let letterInfo = this.findData(letterId);

    return (
      <LetterItem 
        info={letterInfo} 
        folder={this.state.activeFolder}
        cbRemoved={this.removerLetter}
      />
    );
    
  }

}
    
export default Page_Letter;
    