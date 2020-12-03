import React from 'react';

import Hero from '../../components/hero/hero';
import Carousel from '../../components/carousel/carousel';
import FeaturedCategories from '../../components/featuredCategories/featuredCat';
import PopularProducts from '../../components/popularProducts/popularProducts';

const HomePage = () => (
    <div>
        <Hero/>
        <div>
            <Carousel/>
            <FeaturedCategories/>
            <PopularProducts/>
        </div>
    </div>
) 

export default HomePage;