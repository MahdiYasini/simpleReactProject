import React, { Component } from 'react';
import './css/navbar.css';
import logo from './images/icon.png';

class navbar extends Component {
    state = {
        options: [
            { href: "#secondSlide", li: "ABOUT" },
            { href: "#thirdSlide", li: "WORK" },
            { href: "#fourthSlide", li: "PROCESS" },
            { href: "#fifthSlide", li: "SERVICES" },
            { href: "#sixthSlide", li: "TESTIMONIALS" },
            { href: "#seventhSlide", li: "CONTACT" },
        ]
    };
    render() {
        let options = (
            <ul>
                <li className="logo" ><img src={logo} alt="main logo" /></li>
                <li><a className="homeButton" href="#mainSlide">HOME</a></li>
                {this.state.options.map((option) => {
                    return <li><a href={option.href}>{option.li}</a></li>
                })}
            </ul>
        );
        return (
            <div className="navbar">
                {options}
            </div>
        );
    };
};

export default navbar;