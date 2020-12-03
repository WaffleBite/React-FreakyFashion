import React from 'react';
import './carousel.style.scss';

const Carousel = () => (
    <section className='carousel-container'>
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">

                <div class="carousel-item active" data-interval="10000">
                    <img class="d-block w-100" src="https://images.pexels.com/photos/1740897/pexels-photo-1740897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="First slide"/>
                    <a href='/'>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>News1</h5>
                        <p>subtitle</p>
                        </div>
                    </a>
                </div>

                <div class="carousel-item" data-interval="10000">
                    <img class="d-block w-100" src="https://images.pexels.com/photos/5727916/pexels-photo-5727916.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="First slide"/>
                    <a href='/'>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>News2</h5>
                        <p>subtitle</p>
                        </div>
                    </a>
                </div>

                <div class="carousel-item" data-interval="10000">
                    <img class="d-block w-100" src="https://images.pexels.com/photos/5498388/pexels-photo-5498388.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="First slide"/>
                    <a href='/'>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>News3</h5>
                        <p>subtitle</p>
                        </div>
                    </a>
                </div>
                        
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </section>
);

export default Carousel;