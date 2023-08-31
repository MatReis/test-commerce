import React from 'react';

import { useCart } from '../contexts/CartContext';
import '../utils/Utils.css'
import CartItemTable from '../componets/CartItemTable';
import './CartPage.css'


const CartPage: React.FC = () => {
  const {cartItems = []} = useCart();

  if (cartItems.length === 0) {
    return <h3>Ops! Carrinho ainda esta vazio!</h3>
  }

  return (
    <div className='responsive-wrapper'>
      <div className='title'>
        <h1>Carrinho</h1>
      </div>
      <div className='cart-content'>
        <div className='table-grid'>
          <div className='table-grid-header'>
            <div className='table-row'>
              <div>Preview</div>
              <div>Produto</div>
              <div>Quantidade</div>
              <div>Valor Unidade</div>
              <div>Valor Total</div>
            </div>
          </div>
          {cartItems.map(item => (
            <CartItemTable product={item.product} quantity={item.quantity} />
          ))}
        </div>
        <div className='cart-resume'>
            <span> Total Produtos: </span> <span> RS 5555,55</span> 
            <span> Desconto: </span> <span> RS 5555,55</span> 
            <span> Total Compra:  </span> <span> RS 5555,55</span> 
        </div>
      </div>
    </div>
  );
};

export default CartPage;
