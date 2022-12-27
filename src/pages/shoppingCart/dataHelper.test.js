import axios from 'axios';
import {getShoppingList} from './dataHelper';

jest.mock('axios');


// - 数据层：stub axios 请求，使用 axios 发送获取列表的请求
describe('dataHelper', () => {
  it('should get server data', async () => {
    //Given  axios   data
    axios.get.mockResolvedValue('success');
    const requestPath = 'http://localhost:8000/';

    // When
    const result = await getShoppingList(requestPath);

    // Then
    expect(axios.get).toBeCalledWith(requestPath);
    expect(result).toBe('success');
  });
});
