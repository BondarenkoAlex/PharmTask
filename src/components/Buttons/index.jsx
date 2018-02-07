import React, {
  PureComponent,
} from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import { emptyData } from '../../constants/emptyData';

class Buttons extends PureComponent {
  render() {
    const { selectedItemsByKey, onButtonClick } = this.props;
    const cntSelect = Object.keys(selectedItemsByKey).length;
    const isSelectMany = cntSelect > 1;
    const isSelectNone = cntSelect === 0;
    return (
      <div>
        <Button onClick={() => {
          onButtonClick('create');
        }}>
          Создать
        </Button>
        <Button
          onClick={() => {
            onButtonClick('edit');
          }}
          disabled={isSelectNone || isSelectMany}
        >
          Редактировать
        </Button>
        <Button
          onClick={() => {
            onButtonClick('copy');
          }}
          disabled={isSelectNone || isSelectMany}
        >
          Копировать
        </Button>
        <Button
          onClick={() => {
            onButtonClick('delete');
          }}
          disabled={isSelectNone}
        >
          Удалить
        </Button>
      </div>
    );
  }
}

Buttons.propTypes = {
  selectedItemsByKey: PropTypes.object,
  onButtonClick: PropTypes.func,
};
Buttons.defaultProps = {
  selectedItemsByKey: emptyData.object,
  onButtonClick: emptyData.func,
};

export default Buttons;
