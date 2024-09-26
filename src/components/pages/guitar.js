import React from 'react';
import '../../App.css';
import '../Informative.css'
import { Button3 } from '../Button3';

function Guitar() {
  return (
    <div className="project-page">
      <div className="project-image-card">
        <img src={`${process.env.REACT_APP_PUBLIC_IMAGES_URL}/guitar.jpg`} alt="guitar" />
        <img src={`${process.env.REACT_APP_PUBLIC_IMAGES_URL}/guitar2.jpg`} alt="guitar2" />
      </div>

      <div className="project-description">
        <h2>3D Printed Electric Guitar</h2>
        <p>
          Guitar is also one of my favorite instrument. To explore more about a guitar mechanism, in 2020 I choose to recreate it with a 3D printer. An electric guitar to be specific.
        </p>
        <p>
          An electric guitar is quite simple compared to an acoustic one. The primary sound production comes from its electrical components, without the need for any acoustic chambers. Unlike acoustic guitars, which rely on a resonating body to amplify sound, electric guitars use pickups and amplifiers to generate and shape the sound electronically.
        </p>
        <p>
          This project has helped me understand the principles of an electric guitar. Through designing, wiring, and conducting research, it has been a valuable learning experience and one of the first projects I’ve completed.
        </p>
        <div className='button-container'>
          <Button3 buttonStyle='btn--primary' buttonSize='btn--large'>
            Back to Projects
          </Button3>
        </div>
      </div>
    </div>
  );
}

export default Guitar;