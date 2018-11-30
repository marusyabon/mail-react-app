import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Pagination from "react-js-pagination";

import LetterLine from '../LetterLine/LetterLine';

import './LettersList.less';

class LettersList extends React.PureComponent {
  
  state = {
    activePage: this.props.match.params.page || 1
  };

  static propTypes = {
    letters: PropTypes.object.isRequired,
  };

  handlePageChange(pageNumber) {
    this.setState({activePage: pageNumber});
  }

  render() {
    let folderName = this.props.match.params.foldname;
    let lettersArr = this.props.letters.lettersList;
    let targetList = lettersArr[folderName];
    let lettersCount = targetList.length;
    let lettersPerPage = 50;
    let pagesCount = Math.ceil(lettersCount/lettersPerPage);

    let activePage = this.state.activePage;

    let posStart = (activePage - 1)*lettersPerPage;
    let posEnd = activePage * lettersPerPage;

    let letters = targetList.map(item => 
      <li className="LetterItem" key={item.id}>
        <LetterLine info={item} folder={folderName}
        />
      </li>
    );

    letters = letters.slice(posStart, posEnd);

    return (
      <div className="LettersWrap MailArea">
        <ul className="LettersList">
          {letters}
        </ul>

        {
          (pagesCount > 1) &&

          <div>
            <Pagination
              activePage={activePage}
              itemsCountPerPage={lettersPerPage}
              totalItemsCount={lettersCount}
              pageRangeDisplayed={pagesCount}
              onChange={::this.handlePageChange}
              getPageUrl={(e) => {`/messages/${folderName}/${activePage}`}}
            />
          </div>

        }

      </div>
    );

  }

}

const mapStateToProps = function (state) {
  return {
    letters: state.letters,
  };
};

export default connect(mapStateToProps)(LettersList);
