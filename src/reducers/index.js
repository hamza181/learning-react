// This is main reducer and root reducer

import changeNumber from "./upDown";
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    changeNumber,
})

export default rootReducer;