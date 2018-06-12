import React, { Component } from 'react';
import NavBar from './components/NavBar.js';
import Backdrop from './components/Backdrop.js';
import MainContent from './components/MainContent.js';
import  ContactCard from './components/ContactCard.js';
import Projects from './components/Projects.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar />
        <Backdrop />
        <MainContent />
        <Projects />
      </div>
    );
  }
}

export default App;
