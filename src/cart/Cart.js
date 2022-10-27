import React from 'react';
import ReactDOM from 'react-dom';

import classes from './Cart.module.css';
// import Modal from '../UI/Modal';
import CartItem from './CartItem';

const Cart = () => {
  const cartElements = [
    {
      title: 'Colors',
      price: 100,
      imageUrl:
        'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
      quantity: 2,
    },

    {
      title: 'Black and white Colors',
      price: 50,
      imageUrl:
        'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
      quantity: 3,
    },

    {
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl:
        'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
      quantity: 1,
    },
  ];

  const cartItemList = cartElements.map((item) => (
    <CartItem key={Math.random().toString()} item={item} />
  ));

  const root = document.getElementById('cartModal');

  return ReactDOM.createPortal(
    <div className={classes.overlay}>
      <span className={classes.title}>CART</span>
      <button className={classes.delete}>X</button>
      <div className={classes.heading}>
        <span className={classes.item}>ITEM</span>
        <span className={classes.price}>PRICE</span>
        <span className={classes.quantity}>QUANTITY</span>
      </div>
      {cartItemList}
      <div className={classes.total}>
        <span>Total</span>
        <div>$25.99</div>
      </div>
      <button className={classes.button}>PURCHASE</button>
    </div>,
    root
  );
};

export default Cart;
