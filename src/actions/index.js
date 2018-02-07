/* eslint-disable no-use-before-define,import/prefer-default-export */
import axios from 'axios';

import { isEmpty } from '../utils/check';
import { saveState } from '../utils/localStorage';
import { fetchAdapter } from '../utils/fetchAdapter';

import {
  PHARM_INIT_GET_FAILURE,
  PHARM_INIT_GET_REQUEST,
  PHARM_INIT_GET_SUCCESS,
  PHARM_CREATE_FAILURE,
  PHARM_CREATE_REQUEST,
  PHARM_CREATE_SUCCESS,
  PHARM_EDIT_FAILURE,
  PHARM_EDIT_REQUEST,
  PHARM_EDIT_SUCCESS,
} from '../constants';
import { pharmReduce } from '../utils/pharmReduce';

export function loadPharmInitIfNeed() {
  return (dispatch, getState) => {
    const { storage: { itemsByKey } } = getState();
    if (isEmpty(itemsByKey)) {
      dispatch(actionCreater(PHARM_INIT_GET_REQUEST, null));
      fetchAdapter.get('/db.json')
        .then((response) => {
          const dataByKey = pharmReduce(response.data);
          dispatch(actionCreater(PHARM_INIT_GET_SUCCESS, dataByKey));
        })
        .catch((error) => {
          const message = error.response
            ? error.response.data
            : error.message;
          dispatch(actionCreater(PHARM_INIT_GET_FAILURE, message));
        });
    }
  };
}

export function saveInStorage() {
  return (_, getState) => {
    const { storage: { itemsByKey } } = getState();
    const items = Object.key(itemsByKey).map(key => itemsByKey[key]);
    saveState(items);
  };
}

export function savePharm(data) {
  return (dispatch) => {
    dispatch(actionCreater(PHARM_CREATE_REQUEST, null));
    fetchAdapter.post('/fake', data)
      .then((response) => {
        const dataByKey = { [response.data.id]: response.data };
        dispatch(actionCreater(PHARM_CREATE_SUCCESS, dataByKey));
      })
      .catch((error) => {
        const message = 'error';
        dispatch(actionCreater(PHARM_CREATE_FAILURE, message));
      });
  };
}

export function editPharm(data) {
  return (dispatch) => {
    dispatch(actionCreater(PHARM_EDIT_REQUEST, null));
    fetchAdapter.post('/fake', data)
      .then((response) => {
        const dataByKey = { [response.data.id]: response.data };
        dispatch(actionCreater(PHARM_EDIT_SUCCESS, dataByKey));
      })
      .catch((error) => {
        const message = 'error';
        dispatch(actionCreater(PHARM_EDIT_FAILURE, message));
      });
  };
}

// export function isOpenWindowToggle() {
//   return (dispatch, getState) => {
//     const { storage: { isOpenWindow } } = getState();
//     const payload = !isOpenWindow;
//     dispatch(actionCreater(IS_OPEN_WINDOW_TOGGLE, payload));
//   };
// }

function actionCreater(type, payload) {
  return {
    type,
    payload,
  };
}
