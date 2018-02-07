// jscs:disable requirePaddingNewLinesBeforeLineComments
// jscs:disable requireTrailingComma
// jscs:disable requireSpaceAfterComma
import AppContainer from './containers/AppContainer';
import CreateContainer from './containers/PharmItem/CreateContainer';
import EditContainer from './containers/PharmItem/EditContainer';

const project = require('../webpack/project.config.js');

const publicPath = project.publicPath;

const routes = [{
  component: AppContainer,
  routes: [ {
    path: `${publicPath}create`,
    component: CreateContainer,
  }, {
    path: `${publicPath}edit`,
    component: EditContainer,
  }],
}];

export { routes as default };
