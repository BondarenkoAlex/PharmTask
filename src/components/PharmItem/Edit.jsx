import React, {
  PureComponent,
} from 'react';
import PropTypes from 'prop-types';
import ModalWindow from '../ModalWindow';
import ContentWindow from '../ContentWindow';
import Dialog from '../Dialog';
import { emptyData } from '../../constants/emptyData';

class Edit extends PureComponent {
  render() {
    const {
      data,
      onChange,
      onCancel,
      onSave,
    } = this.props;
    return (
      <Dialog
        title="Редактирование"
        data={data}
        onChange={onChange}
        onCancel={onCancel}
        onSave={onSave}
      />
    );
  }
}

Edit.propTypes = {
  data: PropTypes.object,
  onChange: PropTypes.func,
  onCancel: PropTypes.func,
  onSave: PropTypes.func,
};

Edit.defaultProps = {};

export default Edit;
