import React, { Component } from 'react';
import './style/sixthSlide.css';
import Ikco from './images/ikco.png';
import Benz from './images/benz.png';
import Maserati from './images/maserati.png';
import Tesla from './images/tesla.png';
import Audi from './images/audi.png';
class fifthSlide extends Component {
    state = {
        cars: [
            { imageSrc: Ikco, alt: 'Ikco' },
            { imageSrc: Benz, alt: 'Benz' },
            { imageSrc: Maserati, alt: 'Maserati' },
            { imageSrc: Tesla, alt: 'Tesla' },
            { imageSrc: Audi, alt: 'Audi' },
        ],
    };
    render() {
        let cars = (
            <div id="sixthSlide">
                {this.state.cars.map((car) => {
                    return <div className="company">
                        <img src={car.imageSrc} alt={car.alt} />
                    </div>
                })}
            </div>
        );
        return (
            <div> {cars}</div>
        );
    };
};
export default fifthSlide;