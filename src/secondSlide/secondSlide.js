import React from 'react';
import './style/secondSlide.css';
import signature from './images/signature.png'
const secondSlide = () => {
    return (
        <div>
            <div id="secondSlide">
                <div className="topDiv">
                    <div id="aboutUs">
                        <p className="aboutUSArticle">About Us</p>
                        <p className="aboutUsPassage">Divide have don't man wherein air fourth. Own itself make have night won't make. <br /> <span className="aboutUsSecondPassage"> A you under Seed appear which good give. Own give air without fowl moveth dry first heaven fruit, dominion she'd won't very all.</span></p>
                        <img className="signature" src={signature} alt="Signature"></img>
                    </div>
                </div>
                <div className="buttonDiv">
                    <div className="buttonDivLeft">
                        <div className="percentInformation">
                            <p className="percentInformationArticle">Professional Skills</p>
                            <p className="PercentPassage">UI/UX DESIGN&nbsp;&nbsp;&nbsp;75%</p>
                            <div className="father">
                                <div className="son1"></div>
                            </div>
                            <p className="PercentPassage">WEB DEVELOPMENT&nbsp;&nbsp;&nbsp;90%</p>
                            <div className="father">
                                <div className="son2"></div>
                            </div>
                            <p className="PercentPassage">MARKETING&nbsp;&nbsp;&nbsp;65%</p>
                            <div className="father">
                                <div className="son3"></div>
                            </div>
                        </div>
                    </div>
                    <div className="buttonDivRight"></div>
                </div>
            </div>
        </div>
    );
};
export default secondSlide;