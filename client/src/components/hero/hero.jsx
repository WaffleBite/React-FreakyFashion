import React from 'react';
import './hero.style.scss';

const Hero = () => (
    <div class='hero-container'>
        <div class='hero-titles-container'>
            <h1 class='hero-title'>Get Ready For Christmas!</h1>
            <p class="hero-subtitle">
                Not a cold weather fan? <br />
                These puffer & bomber jackets might change that.
            </p>
            <div class='hero-buttons'>
                <button style={{color: "rgb(40 138 67)"}} class='hero-button'>Shop girls</button>
                <button style={{color: "rgb(74 139 169)"}} class='hero-button'>Shop boys</button>
            </div>
        </div>
    </div>
);

export default Hero;