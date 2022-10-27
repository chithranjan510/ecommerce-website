import React from 'react';

import classes from './Section.module.css';
import MusicAlbums from '../music albums/MusicAlbums';

const Section = (props) => {
  return (
    <section className={classes.section}>
      <h1>The Generics</h1>
      <MusicAlbums productList={props.productList} />
      <button className={classes.button}>See the cart</button>
    </section>
  );
};

export default Section;
