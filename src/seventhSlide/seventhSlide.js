import React, { Component } from 'react';
import './style/seventhSlide.css';
class seventhSlide extends Component {
    state = {
        moreInformation: [
            "Projects", "About", "Services", "Carreer", "News", "Events", "Contact", "Legals"
        ],
        socialMedias: [
            "Facebook", "Instagram", "Twitter", "Dribble"
        ]
    }
    render() {
        let moreInfo = (
            <div className="footerInfo moreInfo">
                {this.state.moreInformation.map((info) => {
                    return <a href="#seventhSlide">{info}</a>
                })}
            </div>
        );

        let socialMedias = (
            <div className="footerInfo moreInfo">
                {this.state.socialMedias.map((socialMedia) => {
                    return <a href="#seventhSlide">{socialMedia}</a>
                })}
            </div>
        );
        return (
            <div id="seventhSlide">
                <div className="orderWorkForm">
                    <form>
                        <div className="container">
                            <h2>Need a Project?</h2>
                            <p>Let us know what you're looking for in an agency. We'll take a look and see if this could be the start of something beautiful.</p>
                            <div className="nameAndEmail">
                                <input type="text" placeholder="Your Name" name="text" required />
                                <input type="text" placeholder="Your Email" name="email" required />
                            </div>
                            <input type="text" placeholder="Your Title" name="text" className="titleInput" required />
                            <textarea placeholder="Your Comment" rows="10" cols="58" name="comment" form="usrform">
                            </textarea>
                            <button type="submit" className="orderWorkFormButton">SEND MESSAGE</button>
                        </div>
                    </form>
                </div>
                <div className="footer">
                    <div className="footerInfo piroll">
                        <h3>Piroll Design, Inc.</h3>
                        <p>&#9400; 2017 Piroll. All rights reserved.<br />Designed by Mahdi Yasini && Mahdi Sadeghi</p>
                    </div>
                    <div className="footerInfo phone">
                        <p>usc-123@chmail.com<br />+981234567890</p>
                    </div>
                    {moreInfo}
                    {socialMedias}
                </div>
            </div>
        );
    };
};
export default seventhSlide;