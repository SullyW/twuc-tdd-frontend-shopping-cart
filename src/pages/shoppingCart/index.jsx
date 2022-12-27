import React, {useEffect, useState} from 'react';
import './index.css';
import {getProducts} from './services';

const ShoppingCart = () => {
  const [products, setProducts] = useState([]);
  const [price, setPrice] = useState(0);

  useEffect( () => {
    getProducts().then(data => {
      setProducts(data);
      let total = 0;
      data.forEach(item => {
        total += item.price * item.count;
      });
      setPrice(total);
    });
  }, []);

  return (
    <div className="wrapper">
      <div className="title">Shopping Cart</div>
      <table className="table">
        <thead className="table-header">
          <tr className="table-row">
            <th className="table-cell align-left">商品名称</th>
            <th className="table-cell align-right">单价</th>
            <th className="table-cell align-right">数量</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => {
            return (
              <tr className="table-row" key={product.id}>
                <td className="table-cell align-left">{product.name}</td>
                <td className="table-cell align-right">{product.price.toFixed(2)}</td>
                <td className="table-cell align-right">{product.count}</td>
              </tr>
            );
          })}
        </tbody>
        <div className="operation" >
          <div className="total" >总价：{price}</div>
        </div>
      </table>
    </div>
  );
};


export default ShoppingCart;
