import React, {
  PureComponent,
} from 'react';
import PropTypes from 'prop-types';
import Buttons from '../Buttons';
import Table from '../Table';

class TableButtons extends PureComponent {
  render() {
    return (
      <div>
        <Buttons />
        <Table />
      </div>
    );
  }
}

TableButtons.propTypes = {};
TableButtons.defaultProps = {};

export default TableButtons;
