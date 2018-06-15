import "../App.css"
import React, { Component} from "react";
import ContactInfo from './ContactInfo.js'



export default class ContactCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isCardHidden: true};
    this.handleClick = this.handleClick.bind(this);
}

handleClick() {
   this.setState(prevState => ({
     isCardHidden: !prevState.isCardHidden
   }));
 }
  render () {
    let currentlyVisibleContent = null;
    if (this.state.isCardHidden === false) {
      currentlyVisibleContent = <ContactInfo />;
    } else {
      currentlyVisibleContent = null;
    }
  return (
    <div className="contact-card">
    <div className="profile">
    <div className="profile-pic"></div>
    <div className="profile-text"><h3>Ted Leary</h3><p>Hi, Im Ted Leary a junior front end developer</p></div>
    </div>
    <div id='contact-me' className="contact-me" onClick={this.handleClick}><p>Contact</p></div>
    <div className='bottom-bar'></div>
      {currentlyVisibleContent}
    </div>
  );
  }
}
