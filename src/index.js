/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import createHistory from 'history/createBrowserHistory';

import { ConnectedRouter } from 'react-router-redux';
import { renderRoutes } from 'react-router-config';
import routes from './routes';

const store = configureStore();
const history = createHistory();

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      {renderRoutes(routes)}
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
