/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import autoBind from 'react-autobind';
import { bindActionCreators } from 'redux';
import LoadingBar from 'react-redux-loading-bar';
import App from '../components/App';
import ModalWindow from '../components/ModalWindow';
import ContentWindow from '../components/ContentWindow';
import Table from '../components/Table';
import { loadPharmInitIfNeed, saveInStorage } from '../actions';
import { storageSelector } from '../selectors';

class TableContainer extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    this.props.loadPharmInitIfNeed();
  }

  componentWillUnmount() {
    this.props.saveInStorage();
  }

  render() {
    const {
      storage,
      selectedItemsByKey,
      toggleSelectRow,
    } = this.props;
    return (
      <Table
        data={storage}
        selectedItemsByKey={selectedItemsByKey}
        toggleSelectRow={toggleSelectRow}
      />

    );
  }
}

TableContainer.propTypes = {
  storage: PropTypes.object,
  selectedItemsByKey: PropTypes.object,
  // loadPharmInitIfNeed: PropTypes.func,
  // saveInStorage: PropTypes.func,
  toggleSelectRow: PropTypes.func,
};
TableContainer.defaultProps = {};

const mapStateToProps = state => ({
  storage: storageSelector(state),
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    loadPharmInitIfNeed,
    saveInStorage,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(TableContainer);
