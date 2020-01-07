import React from 'react';
import './css/navbar.css';
import MainSlide from '../main/mainSlide'
import logo from './images/icon.png';
const navbar = () => {
    return (
        <div className="navbar">
            <ul>
                <li className="logo" ><img src={logo} alt="main logo"/></li>
                <li><a component={MainSlide} className = "homeButton" href="#mainSlide">HOME</a></li>
                <li><a  href="#secondSlide">ABOUT</a></li>
                <li><a  href="#thirdSlide">WORK</a></li>
                <li><a  href="#fourthSlide">PROCESS</a></li>
                <li><a  href="#fifthSlide">SERVICES</a></li>
                <li><a  href="#sixthSlide">TESTIMONIALS</a></li>
                <li><a href="#seventhSlide">CONTACT</a></li>
            </ul>
        </div>
    );
};
export default navbar;