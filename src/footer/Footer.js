import React from 'react';

import classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <span>The Generics</span>
      <div>
        <a rel='noreferrer' href='https://www.youtube.com' target='_blank'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png' alt='YouTube'/>
        </a>
        <a rel='noreferrer' href='https://www.spotify.com' target='_blank'>
          <img src='https://spotlightstudio.org/wp-content/uploads/2019/12/image-gallery-spotify-logo-21.png' alt='Spotify' />
        </a>
        <a rel='noreferrer' href='https://www.facebook.com' target='_blank'>
          <img src='https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-facebook_-512.png' alt='Facebook' />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
