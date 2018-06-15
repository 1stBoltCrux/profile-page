import "../App.css"
import React, { Component} from "react";

function  ContactInfo(){
  return (
    <div className='contact-info' id='contact-info'>
    <div className="email"><div className='contact-email'></div><div className='contact-text'><h3>Email</h3><p>This is my email</p></div></div>
    <div className="linkedin"><div className='contact-linkedin'></div><div className='contact-text'><h3>Linkedin</h3><p>This is my linkedin</p></div></div>
    </div>
  );
}

export default ContactInfo
