import React from 'react';

import classes from './Store.module.css';
import MusicAlbums from '../music albums/MusicAlbums';
// import Cart from '../cart/Cart';

const Store = (props) => {
  // const [showCartItem, setShowCartItem] = useState(false);

  // const cartItemHandler = () => {
  //   setShowCartItem(true);
  // };

  return (
    <section className={classes.section}>
      <h1>The Generics</h1>
      <MusicAlbums productList={props.productList} />
      {/* {showCartItem && <Cart />} */}
      {/* <button className={classes.button} onClick={cartItemHandler}>See the cart</button> */}
    </section>
  );
};

export default Store;
