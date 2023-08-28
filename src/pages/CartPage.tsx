import React from 'react';

import { useCart } from '../contexts/CartContext';
import '../utils/utils'


const CartPage: React.FC = () => {
  const {cartItems = []} = useCart();

  return (
    <>
      <div className='title'>
        <h1>Carrinho</h1>
      </div>
      <div className='table'>
        <div className='table-header'>
          <span>Produto</span>
          <span>Descricao</span>
          <span>Quantidade</span>
          <span>Valor Unidade</span>
          <span>Valor total</span>
        </div>
        <div className='table-content'>

        </div>

        {cartItems.map( item => (
          <div>{item.product.title}</div>
        ))}
      </div>
    </>
  );
};

export default CartPage;
