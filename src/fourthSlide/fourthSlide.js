import React, { Component } from 'react';
import './style/fourthSlide.css';
import Video508 from './videos/508.mp4'

class mainSlide extends Component {

    render() {
        return (
            <div id="fourthSlide">
                <div className="fourthSlidePassage">
                    <h1>Our Work Process</h1>
                    <p>Was years it seasons was there from he in them together over that, third sixth gathered female creeping bearing behold years.</p>
                </div>
                <div className="fourthSlideVideo">
                    <video controls >
                        <source src={Video508} type="video/mp4" />
                        Your browser does not support HTML5 video.
                    </video>
                </div>
            </div>
        );
    }
};
export default mainSlide;