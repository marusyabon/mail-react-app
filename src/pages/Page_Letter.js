import React from 'react';
import LetterItem from '../components/LetterItem/LetterItem';

let lettersArray = require('../../letters-list.json');

class Page_Letter extends React.PureComponent {
          
  render() {

    let letterId=this.props.match.params.lid;

    let letterInfo=lettersArray.inbox.find( c => c.id==letterId );

    return (
      <LetterItem
        info={letterInfo}
      />
    );
    
  }

}
    
export default Page_Letter;
    