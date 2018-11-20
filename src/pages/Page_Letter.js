import React from 'react';
import {default as isoFetch} from 'isomorphic-fetch';

import LetterItem from '../components/LetterItem/LetterItem';
let lettersArray = require('../../letters-list.json');

class Page_Letter extends React.PureComponent {
  
  state = {
    inbox: lettersArray['inbox'],
    sent: lettersArray['sent'],
    trash: lettersArray['trash'],
    activeFolder: 'inbox'
  };

  findData = (letterId) => {
    let folder;
    this.state.inbox.find( c => c.id==letterId ) && (folder = 'inbox');
    this.state.sent.find( c => c.id==letterId ) && (folder = 'sent');
    this.state.trash.find( c => c.id==letterId ) && (folder = 'trash');
      
    return folder;
  }

  removerLetter = (id) => {
    let activeFolder = this.state.activeFolder;
    let targetLetter = this.state[activeFolder].filter( p => p.id == id);
    let newTrash = this.state.trash;
    newTrash.push(targetLetter);

    let filterredFolder = this.state[activeFolder].filter( p => {
      return p.id != id;
    });

    this.setState({
      [activeFolder]: [...filterredFolder],
      trash: newTrash
    })
    console.log(id)
  }

  render() {

    let letterId=this.props.match.params.lid;
    
    let activeFolder = this.findData(letterId);
    let letterInfo = this.state[activeFolder].find( c => c.id==letterId )

    return (
      <LetterItem 
        info={letterInfo} 
        folder={activeFolder}
        cbRemoved={this.removerLetter}
      />
    );
    
  }

}
    
export default Page_Letter;
    