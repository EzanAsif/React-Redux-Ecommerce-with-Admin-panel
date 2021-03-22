import React from 'react';
import homepagebanner1 from '../../Assets/homepagebanner1.png';
import homepagebanner2 from '../../Assets/homepagebanner2.png';
import homepagebanner3 from '../../Assets/homepagebanner3.jpg';

import './styles.css'

const HeroSection = () => {
    return (
        <div className = "HeroSection">
                {/* <div className="images">
                    <div className="image">
                        <img src={homepagebanner1} alt=""/>
                    </div>
                    <div className="image">
                        <img src={homepagebanner2} alt=""/>
                    </div>
                    <div className="image">
                        <img src={homepagebanner3} alt=""/>
                    </div>
                    <div className="overlay">/</div>
                </div> */}
               
                <div className="hero-section-heading">
                    <h1>spring 2020</h1>
                    <h4>upto 50% off</h4>
                    <a href = '/'>SHOP NOW</a>
                </div>
        </div>
    )
}

export default HeroSection
