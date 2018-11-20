import React from 'react';

import LettersList from '../components/LettersList/LettersList';

let lettersArray = require('../../letters-list.json');

let incomingLetters = lettersArray.inbox;

class Page_Mail_Box extends React.PureComponent {
          
  render() {

    let folderName = this.props.match.params.foldname;

    let targetList = lettersArray[folderName];

    !targetList  && (targetList = incomingLetters);
    
    return (
      <LettersList key={folderName} letters={targetList} />
    );
  }
  
}
    
export default Page_Mail_Box;
    