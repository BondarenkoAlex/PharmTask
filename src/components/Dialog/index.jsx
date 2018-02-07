import React, {
  PureComponent,
} from 'react';
import PropTypes from 'prop-types';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { emptyData } from '../../constants/emptyData';

class DialogComp extends PureComponent {
  render() {
    const {
      data,
      title,
      onChange,
      onCancel,
      onSave,
    } = this.props;
    return (
      <Dialog
        open
        onClose={onCancel}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <TextField
            label="Артикул"
            placeholder="Артикул"
            margin="normal"
            fullWidth
            value={data.article}
            onChange={e => onChange({ article: e.target.value })}
          />
          <TextField
            label="Название"
            placeholder="Название"
            margin="normal"
            fullWidth
            value={data.title}
            onChange={e => onChange({ title: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onCancel}>
            Отмена
          </Button>
          <Button onClick={onSave} color="primary">
            Сохранить
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

DialogComp.propTypes = {
  data: PropTypes.object,
  title: PropTypes.string,
  onChange: PropTypes.func,
  onCancel: PropTypes.func,
  onSave: PropTypes.func,
};

DialogComp.defaultProps = {
  data: emptyData.object,
  title: emptyData.string,
  onChange: emptyData.func,
  onCancel: emptyData.func,
  onSave: emptyData.func,
};

export default DialogComp;
