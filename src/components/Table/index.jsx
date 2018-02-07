import React, {
  PureComponent,
} from 'react';
import PropTypes from 'prop-types';
import Table from 'material-ui/Table';
import Body from './Body';
import Head from './Head';
import Pagination from './Pagination';

class index extends PureComponent {
  render() {
    const {
      data,
      toggleSelectRow,
      selectedItemsByKey,
    } = this.props;

    return (
      <Table>
        <Head />
        <Body
          data={data}
          toggleSelectRow={toggleSelectRow}
          selectedItemsByKey={selectedItemsByKey}
        />
        <Pagination />
      </Table>
    );
  }
}

index.propTypes = {
  data: PropTypes.object,
  selectedItemsByKey: PropTypes.object,
  toggleSelectRow: PropTypes.func,
};
index.defaultProps = {};

export default index;
