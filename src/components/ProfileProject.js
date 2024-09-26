import React from 'react';
import '../App.css';
import './HeroSection.css';

function ProfileProject() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h1>Projects</h1>
      <p>2022-Present</p>
      <div className='hero-btns'>
      </div>
    </div>
  );
}

export default ProfileProject;
