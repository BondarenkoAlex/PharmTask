/* eslint-disable import/prefer-default-export,no-use-before-define,prefer-rest-params */
import axios from 'axios';
import { randomTime } from './randomTime';
import { generateID } from './generateID';

export const fetchAdapter = {
  async get() {
    await randomDelay();
    return axios.get.apply(null, arguments);
  },
  async post() {
    await randomDelay();
    const arg = Array.prototype.slice.apply(arguments);
    const data = {
      ...arg[1],
      id: generateID(),
      created: getNowDate(),
      modified: getNowDate(),
    };
    return ({ data });
    // return axios.post.apply(null, arguments);
  },
  async patch() {
    await randomDelay();
    const arg = Array.prototype.slice.apply(arguments);
    const data = {
      ...arg[1],
      modified: getNowDate(),
    };
    return ({ data });
    // return axios.patch.apply(null, arguments);
  },
  async delete() {
    await randomDelay();
    return ({ data: null });
    // return axios.delete.apply(null, arguments);
  },
};

function randomDelay() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, randomTime());
  });
}

function getNowDate() {
  const dateNow = new Date();
  const d = dateNow.getDate();
  const m = dateNow.getMonth();
  const y = dateNow.getFullYear();
  return `${d}.${m}.${y}`;
}
