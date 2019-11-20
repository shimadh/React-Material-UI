import { createStore, combineReducers } from "redux";

import reducer from './authReducer';

const rootReducer = combineReducers({
  authReducer: reducer,
});


export default function configureStore() {
  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};