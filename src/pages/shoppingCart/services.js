import {getShoppingList} from './dataHelper';
import {BASE_URL} from '../../constants';

export const getProducts = () => {
  return getShoppingList(BASE_URL).then(response => {
    return response.data.products;
  }).catch(() => {
    return [];
  });
};
