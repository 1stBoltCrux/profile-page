import "../App.css"
import React, { Component} from "react";

function  ContactCard(){
  return (
    <div className="contact-card">
    <div className="profile">
    <div className="profile-pic"></div>
    <div className="profile-text"><h3>Ted Leary</h3><p>Hi, Im Ted Leary a junior front end developer</p></div>
    </div>
    <div className="contact-me"><p>Contact</p></div>
    <div className='bottom-bar'></div>
    <div className="email"><div className='contact-email'></div><div className='contact-text'><h3>Email</h3><p>This is my email</p></div></div>
    <div className="linkedin"><div className='contact-linkedin'></div><div className='contact-text'><h3>Linkedin</h3><p>This is my linkedin</p></div></div> 
    </div>
  );
}

export default ContactCard