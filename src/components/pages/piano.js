import React from 'react';
import '../../App.css';
import '../Informative.css'
import { Button3 } from '../Button3';

function Piano() {
  return (
    <div className="project-page">
      <div className="project-image-card">
        <img src="/images/piano.jpg" alt="piano" />
        <img src="/images/piano2.jpg" alt="piano2" />
        <img src="/images/piano3.jpg" alt="piano3" />
      </div>

      <div className="project-description">
        <h2>3D Printed Piano</h2>
        <p>
          I play the piano and have always been curious about how its mechanism works. This curiosity inspired me to start this project, where I can explore and understand the intricate details behind how a piano functions.
        </p>
        <p>
          Inside the piano is a purely mechanical system, with no electrical components, known as the piano action. After conducting extensive research, I’ve been able to recreate this mechanism in my model and 3D print for testing.
        </p>
        <p>
          This project has taught me a great deal about how mechanical systems were designed in the past. The techniques used in those designs are fascinating to me, and this experience has also helped me improve my own design skills. By challenging myself with different types of design and working through various issues, I've learned to become a better designer through hands-on practice.
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

export default Piano;