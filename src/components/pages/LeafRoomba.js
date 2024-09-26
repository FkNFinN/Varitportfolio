import React from 'react';
import '../../App.css';
import '../Informative.css'
import { Button3 } from '../Button3';

function LeafRoomba() {
  return (
    <div className="project-page">
      <div className="project-image-card">
        <img src={`${process.env.REACT_APP_PUBLIC_IMAGES_URL}/leafRoomba.jpg`} alt="Leaf Roomba" />
        <img src={`${process.env.REACT_APP_PUBLIC_IMAGES_URL}/leafRoomba2.jpg`} alt="Leaf Roomba2" />
      </div>

      <div className="project-description">
        <h2>Leaf Roomba (Leaf Beetle)</h2>
        <p>
          Leaf Roomba is a Roomba, but for leaves. We made this with the intention of creating an outdoor solution for the tedious task of leaf collection. Instead of spending hours raking, you can let the Leaf Roomba autonomously move around your yard, picking up leaves as it goes. We designed it to be simple, effective, and capable of handling uneven terrain, navigating around trees and garden beds with ease. It’s built for outdoor conditions and can handle typical yard debris, making it a practical tool for keeping your lawn clean during the fall.
        </p>
        <p>
          This project is particularly challenging due to the conditions it must operate in. We need to design the robot to walk through tall grass, over sandbanks, and across gravel, all while efficiently collecting leaf litter. On top of that, since this is a control systems project, we're also tasked with implementing a Kalman Filter alongside a PID controller to ensure precise and stable movement.
        </p>
        <p>
          In the end, we decided to establish a fixed origin point for the robot, allowing it to use a PID controller to navigate and clean in a circular pattern around that point.
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

export default LeafRoomba;