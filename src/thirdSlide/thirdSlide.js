import React, { Component } from 'react';
import './style/thirdSlide.css';
import Suitcase from './images/portfolio.png';
import Heart from './images/heart.png';
import Clock from './images/clock.png';
import Star from './images/star.png';
import TeslaModelX from './images/tesla.jpg';
import AudiA8 from './images/a8.jpg';
import ChevroletCamaro from './images/camaro.jpg';
import BenzGClass from './images/gClass.jpg';
import VWPassat from './images/passat.jpg';
import BenzSClass from './images/s.jpg';
import BmwX1 from './images/x1.jpg';
import VolvoXC90 from './images/xc90.jpg';
import Eye from './images/eye.png'

class mainSlide extends Component {
    state = {
        products: [
            { imageSrc: TeslaModelX, alt: 'TeslaModelX' },
            { imageSrc: AudiA8, alt: 'AudiA8' },
            { imageSrc: ChevroletCamaro, alt: 'ChevroletCamaro' },
            { imageSrc: BenzGClass, alt: 'BenzGClass' },
            { imageSrc: VWPassat, alt: 'VWPassat' },
            { imageSrc: BenzSClass, alt: 'BenzSClass' },
            { imageSrc: BmwX1, alt: 'BmwX1' },
            { imageSrc: VolvoXC90, alt: 'VolvoXC90' },
        ],
    }
    render() {

        let products = (
            <div className="middleThirdSlideProductsState">
                {this.state.products.map((product) => {
                    return <div className="carImageDiv">
                        <img src={product.imageSrc} alt={product.alt}></img>
                        <div className="overlay">
                            <a href="#thirdSlide" className="icon" title="User Profile">
                                <img src= {Eye}  alt="eye"></img>
                            </a>
                        </div>
                    </div>
                })}
            </div>
        );
        return (
            <div >
                <div id="thirdSlide">
                    <div className="thirdSlideTopDiv">
                        <div className="thirdSlideTopWorkState">
                            <div className="workState">
                                <img className="workIcons" src={Suitcase} alt="Suitcase"></img>
                                <p className="workPassage">548<br />PROJECTS COMPLETED</p>
                            </div>
                        </div>
                        <div className="thirdSlideTopWorkState">
                            <div className="workState">
                                <img className="workIcons" src={Clock} alt="Clock"></img>
                                <p className="workPassage">1465<br />WORK HOURS</p>
                            </div>
                        </div>
                        <div className="thirdSlideTopWorkState">
                            <div className="workState">
                                <img className="workIcons" src={Star} alt="Star"></img>
                                <p className="workPassage">612<br />POSITIVE FEEDBACKS</p>
                            </div>
                        </div>
                        <div className="thirdSlideTopWorkState">
                            <div className="workState">
                                <img className="workIcons" src={Heart} alt="Heart"></img>
                                <p className="workPassage">735<br />HAPPY CLIENTS</p>
                            </div>
                        </div>
                    </div>
                    {products}
                    <div className="buttonThirdSlideState">
                        <p className="buttonThirdSlidePassage">LOAD MORE WORK</p>
                    </div>
                </div>
            </div>
        );
    }
};
export default mainSlide;