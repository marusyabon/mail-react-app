import React from 'react';
import MailBody from '../components/MailBody/MailBody';

import letters from '../appData';

class Page_Mail_Box extends React.PureComponent {
  
  render() {

    let targetFolder = this.props.match.params.foldname;
    let letterId= this.props.match.params.lid;

    let targetList = letters[targetFolder];
    !targetFolder && (targetList = letters.inbox && (targetFolder ='inbox'));
    
    return (
      <MailBody key={targetFolder || letterId} letters={targetList || letters.inbox} folder={targetFolder} workMode={letterId ? 2 : 1} />
    );
  }
  
}
    
export default Page_Mail_Box;
    