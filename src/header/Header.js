import React from 'react';

import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = () => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <nav>
          <ul>
            <li>HOME</li>
            <li>STORE</li>
            <li>ABOUT</li>
          </ul>
        </nav>
        <div>
          <HeaderCartButton />
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
