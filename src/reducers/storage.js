/* eslint-disable no-use-before-define */
import {
  PHARM_INIT_GET_FAILURE,
  PHARM_INIT_GET_REQUEST,
  PHARM_INIT_GET_SUCCESS,
  PHARM_CREATE_FAILURE,
  PHARM_CREATE_REQUEST,
  PHARM_CREATE_SUCCESS,
} from '../constants';

import { getState } from '../utils/localStorage';
import { pharmReduce } from '../utils/pharmReduce';

const initialState = {
  isFetching: false,
  error: null,
  itemsByKey: initPharmItemFromStorage(),
};

function storage(state = initialState, action) {
  switch (action.type) {
    case PHARM_INIT_GET_REQUEST:
    case PHARM_CREATE_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }

    case PHARM_INIT_GET_SUCCESS:
    case PHARM_CREATE_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        error: null,
        itemsByKey: {
          ...state.itemsByKey,
          ...action.payload,
        },
      };
    }

    case PHARM_INIT_GET_FAILURE:
    case PHARM_CREATE_FAILURE: {
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    }

    default:
      return state;
  }
}

export default storage;

function initPharmItemFromStorage() {
  const items = getState('pharmItems') || [];
  return pharmReduce(items);
}
