import React, {
  PureComponent,
} from 'react';
import PropTypes from 'prop-types';
import Table, {
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
} from 'material-ui/Table';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import Tooltip from 'material-ui/Tooltip';
import FilterListIcon from 'material-ui-icons/FilterList';
import { lighten } from 'material-ui/styles/colorManipulator';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import Icon from 'material-ui/Icon';
import DeleteIcon from 'material-ui-icons/Delete';

import Menu, { MenuItem } from 'material-ui/Menu';
import MoreVertIcon from 'material-ui-icons/MoreVert';

import { emptyData } from '../../constants/emptyData';

class Body extends PureComponent {
  render() {
    const {
      data: { itemsByKey },
      toggleSelectRow,
      selectedItemsByKey,
    } = this.props;
    const items = Object.keys(itemsByKey).map(key => itemsByKey[key])
      || emptyData.array;
    return (
      <TableBody>
        {items.map(n => {
          const isSelected = !!selectedItemsByKey[n.id];
          return (
            <TableRow
              key={n.id}
              hover
              onClick={() => toggleSelectRow(n)}
              role="checkbox"
              aria-checked={isSelected}
              tabIndex={-1}
              selected={isSelected}
            >
              <TableCell padding="checkbox">
                <Checkbox checked={isSelected} />
              </TableCell>
              <TableCell numeric>{n.article}</TableCell>
              <TableCell numeric>{n.title}</TableCell>
              <TableCell numeric>{n.created}</TableCell>
              <TableCell numeric>{n.modified}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    );
  }
}

Body.propTypes = {
  data: PropTypes.object,
  toggleSelectRow: PropTypes.func,
};
Body.defaultProps = {
  data: emptyData.object,
  toggleSelectRow: emptyData.func,
};

export default Body;
