import './App.css';
import React from 'react';
import Cards from './Cards';


import patternCircleLogo from './assets/images/pattern-circles.svg';

function App() {
  
  return (
    <div className="App">
   <img  className="circle-img" src={patternCircleLogo} alt=''></img>
   
    <Cards/>
    </div>
  );
}

export default App;
