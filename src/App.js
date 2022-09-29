import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import StoreFrontPage from './pages/store-frontpage/store-frontpage.component';

import CheckoutPage from './pages/checkoutpage/checkoutpage.component';

const App = () => {

  return (
    <div className='app'>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/storefront' component={StoreFrontPage} />
        <Route path='/checkout' component={CheckoutPage} />
      </Switch>
    </div>
  )
}

export default App;