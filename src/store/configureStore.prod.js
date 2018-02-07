import {
  createStore,
  applyMiddleware
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { loadingBarMiddleware } from 'react-redux-loading-bar'

const composeEnhancers = composeWithDevTools({
  // options like actionSanitizer, stateSanitizer
});

const enhancer = composeEnhancers(
  applyMiddleware(thunk, loadingBarMiddleware({
    promiseTypeSuffixes: ['REQUEST', 'SUCCESS', 'FAILURE'],
  })),
);

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancer);
}
