import {getShoppingList} from './dataHelper';
import {getProducts} from './services';
import {BASE_URL} from '../../constants';

jest.mock('./dataHelper');

describe('service', function () {

  it('should return product list', async () => {
    // Given  response requestPath
    const productList = [
      {'id': 1, 'name': '小米手环', 'price': 299.00, 'count': 1},
      {'id': 2, 'name': '任天堂 Nintendo Switch', 'price': 2099.00, 'count': 2},
      {'id': 3, 'name': 'SONY WH-1000XM4 无线智能降噪耳机', 'price': 2099.00, 'count': 1},
      {'id': 4, 'name': 'iPhone 13 256GB', 'price': 6799.00, 'count': 1}
    ];
    getShoppingList.mockResolvedValue({data: {
      products: productList
    }});

    // When
    const result = await getProducts();

    // Then
    expect(getShoppingList).toBeCalledWith(BASE_URL);
    expect(result).toBe(productList);
  });
});
