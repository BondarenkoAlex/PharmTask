/* eslint-disable import/prefer-default-export */

export function pharmReduce(items) {
  return items.reduce((acc, cur = {}) => ({
    ...acc,
    [cur.id]: cur,
  }), {});
}
