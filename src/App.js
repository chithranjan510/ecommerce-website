import React from 'react';

import './App.css';
import Header from './header/Header';
import Section from './section/Section';
import Footer from './footer/Footer';

function App() {
  const productsArr = [
    {
      title: 'Colors',
      price: 100,
      imageUrl:'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },

    {
      title: 'Black and white Colors',
      price: 50,
      imageUrl:'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },

    {
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl:'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },

    {
      title: 'Blue Color',
      price: 100,
      imageUrl:'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    },
  ];

  return (
    <React.Fragment>
      <Header />
      <Section productList={productsArr}/>
      <Footer />
    </React.Fragment>
  );
}

export default App;
