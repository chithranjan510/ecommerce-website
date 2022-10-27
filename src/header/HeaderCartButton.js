import React, { useState } from 'react';

import classes from './HeaderCartButton.module.css';
import Cart from '../cart/Cart';

const HeaderCartButton = () => {

  const [showCartItem, setShowCartItem] = useState(false);

  const cartItemHandler = () => {
    setShowCartItem(true);
  }

  return (
    <React.Fragment>
      <button className={classes.button} onClick={cartItemHandler}>
        <span>Cart</span>
        <span>0</span>
      </button>
      {showCartItem && <Cart />}
    </React.Fragment>
  );
};

export default HeaderCartButton;
