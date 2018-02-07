/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoadingBar from 'react-redux-loading-bar';
import App from '../components/App';
import ModalWindow from '../components/ModalWindow';
import TableButtonsContainer from './TableButtonsContainer';
import ContentWindow from '../components/ContentWindow';
import { renderRoutes } from 'react-router-config';

class AppContainer extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { route } = this.props;
    return (
      <App>
        <LoadingBar />
        <TableButtonsContainer />
        {renderRoutes(route.routes)}
      </App>
    );
  }
}

AppContainer.propTypes = {};
AppContainer.defaultProps = {};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({}
  // bindActionCreators({
  //   loadCompositionsIfNeed,
  //   isOpenWindowToggle,
  // }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
