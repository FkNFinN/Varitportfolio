import React from 'react';
import '../../App.css';
import '../Informative.css'
import { Button3 } from '../Button3';

function MotorPlate() {
  return (
    <div className="project-page">
      <div className="project-image-card">
        <img src={`${process.env.REACT_APP_PUBLIC_IMAGES_URL}/motorplate.jpg`} alt="MotorPlate" />
        <img src={`${process.env.REACT_APP_PUBLIC_IMAGES_URL}/motorplate2.jpg`} alt="MotorPlate2" />
      </div>

      <div className="project-description">
        <h2>Motorcycle Plate Detection</h2>
        <p>
          In Thailand, there's an ongoing issue with motorcycles riding on footpaths, posing a serious danger to pedestrians. To help address this problem, we decided to develop a program that detects motorcycle license plates. The aim is to send the plate information to the police for enforcement, making the footpaths safer for everyone.
        </p>
        <p>
          The program uses camera input to detect motorcycle license plates, automatically adjusting the image to fit the frame. Once the plate is detected, the image is sent to the police along with all necessary documentation for issuing fines. This streamlined process helps ensure that violators are held accountable and improves pedestrian safety on the footpaths.
        </p>
        <p>
        This project emphasizes the software aspect, particularly the use of AI. A neural network (NN) is utilized to detect motorcycle plates, while computer vision (CV) techniques are applied to adjust and align the images. Together, these technologies automate the detection and processing of the plate images, ensuring accuracy before sending them to the police for enforcement.
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

export default MotorPlate;