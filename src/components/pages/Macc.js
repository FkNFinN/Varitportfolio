import React from 'react';
import '../../App.css';
import '../Informative.css'
import { Button3 } from '../Button3';

function Macc() {
  return (
    <div className="project-page">
      <div className="project-image-card">
        <img src={`${process.env.REACT_APP_PUBLIC_IMAGES_URL}/macc.jpg`} alt="Cartesian Drawing Robot" />
        <img src={`${process.env.REACT_APP_PUBLIC_IMAGES_URL}/macc2.jpg`} alt="Cartesian Drawing Robot2" />
      </div>

      <div className="project-description">
        <h2>Cartesian Drawing</h2>
        <p>
          The Cartesian Coordinate Drawing Robot operates using the same principles as a 2D plotter, translating precise X and Y movements into clean, accurate drawings. By moving along two perpendicular axes, this robot is able to reproduce intricate designs and shapes on paper or other surfaces with high precision. Whether it's technical diagrams, artistic patterns, or automated sketches, the Cartesian system ensures every stroke is perfectly aligned. It's a simple yet powerful tool that demonstrates how controlled, methodical movement can create complex and detailed results.
        </p>
        <p>
          Compared to other types of drawing robots, like those using polar or delta configurations, the Cartesian coordinate system makes this one easier to understand and implement. Its X and Y axis movement is straightforward, making it simpler to control and program. However, one interesting aspect of this design is the use of CoreXY theory in controlling the robot. CoreXY is a kinematic system that allows for more efficient and precise movement by utilizing two motors to drive both axes simultaneously.
        </p>
        <p>
          This results in faster, more stable motion with fewer mechanical complexities, making it an excellent choice for enhancing the robot’s overall performance while maintaining the simplicity of the Cartesian layout.
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

export default Macc;