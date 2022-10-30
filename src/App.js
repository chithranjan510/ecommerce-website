import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import './App.css';
import Header from './header/Header';
import Home from './pages/Home';
import Store from './pages/Store';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import Footer from './footer/Footer';
import ProductDetail from './pages/ProductDetail';
import { ShowCartContextProvider } from './store/showCart-context';
import { ProductContextProvider } from './store/product-context';

function App() {
  const productsArr = [
    {
      title: 'Colors',
      price: 100,
      imageUrl: 'products/Album-1.png',
    },

    {
      title: 'Black and white Colors',
      price: 50,
      imageUrl: 'products/Album-2.png',
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
      <ShowCartContextProvider>
        <Header />
      </ShowCartContextProvider>

      <Route path='/' exact>
        <Redirect to='/home' />
      </Route>

      <Route path='/home'>
        <Home />
      </Route>

      <Switch>
        <ProductContextProvider>
          <ShowCartContextProvider>
            <Route path='/store' exact>
              <Store productList={productsArr} />
            </Route>
          </ShowCartContextProvider>
          
          <Route path='/store/:productId'>
            <ProductDetail />
          </Route>
        </ProductContextProvider>
      </Switch>

      <Route path='/about'>
        <About />
      </Route>

      <Route path='/contact'>
        <ContactUs />
      </Route>

      <Footer />
    </React.Fragment>
  );
}

export default App;
