/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import autoBind from 'react-autobind';
import { withRouter } from 'react-router-dom';
import Edit from '../../components/PharmItem/Edit';
import { editPharm } from '../../actions';

const data = {
  article: '',
  title: '',
  created: undefined,
  modified: undefined,
};

class EditContainer extends Component {
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
    this.props.editPharm(data);
    this.onCancel();
  }

  onCancel() {
    const { history } = this.props;
    history.push('');
  }

  render() {
    return (
      <Edit
        data={this.state}
        onChange={this.onChange}
        onSave={this.onSave}
        onCancel={this.onCancel}
      />
    );
  }
}

EditContainer.propTypes = {};
EditContainer.defaultProps = {};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    editPharm,
  }, dispatch)
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditContainer));
