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
});
