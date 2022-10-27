import React from 'react';

import classes from './HeaderCartButton.module.css';

const HeaderCartButton = () => {
  return (
    <div className={classes.headerCartButton}>
      <span>Cart</span>
      <span>0</span>
    </div>
  );
};

export default HeaderCartButton;
