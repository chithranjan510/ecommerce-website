import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import classes from './MusicItems.module.css';
import Button from '../UI/Button';
import cartContext from '../store/cart-Context';
import productContext from '../store/product-context';

const MusicItems = (props) => {
  const cartCtx = useContext(cartContext);
  const productCtx = useContext(productContext);

  const product = {
    title: props.item.title,
    imageUrl: props.item.imageUrl,
    price: props.item.price,
    quantity: 1,
  };

  const addingItemToCartHandler = () => {
    cartCtx.addItem(product);
  };

  const productDetail = {
    title: props.item.title,
    imageUrl: props.item.imageUrl,
    price: props.item.price,
    rating: 4.5,
    detail: 'Best album of the year',
  };

  const productDetailHandler = () => {
    productCtx.changeDetail(productDetail);
  };

  return (
    <div className={classes.div}>
      <h2>{props.item.title}</h2>
      <div className={classes.image}>
        <Link to={`/product/${props.item.title}`}>
          <img
            src={props.item.imageUrl}
            alt='Music Album'
            onClick={productDetailHandler}
          />
        </Link>
      </div>
      <div className={classes.detail}>
        <span>${props.item.price}</span>
        <Button
          title='ADD TO CART'
          onClick={addingItemToCartHandler}
        />
      </div>
    </div>
  );
};

export default MusicItems;
