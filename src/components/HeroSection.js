import React from 'react';
import '../App.css';
import {Button} from './button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      
      <h1>CLUB-CONNECT</h1>
      <p>All the club endeavors at a single place</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH A GLIMPSE
        </Button> 
      </div>
    </div>
  );
}

export default HeroSection;