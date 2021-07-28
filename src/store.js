// This is store

import { createStore } from "redux";
import rootReducer from "./reducers";

const store = createStore(
    rootReducer,
    // chrome extension redux devtool ki waja se kya
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default store;