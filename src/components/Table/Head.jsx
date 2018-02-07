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

// import { db } from '../../config/_db';

class Head extends PureComponent {
  render() {
    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={"true"}
              checked={false}
              onChange={() => {}}
            />
          </TableCell>

          <TableCell numeric>
            <TableSortLabel
              active={"" === ""}
              direction={""}
              onClick={()=>{}}
            >
              Артикул
            </TableSortLabel>
          </TableCell>
          <TableCell numeric>Название</TableCell>
          <TableCell numeric>Создан</TableCell>
          <TableCell numeric>Изменен</TableCell>
        </TableRow>
      </TableHead>
    );
  }
}

Head.propTypes = {};
Head.defaultProps = {};

export default Head;
