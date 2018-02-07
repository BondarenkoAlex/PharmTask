/* eslint-disable import/prefer-default-export */
export const isEmpty = function isEmpty(obj) {
  if (obj === null || obj === undefined) {
    return true;
  } else if (obj && typeof obj === 'object' && obj.constructor === Array) {
    return obj.length === 0;
  } else if (obj && typeof obj === 'object' && obj.constructor === Object) {
    return (Object.getOwnPropertyNames(obj).length === 0);
  } else if (typeof obj === 'string' || (typeof obj === 'object' && obj.constructor === String)) {
    return obj.length === 0;
  } else if (typeof obj === 'object' && Object.getOwnPropertyNames(obj).length === 0) {
    return true;
  }
  /* isInteger */
  else if (String(parseFloat(obj, 10)) === String(obj)) {
    return obj === 0;
  } else if (!obj) {
    return obj;
  }

  return false;
};
