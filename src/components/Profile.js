import React from 'react';
import './Profile.css';

function Profile() {
  return (
    <div>
      <div className='profile-container'>
        <video src={`${process.env.REACT_APP_PUBLIC_VIDEOS_URL}/Profile.mp4`} autoPlay loop muted />
        <div className='note-container'>
          <h1>How did I start?</h1>
          <p>
            I've always been fascinated by the progression of human technology.
          </p>
          <p>
            For over 10 years, I have been building and coding robots, driven by the belief that while humans may make mistakes, robots do not. I firmly believe that this is the way forward, towards a future where mistakes will be eliminated.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
