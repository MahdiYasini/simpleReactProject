import React from 'react';
import './style/thirdSlide.css';
import Suitcase from './images/portfolio.png'
import Heart from './images/heart.png'
import Clock from './images/clock.png'
import Star from './images/star.png'
const mainSlide = () => {
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
            </div>
        </div>
    );
};
export default mainSlide;