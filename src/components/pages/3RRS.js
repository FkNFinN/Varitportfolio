import React from 'react';
import '../../App.css';
import '../Informative.css'
import { Button3 } from '../Button3';

function RRS() {
  return (
    <div className="project-page">
      <div className="project-image-card">
        <img src={`${process.env.REACT_APP_PUBLIC_IMAGES_URL}/3rps.jpg`} alt="3RRS Parallel Manipulator" />
      </div>

      <div className="project-description">
        <h2>3RRS Parallel Manipulator</h2>
        <p>
          A 3RRS parallel manipulator is a type of robotic mechanism composed of three independent arms, each featuring two revolute joints and one spherical joint. This parallel configuration allows the manipulator to control both the position and orientation of a moving platform with high precision and rigidity. Due to its compact design and ability to handle distributed loads, the 3RRS manipulator is commonly used in applications that require accurate motion control, such as robotics, automation, and precision assembly.
        </p>
        <p>
          In this project, I applied both my design and coding skills to address the problem. The design is based on a traditional 3RRS structure, but the code I developed maps to a triangular axis in a unique way that I conceptualized at the time, setting it apart from conventional approaches to triangular axis mapping.
        </p>
        <p>
          This project pushed me out of my comfort zone of straightforward design and traditional coding for mobile robots, which I was used to. It presented challenges in both the hardware and software aspects.
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

export default RRS;