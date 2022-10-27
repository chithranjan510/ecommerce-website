import React from 'react';

import classes from './CartItem.module.css';
import Button from '../UI/Button';

const CartItem = (props) => {
  return (
    <React.Fragment>
      
      <div className={classes.div}>
        <img scr={props.item.imageUrl} alt='Music Album' />
        <span>{props.item.title}</span>
        <span>${props.item.price}</span>
        <span>{props.item.quantity}</span>
        <Button title='REMOVE' />
      </div>
    </React.Fragment>
  );
};

export default CartItem;
