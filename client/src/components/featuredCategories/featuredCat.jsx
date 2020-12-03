import React from 'react';
import './featuredCat.style.scss';

import bottoms from '../../Images/Categories/bottoms.jpg';
import holidays from '../../Images/Categories/party.jpg';
import sweaters from '../../Images/Categories/sweaters.jfif';

const FeaturedCategories = () => (
    <section>
        <div class='my-container flex'>

            <a href="/">
                <div class="featured-categories" style={{backgroundImage: `url(${sweaters})`}}>
                    <p class="category-name">Sweaters</p>
                </div>
            </a>

            <a href="/">
                <div class="featured-categories" style={{backgroundImage: `url(${bottoms})`}}>
                    <p class="category-name">Bottoms</p>
                </div>
            </a>

            <a href="/">
                <div class="featured-categories" style={{backgroundImage: `url(${holidays})`}}>
                    <p class="category-name">Holidays</p>
                </div>
            </a>

        </div>
    </section>
);

export default FeaturedCategories;