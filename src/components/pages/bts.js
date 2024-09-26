import React from 'react';
import '../../App.css';
import '../Informative.css'
import { Button3 } from '../Button3';

function Bts() {
  return (
    <div className="project-page">
      <div className="project-image-card">
        <img src={`${process.env.REACT_APP_PUBLIC_IMAGES_URL}/bts.jpg`} alt="bts" />
        <img src={`${process.env.REACT_APP_PUBLIC_IMAGES_URL}/bts2.jpg`} alt="bts2" />
      </div>

      <div className="project-description">
        <h2>Sky Train Station</h2>
        <p>
          The sky train is one of the most widely used public transportation systems in Bangkok. In 2019, while I was studying abroad and feeling homesick, I decided to design this project.
        </p>
        <p>
          This was the third design I ever completed in my entire life. Looking back now, the design feels simple, and I didn’t use any advanced techniques. However, it still stands as one of my proudest achievements in my journey, marking an important milestone on my road map.
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

export default Bts;