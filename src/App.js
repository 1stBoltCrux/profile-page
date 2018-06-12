import React, { Component } from 'react';
import NavBar from './components/NavBar.js';
import Backdrop from './components/Backdrop.js';
import MainContent from './components/MainContent.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar />
        <Backdrop />
        <MainContent />
      </div>
    );
  }
}

export default App;
