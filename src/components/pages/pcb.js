import React from 'react';
import '../../App.css';
import '../Informative.css'
import { Button3 } from '../Button3';

function Pcb() {
  return (
    <div className="project-page">
      <div className="project-image-card">
        <img src="/images/pcb.jpg" alt="pcb" />
        <img src="/images/pcb2.jpg" alt="pcb2" />
        <img src="/images/pcb3.jpg" alt="pcb3" />
      </div>

      <div className="project-description">
        <h2>PCB Line Following Robot</h2>
        <p>  
          Line-following robots can often be bulky due to the inclusion of large frames, motors, and extra components, making them heavier than necessary. However, one way to significantly reduce their size and weight is by simplifying the design to be integrated directly onto a PCB (printed circuit board). By embedding the sensors, microcontroller, and other essential components directly onto the PCB, the entire system can be made more compact and lightweight.
        </p>
        <p>
          In this project, the main challenge is designing directly onto the PCB, something I’ve never done before. I'm using the STM32 Nucleo to control the PCB, which adds another layer of complexity. This project has introduced me to a new aspect of design—'PCB designing'—pushing me to learn new skills and explore a different area of engineering.
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

export default Pcb;