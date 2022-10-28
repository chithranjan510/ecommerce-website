import React, {useContext} from 'react';
import ReactDOM from 'react-dom';

import classes from './Cart.module.css';
import CartItem from './CartItem';
import cartContext from '../store/cart-Context';

const Cart = (props) => {

  const cartCtx = useContext(cartContext);

  const cartElements = cartCtx.item;

  const cartItemList = cartElements.map((item) => (
    <CartItem key={Math.random().toString()} item={item} />
  ));

  const root = document.getElementById('cartModal');

  return ReactDOM.createPortal(
    <div className={classes.overlay}>
      <span className={classes.title}>CART</span>
      <button className={classes.delete} onClick={props.onClick}>X</button>
      <div className={classes.heading}>
        <span className={classes.item}>ITEM</span>
        <span className={classes.price}>PRICE</span>
        <span className={classes.quantity}>QUANTITY</span>
      </div>
      {cartItemList}
      <div className={classes.total}>
        <span>Total</span>
        <div>${cartCtx.totalAmount.toFixed(2)}</div>
      </div>
      <button className={classes.button}>PURCHASE</button>
    </div>,
    root
  );
};

export default Cart;
