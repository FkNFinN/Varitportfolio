import React from 'react';
import '../../App.css';
import '../Informative.css'
import { Button3 } from '../Button3';

function Omni() {
  return (
    <div className="project-page">
      <div className="project-image-card">
        <img src={`${process.env.REACT_APP_PUBLIC_IMAGES_URL}/omni.jpg`} alt="omni" />
        <img src={`${process.env.REACT_APP_PUBLIC_IMAGES_URL}/omni2.JPG`} alt="omni2" />
      </div>

      <div className="project-description">
        <h2>2 Wheel Omni Directional Robot</h2>
        <p>
          A two-wheel omnidirectional robot is a fascinating design that allows the robot to move in any direction without needing to rotate its body. Unlike traditional wheeled robots that rely on turning to change direction, this type uses specially designed wheels, often called omni-wheels or mecanum wheels, which have small rollers angled at 45 degrees around the circumference. These rollers enable the robot to slide laterally, diagonally, or spin on the spot.
        </p>
        <p>
          In this project, I positioned both wheels side by side for a more compact design. However, thanks to the use of mecanum wheels, the robot can still move smoothly in all directions. When the wheels rotate in opposite directions, the robot generates a yaw motion, allowing it to spin in place.
        </p>
        <p>
          This project exemplifies both creativity and design, showcasing innovative problem-solving and thoughtful engineering.
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

export default Omni;