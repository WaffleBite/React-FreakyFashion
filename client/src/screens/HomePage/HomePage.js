import React from 'react';
import { useEffect, useState } from 'react';

import Hero from '../../components/hero/hero';
import Carousel from '../../components/carousel/carousel';
import FeaturedCategories from '../../components/featuredCategories/featuredCat';
import PopularProducts from '../../components/popularProducts/popularProducts';

const HomePage = () => {

    let [categories, setCategories] = useState([]);
    let [products, setProducts] = useState([]);

    useEffect(() => {

        fetch("https://localhost:44302/Umbraco/Api/Products/GetProducts")
            .then(x => x.json())
            .then(data => {
                setProducts(data);
              
            });
    }, [setProducts]);


    useEffect(() => {

        fetch("https://localhost:44302/Umbraco/Api/Categories/GetCategories")
            .then(x => x.json())
            .then(data => {
                setCategories(data);
            });
    }, []);

    return(
        <div>
            <Hero/>
            <div>
                <Carousel/>
                <FeaturedCategories categories={categories}/>
                <PopularProducts products={products}/>
            </div>
        </div>
    )
}

export default HomePage;