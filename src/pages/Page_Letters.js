import React from 'react';
import {deletionEvents} from '../events';
import LettersList from '../components/LettersList/LettersList';

let lettersData = require('../../letters-list.json');

class Page_Mail_Box extends React.PureComponent {
  state = {
    lettersArr: lettersData,
    targetFolder: this.props.match.params.foldname
  };

  componentDidMount = () => {
    deletionEvents.addListener('LetterDeleted',this.removerLetter);
  };

  componentWillUnmount = () => {
    deletionEvents.removeListener('LetterDeleted',this.removerLetter);
  };

  removerLetter = (id) => {
    let targetLetter = this.state.lettersArr[this.state.targetFolder].filter( p => p.id == id);

    let filterredList = this.state.lettersArr[this.state.targetFolder].filter( p => {
      return p.id != id;
    });

    filterredList =  this.state.lettersArr.trash.push(targetLetter);

    this.setState({
      lettersArr: [...filterredList],
    })
  }
          
  render() {

    let folderName = this.props.match.params.foldname;

    let targetList = this.state.lettersArr[folderName];

    !folderName  && (targetList = this.state.lettersArr.inbox);
    console.log(this.state.lettersArr);
    return (
      <LettersList key={folderName} letters={targetList} />
    );
  }
  
}
    
export default Page_Mail_Box;
    