import React from 'react';
import '../App.css';
import { Button } from './Button.js';
import { Button2 } from './Button2.js';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/Finn.mp4' autoPlay loop muted />
      <h1>Varit Roongrotekarnkha</h1>
      <p>Robotics Engineer</p>
      <div className='hero-btns'>
        <Button2 className='btns' 
        buttonStyle='btn--outline' 
        ButtonSize='btn--large'>
          About me
        </Button2>
        
        <Button className='btns' 
        buttonStyle='btn--primary' 
        ButtonSize='btn--large'>
        <i className='fa-solid fa-phone' /> Contacts
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
