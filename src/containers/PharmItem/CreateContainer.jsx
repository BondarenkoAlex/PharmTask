/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import autoBind from 'react-autobind';
import { withRouter } from 'react-router-dom';
import Create from '../../components/PharmItem/Create';
import { savePharm } from '../../actions';

const data = {
  article: '',
  title: '',
  created: undefined,
  modified: undefined,
};

class CreateContainer extends Component {
  constructor(props, context) {
    super(props, context);
    autoBind(this);
    this.state = data;
  }

  onChange(data) {
    this.setState(data);
  }

  onSave() {
    const data = this.state;
    this.props.savePharm(data);
    this.onCancel();
  }

  onCancel() {
    const { history } = this.props;
    history.push('');
  }

  render() {
    return (
      <Create
        data={this.state}
        onChange={this.onChange}
        onSave={this.onSave}
        onCancel={this.onCancel}
      />
    );
  }
}

CreateContainer.propTypes = {};
CreateContainer.defaultProps = {};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    savePharm,
  }, dispatch)
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateContainer));
