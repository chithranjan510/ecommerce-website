import React, { useContext } from 'react';

import classes from './MusicItems.module.css';
import Button from '../UI/Button';
import cartContext from '../store/cart-Context';

const MusicItems = (props) => {
  const cartCtx = useContext(cartContext);

  const addingItemToCartHandler = () => {
    cartCtx.addItem({
      title: props.item.title,
      imageUrl: props.item.imageUrl,
      price: props.item.price,
      quantity: 1,
    });
  };

  return (
    <div className={classes.div}>
      <h2>{props.item.title}</h2>
      <img src={props.item.imageUrl} alt='Music Album' />
      <span>${props.item.price}</span>
      <Button title='ADD TO CART' onClick={addingItemToCartHandler} />
    </div>
  );
};

export default MusicItems;
