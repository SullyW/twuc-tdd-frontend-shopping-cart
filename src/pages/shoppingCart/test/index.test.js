import {render, screen, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import ShoppingCart from '../index';
import {getProducts} from '../services';

jest.mock('../services');

describe('Shopping Cart', () => {
  test('should show shopping cart page', () => {
    const {getByText} = render(<ShoppingCart/>);

    expect(getByText('Shopping Cart')).toBeInTheDocument();
  });

  test('should show shopping cart header', async () => {
    //Given []

    // When
    render(<ShoppingCart/>);

    // Then
    expect(screen.getByText('商品名称')).toBeInTheDocument();
    expect(screen.getByText('单价')).toBeInTheDocument();
    expect(screen.getByText('数量')).toBeInTheDocument();
  });

  // - 组件层:  stub 获取商品列表的业务逻辑, 直接将商品数据渲染在组件
  // - 业务逻辑层：stub 发送请求的数据层，处理请求返回数据
  // - 数据层：stub axios 请求，使用 axios 发送获取列表的请求
  test('should show shopping one product', async () => {
    //Given [ {"id": 1, "name": "小米手环", "price": 299.00, "count": 1},]
    getProducts.mockResolvedValue([
      {'id': 1, 'name': '小米手环', 'price': 299.00, 'count': 1},
      {
        'id': 2,
        'name': '任天堂 Nintendo Switch',
        'price': 2099.00,
        'count': 2
      }]);

    // When
    render(<ShoppingCart/>);

    // Then
    await waitFor(()=> {
      expect(screen.getByText('小米手环')).toBeInTheDocument();
      expect(screen.getByText('299.00')).toBeInTheDocument();
      expect(screen.getByText('1')).toBeInTheDocument();

      expect(screen.getByText('任天堂 Nintendo Switch')).toBeInTheDocument();
      expect(screen.getByText('2099.00')).toBeInTheDocument();
      expect(screen.getByText('2')).toBeInTheDocument();
    });
  });

});
