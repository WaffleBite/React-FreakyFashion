import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import HomePage from './screens/HomePage/HomePage';
import ShopPage from './screens/Shop/Shop';
import NewsPage from './screens/News/News';
import SearchPage from './screens/Search/Search';
import ProductDetailPage from './screens/ProductDetailPage/ProductDetailPage';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Header/>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/shop" component={ShopPage}/>
            <Route path="/news" component={NewsPage}/>
            <Route path="/search" component={SearchPage}/>
            <Route path="/product" component={ProductDetailPage}/>
          </Switch>
        <Footer/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
