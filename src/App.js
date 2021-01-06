import React from 'react';
import './App.css';
import DisplayComponent from './Components/DisplayComponent';
import BtnComponent from './Components/BtnComponent';

function App() {
  return (
    <div className="main-section">
      <div className="clock-holder">
        <div className="stopwatch">
           <DisplayComponent />
           <BtnComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
