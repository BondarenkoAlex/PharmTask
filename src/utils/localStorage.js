/* eslint-disable no-empty */
export const getState = (name) => {
  try {
    const serializedData = localStorage.getItem(name);
    if (serializedData === null) {
      return undefined;
    }
    return JSON.parse(serializedData);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (name, data) => {
  try {
    const serializedData = JSON.stringify(data);
    localStorage.setItem(name, serializedData);
  } catch (err) {
  }
};
