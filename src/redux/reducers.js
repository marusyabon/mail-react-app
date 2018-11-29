import { combineReducers } from 'redux';

import lettersReducer from "./lettersReducer";

let combinedReducer=combineReducers({
    letters: lettersReducer, 
});

export default combinedReducer;
