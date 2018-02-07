/* eslint-disable import/prefer-default-export */
export function randomTime(min = 500, max = 2000) {
  return (Math.round(((Math.random() * (max - min)) + min) / 100) * 100);
}
