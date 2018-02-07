import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar'
import storage from './storage';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  storage,
  loadingBar: loadingBarReducer,
  router: routerReducer,
});

export default rootReducer;
