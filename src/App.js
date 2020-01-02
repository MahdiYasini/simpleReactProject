import React from 'react';
import Navbar from './Navbar/navbar';
import MainSlide from './main/mainSlide'
import SecondSlide from './secondSlide/secondSlide'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainSlide />
      <SecondSlide />
    </div>
  );
}

export default App;
