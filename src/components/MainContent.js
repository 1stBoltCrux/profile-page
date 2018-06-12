import '../App.css'
import React, { Component} from 'react';
import  ContactCard from './ContactCard.js'

function MainContainer() {
  return (
    <div className='main-container'>
    <ContactCard />
    </div>
  );
}

export default MainContainer;