/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoadingBar from 'react-redux-loading-bar';
import App from '../components/App';
import ModalWindow from '../components/ModalWindow';
import ContentWindow from '../components/ContentWindow';
import Buttons from '../components/Buttons';
import autoBind from 'react-autobind';
import { withRouter } from 'react-router-dom';


class ButtonsContainer extends Component {
  constructor(props, context) {
    super(props, context);
    autoBind(this);
  }

  onButtonClick(type) {
    const { history } = this.props;
    history.push(type);
  }

  render() {
    const { selectedItemsByKey } = this.props;
    return (
      <Buttons
        selectedItemsByKey={selectedItemsByKey}
        onButtonClick={this.onButtonClick}

      />

    );
  }
}

ButtonsContainer.propTypes = {
  selectedItemsByKey: PropTypes.func,
};
ButtonsContainer.defaultProps = {};

const mapStateToProps = state => ({
  router: state.router,
});

const mapDispatchToProps = dispatch => ({}
  // bindActionCreators({
  //   loadCompositionsIfNeed,
  //   isOpenWindowToggle,
  // }, dispatch)
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ButtonsContainer));
