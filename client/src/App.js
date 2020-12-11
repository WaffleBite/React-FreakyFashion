import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import HomePage from './screens/HomePage/HomePage';
import ShopPage from './screens/Shop/Shop';
import NewsPage from './screens/News/News';
import SearchPage from './screens/Search/Search';
import ProductDetailPage from './screens/ProductDetailPage/ProductDetailPage';
import CategoryPage from './screens/CategoryPage/CategoryPage';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Header/>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/shop" component={ShopPage}/>
            <Route path="/shop/:id" component={CategoryPage}/>
            <Route path="/product/:id" component={ProductDetailPage}/>
            <Route path="/news" component={NewsPage}/>
            {/* <Route path="/news/:id" component={NewsPage}/> */}
            <Route path="/search" component={SearchPage}/>
          </Switch>
        <Footer/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
