import React from 'react';
import '../../App.css';
import '../Informative.css'
import { Button3 } from '../Button3';

function Avian() {
  return (
    <div className="project-page">
      <div className="project-image-card">
        <img src={`${process.env.REACT_APP_PUBLIC_IMAGES_URL}/avian.JPG`} alt="avian" />
        <img src={`${process.env.REACT_APP_PUBLIC_IMAGES_URL}/avian2.JPG`} alt="avian2" />
      </div>

      <div className="project-description">
        <h2>Passive Joint Avian Leg</h2>
        <p>
          Avian legs have a unique joint structure that makes them incredibly efficient and adaptable. Unlike most mammals, birds have a reverse joint in their legs, where the knee bends backward. This is actually an adaptation of their ankle joint, while their real knee is tucked higher up under the feathers. This design gives birds greater flexibility and shock absorption, especially during landing or perching.
        </p>
        <p>
          Traditional robotic joints can't replicate the unique movements of avian legs, by incorporating what's known as passive joints its possible. Passive joints are mechanisms that allow some degree of free movement without the need for active control or motorization. These joints are typically used to absorb shocks, adapt to uneven terrain, or improve efficiency in robotic systems by reducing the need for constant power consumption.
        </p>
        <p>
        Bird watching is one of my hobbies, and I’ve always been fascinated by the unique structure of birds' legs. This curiosity led me to dive deeper into researching their mechanics, particularly how their joints work. Inspired by their flexibility and efficiency, I decided to recreate an avian leg using a passive joint system. My goal is to design 'Passive Joint Avian Legs' that mimic the natural movement of birds, bringing the same adaptability and balance into robotic form.
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

export default Avian;