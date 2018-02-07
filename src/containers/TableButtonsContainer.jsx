/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import autoBind from 'react-autobind';
import { Link } from 'react-router-dom';
import ButtonsContainer from './ButtonsContainer';
import TableContainer from './TableContainer';

class TableButtonsContainer extends Component {
  constructor(props, context) {
    super(props, context);
    autoBind(this);
    this.state = {
      selectedItemsByKey: {},
    };
  }

  toggleSelectRow(item) {
    this.setState((prevState) => {
      const { selectedItemsByKey } = prevState;
      const isSelected = !!selectedItemsByKey[item && item.id];
      if (isSelected) {
        const selectItem = { ...selectedItemsByKey };
        delete selectItem[item && item.id];
        return ({
          selectedItemsByKey: selectItem,
        });
      }
      return ({
        selectedItemsByKey: {
          ...selectedItemsByKey,
          [item && item.id]: item,
        },
      });
    });
  }

  render() {
    const { selectedItemsByKey } = this.state;
    return (
      <div>
        <ButtonsContainer
          selectedItemsByKey={selectedItemsByKey}
        />
        <TableContainer
          toggleSelectRow={this.toggleSelectRow}
          selectedItemsByKey={selectedItemsByKey}
        />
      </div>
    );
  }
}

TableButtonsContainer.propTypes = {};
TableButtonsContainer.defaultProps = {};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({}
  // bindActionCreators({
  //   loadCompositionsIfNeed,
  //   isOpenWindowToggle,
  // }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(TableButtonsContainer);
