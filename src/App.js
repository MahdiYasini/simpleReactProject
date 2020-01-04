import React from 'react';
import Navbar from './Navbar/navbar';
import MainSlide from './main/mainSlide'
import SecondSlide from './secondSlide/secondSlide'
import ThirdSlide from './thirdSlide/thirdSlide'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainSlide />
      <SecondSlide />
      <ThirdSlide />
    </div>
  );
}

export default App;
