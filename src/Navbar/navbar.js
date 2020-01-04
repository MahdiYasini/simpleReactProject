import React from 'react';
import './css/navbar.css';
import MainSlide from '../main/mainSlide'
import SecondSlide from '../secondSlide/secondSlide'
import ThirdSlide from '../thirdSlide/thirdSlide'
import logo from './images/icon.png';
const navbar = () => {
    return (
        <div className="navbar">
            <ul>
                <li className="logo" ><img src={logo} alt="main logo"/></li>
                <li><a component={MainSlide} className = "homeButton" href="#mainSlide">HOME</a></li>
                <li><a component={SecondSlide} href="#secondSlide">ABOUT</a></li>
                <li><a component={ThirdSlide} href="#thirdSlide">WORK</a></li>
                <li><a href="#">PROCESS</a></li>
                <li><a href="#">SERVICES</a></li>
                <li><a href="#">TESTIMONIALS</a></li>
                <li><a href="#">CONTACT</a></li>
            </ul>
        </div>
    );
};
export default navbar;