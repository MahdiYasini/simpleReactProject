import React, { Component } from 'react';
import './style/fifthSlide.css';
import Plane from './images/air-freight.png';
import Bow from './images/bow.png';
import Star from './images/star.png';
import Console from './images/console.png';
import Diamond from './images/diamond.png';
import Magic from './images/magic.png';
import Paint from './images/paint.png';
import Smartphone from './images/smartphone.png';


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class fifthSlide extends Component {
    slideContents = () => {
        let contents = []
        for (let i = 0; i < 3; i++) {
            contents.push(<div className="slideContent">
                <p>" Outstanding job and exceeded all expectation. It was pleasure to work with them on sizable first project and am looking forward to start the next one asap "<br /><span>MICHAEL HOPKINS</span></p>
            </div>)
        }
        return contents
    }

    state = {
        services: [
            { imageSrc: Diamond, alt: 'Diamond', article: "UI / UX Design", passage: "Be set fourth land god darkness make it wherein own" },
            { imageSrc: Bow, alt: 'Bow', article: "WEB DEVELOPMENT", passage: "A she'd them bring void moving third she'd kind fill." },
            { imageSrc: Smartphone, alt: 'Smartphone', article: "APP / MOBILE", passage: "Dominion man second spirit he, earth they're creeping" },
            { imageSrc: Console, alt: 'Console', article: "GAME DESIGN", passage: "Morning his saying moveth it multiply appear life be" },
            { imageSrc: Plane, alt: 'Plane', article: "SEO / MARKETING", passage: "Give won't after land fill creeping meat you, may" },
            { imageSrc: Star, alt: 'Star', article: "PHOTOGRAPHY", passage: "Creepeth one seas cattle grass give moving saw give" },
            { imageSrc: Magic, alt: 'Magic', article: "GRAPHIC", passage: "Open, great whales air rule for, fourth life whales" },
            { imageSrc: Paint, alt: 'Paint', article: "ILLUSTRATION", passage: "Whales likeness hath, man kind for them air two won't" },
        ],
    }
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        let services = (
            <div className="fifthSlideTopState">
                {this.state.services.map((service) => {
                    return <div className="servicesState">
                        <img src={service.imageSrc} alt={service.alt}></img>
                        <h1>{service.article}</h1>
                        <p>{service.passage}</p>
                    </div>
                })}
            </div>
        );

        return (
            <div id="fifthSlide">
                <div className="fifthSlideTopState">
                    {services}
                </div>
                <div className="fifthSlideButtonState">
                    <Slider {...settings} className="slider">
                        {this.slideContents()}
                    </Slider>
                </div>
            </div>
        );
    }
};
export default fifthSlide;