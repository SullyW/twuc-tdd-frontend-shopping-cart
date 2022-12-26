import axios from 'axios';

export const getShoppingList = () => {
  return axios.get('/');
};
