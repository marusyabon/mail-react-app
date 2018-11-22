import React from 'react';
import PropTypes from 'prop-types';
import {deletionEvents} from '../../events';
import LetterLine from '../LetterLine/LetterLine';

import LetterItem from '../LetterItem/LetterItem';

import './MailBody.less';

class MailBody extends React.PureComponent {

  static propTypes = {
    letters: PropTypes.array.isRequired,
    folder: PropTypes.string.isRequired,
  }

  state = {
    lettersArr: this.props.letters,
    targetFolder: this.props.folder,
    workMode: this.props.workMode
  };

  // componentDidMount = () => {
  //   deletionEvents.addListener('LetterDeleted',this.removerLetter);
  // };

  // componentWillUnmount = () => {
  //   deletionEvents.removeListener('LetterDeleted',this.removerLetter);
  // };

  // removerLetter = (id) => {
  //   let targetLetter = this.state.lettersArr[this.state.targetFolder].filter( p => p.id == id);

  //   let filterredList = this.state.lettersArr[this.state.targetFolder].filter( p => {
  //     return p.id != id;
  //   });

  //   filterredList =  this.state.lettersArr.trash.push(targetLetter);

  //   this.setState({
  //     lettersArr: [...filterredList],
  //   });
  //   console.log(this.state.lettersArr);
  // }

  render() {
    let lettersArr = this.state.lettersArr.map(item => 
      <li className="LetterItem" key={item.id}>
        <LetterLine info={item} folder={this.props.folder}
        />
      </li>
    )

    return (
      (this.state.workMode==1) && 
      (
        <div className="LettersWrap">
          <ul className="LettersList">
            {lettersArr}
          </ul>
        </div>
      )

      (this.state.workMode==2) && (<LetterItem letters={this.state.letters.inbox[0]} />)

      
    );

  }

}

export default MailBody;
