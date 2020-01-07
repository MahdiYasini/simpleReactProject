import React from 'react';
import Navbar from './Navbar/navbar';
import MainSlide from './main/mainSlide';
import SecondSlide from './secondSlide/secondSlide';
import ThirdSlide from './thirdSlide/thirdSlide';
import FourthSlide from './fourthSlide/fourthSlide'
import FifthSlide from './fifthSlide/fifthSlide'
import SixthSlide from './sixthSlide/sixthSlide'
import SeventhSlide from './seventhSlide/seventhSlide'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainSlide />
      <SecondSlide />
      <ThirdSlide />
      <FourthSlide />
      <FifthSlide />
      <SixthSlide />
      <SeventhSlide />
    </div>
  );
}

export default App;
