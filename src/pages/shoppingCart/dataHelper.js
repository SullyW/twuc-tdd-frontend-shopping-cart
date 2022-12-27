import axios from 'axios';

export const getShoppingList = (path) => {
  return axios.get(path);
};
