import React from 'react';
import './header.style.scss';

import { Link, NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <nav className="flex-row">
          <div className='nav-container'>
              <div>
                <Link to="/" className="logo">FreakyFashion</Link>               
              </div>
              <div>
                <ul className="no-ul nav">
                <li><NavLink exact to='/' activeStyle={{color: "#24729E"}}>Home</NavLink></li>
                <li><NavLink to='/shop' activeStyle={{color: "#24729E"}}>Shop</NavLink></li>
                <li><NavLink to='/news' activeStyle={{color: "#24729E"}}>News</NavLink></li>
                <li><NavLink to='/search' activeStyle={{color: "#24729E"}}>Search</NavLink></li>
                <i class="fas fa-shopping-bag fa-lg"></i>
                </ul>
              </div>      
          </div>
        </nav>
    </header>
);

export default Header;