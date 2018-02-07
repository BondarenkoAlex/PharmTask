/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect';

const storageSelect = state => state.storage;

export const storageSelector = createSelector(
  storageSelect,
  (storage) => {
    const { isFetching, error, itemsByKey } = storage;

    return ({
      isFetching,
      error,
      itemsByKey, // Object.keys(itemsByKey).map(key => itemsByKey[key]),
    });
  },
);
