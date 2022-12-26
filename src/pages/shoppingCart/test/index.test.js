import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import ShoppingCart from '../index';

describe('Shopping Cart', () => {
  test('should show shopping cart page', () => {
    const { getByText } = render(<ShoppingCart/>);

    expect(getByText('Shopping Cart')).toBeInTheDocument();
  });

  test('should show shopping cart header', () => {
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
});
