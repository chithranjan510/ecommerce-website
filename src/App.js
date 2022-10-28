import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import './App.css';
import Header from './header/Header';
import Home from './pages/Home';
import Store from './pages/Store';
import About from './pages/About';
import Footer from './footer/Footer';

function App() {
  const productsArr = [
    {
      title: 'Colors',
      price: 100,
      imageUrl:
        'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },

    {
      title: 'Black and white Colors',
      price: 50,
      imageUrl:
        'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },

    {
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl:
        'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },

    {
      title: 'Blue Color',
      price: 100,
      imageUrl:
        'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    },
  ];

  return (
    <React.Fragment>
      <Header />

      <Route path=''>
        <Redirect to='/home' />
      </Route>

      <Route path='/home'>
        <Home />
      </Route>
      <Route path='/store'>
        <Store productList={productsArr} />
      </Route>
      <Route path='/about'>
        <About />
      </Route>

      <Footer />
    </React.Fragment>
  );
}

export default App;
