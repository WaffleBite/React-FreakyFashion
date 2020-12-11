import React from 'react';
import './featuredCat.style.scss';
import {Link} from 'react-router-dom';

const FeaturedCategories = ({categories}) => {

    var items = categories.slice(0, 3).map(x => {
        return (
            <Link to={`/shop/${x.id}`}>
                <div class="featured-categories" style={{backgroundImage: `url(${x.imageUrl})`}}>
                    <p class="category-name">{x.name}</p>
                </div>
            </Link>
        )
    })

    return(
        <section>
            <div class='my-container flex'>
                {items}
            </div>
        </section>
    )
};

export default FeaturedCategories;