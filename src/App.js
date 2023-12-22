import React from 'react';
import './App.css';

import {Navbar} from './components';
import {Header, MyWorks} from './containers';
const App = () => {
  return (
    <div className="App">
      <div className="App-Background">
        <div className="gradient_blue1"></div>
        <div className="gradient_blue2"></div>
      </div>

      <Navbar />
      <Header /> 
      <MyWorks />
    </div>
  )
}

export default App
