import { REMOVER_LETTER, SEND_LETTER } from './lettersAC';
import appData from '../appData';

const initState={
  lettersList: appData,
};

function lettersReducer(state=initState,action) {

  switch (action.type) {

    case REMOVER_LETTER: {
      let newState={...state};

      let lettersArr = newState.lettersList;
      let letterId = action.letterid;
      let folder;
      for (let key in lettersArr) {
        if(lettersArr[key].find( c => c.id==letterId )) {
          folder = key;
        }
      }  
      let targetLetter = lettersArr[folder].find( c => c.id==letterId );

      lettersArr[folder] = lettersArr[folder].filter(l => {
        return l.id != letterId;
      });
      lettersArr.trash.unshift(targetLetter);
    
      newState.lettersList = lettersArr;

      return newState;
    }

    case SEND_LETTER: {
      let newState={...state};

      let lettersArr = newState.lettersList;
      let letterInfo = action.letterinfo;

      lettersArr.sent.unshift(letterInfo);
    
      newState.lettersList = lettersArr;
      return newState;
    }
    
    default:
      return state;
  }
}

export default lettersReducer;
