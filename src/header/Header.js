import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = () => {

  // console.log('header');

  return (
    <React.Fragment>
      <header className={classes.header}>
        <nav>
          <ul>
            <li><NavLink activeClassName={classes.active} to='/home'>HOME</NavLink></li>
            <li><NavLink activeClassName={classes.active} to='/store'>STORE</NavLink></li>
            <li><NavLink activeClassName={classes.active} to='/about'>ABOUT</NavLink></li>
            <li><NavLink activeClassName={classes.active} to='/login'>LOGIN</NavLink></li>
            <li><NavLink activeClassName={classes.active} to='/contact'>CONTACT</NavLink></li>
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
