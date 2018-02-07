import React, {
  PureComponent,
} from 'react';
import PropTypes from 'prop-types';
import ModalWindow from '../ModalWindow';
import ContentWindow from '../ContentWindow';
import Dialog from '../Dialog';
import { emptyData } from '../../constants/emptyData';

class Create extends PureComponent {
  render() {
    const {
      data,
      onChange,
      onCancel,
      onSave,
    } = this.props;
    return (
      <Dialog
        title="Создание"
        data={data}
        onChange={onChange}
        onCancel={onCancel}
        onSave={onSave}
      />
    );
  }
}

Create.propTypes = {
  data: PropTypes.object,
  onChange: PropTypes.func,
  onCancel: PropTypes.func,
  onSave: PropTypes.func,
};

Create.defaultProps = {};

export default Create;
