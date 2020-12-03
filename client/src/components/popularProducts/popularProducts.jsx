import React from 'react';
import './popularProducts.scss';

import image from '../../Images/Products/1.jpg';

const PopularProducts = () => (
    <section id='popularProducts'>
        <div className="my-container">
            <h1>Trending Products Right Now</h1>

            <div className="product-grid-popular">

                <a href="/">
                    <div className="product-image-container-popular">
                        <img className="product-image" src={image} alt="image" />
                    </div>
                    <div>
                        <p>Title</p>
                        <p>$300</p>
                    </div>
                </a>

                <a href="/">
                    <div className="product-image-container-popular">
                        <img className="product-image" src={image} alt="image" />
                    </div>
                    <div>
                        <p>Title</p>
                        <p>$300</p>
                    </div>
                </a>
                
                <a href="/">
                    <div className="product-image-container-popular">
                        <img className="product-image" src={image} alt="image" />
                    </div>
                    <div>
                        <p>Title</p>
                        <p>$300</p>
                    </div>
                </a>

                <a href="/">
                    <div className="product-image-container-popular">
                        <img className="product-image" src={image} alt="image" />
                    </div>
                    <div>
                        <p>Title</p>
                        <p>$300</p>
                    </div>
                </a>

                <a href="/">
                    <div className="product-image-container-popular">
                        <img className="product-image" src={image} alt="image" />
                    </div>
                    <div>
                        <p>Title</p>
                        <p>$300</p>
                    </div>
                </a>

                <a href="/">
                    <div className="product-image-container-popular">
                        <img className="product-image" src={image} alt="image" />
                    </div>
                    <div>
                        <p>Title</p>
                        <p>$300</p>
                    </div>
                </a>

                <a href="/">
                    <div className="product-image-container-popular">
                        <img className="product-image" src={image} alt="image" />
                    </div>
                    <div>
                        <p>Title</p>
                        <p>$300</p>
                    </div>
                </a>

            </div>
        </div>
    </section>
);

export default PopularProducts;