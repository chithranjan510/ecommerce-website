import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = () => {

  // console.log('header');

  return (
    <React.Fragment>
      <header className={classes.header}>
        <nav>
          <ul>
            <li><Link to='/home'>HOME</Link></li>
            <li><Link to='/store'>STORE</Link></li>
            <li><Link to='/about'>ABOUT</Link></li>
            <li><Link to='/contact'>CONTACT-US</Link></li>
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
