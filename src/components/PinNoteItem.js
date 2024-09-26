import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function PinNoteItem(props) {
  const [rotation, setRotation] = useState(0);

  // Generate a random rotation between -3 and 3 degrees
  useEffect(() => {
    const randomRotation = Math.random() * 6 - 3; // Generates a number between -3 and 3
    setRotation(randomRotation);
  }, []);

  return (
    <>
      <li className='pins__item' style={{ transform: `rotate(${rotation}deg)` }}>
        <Link className='pins__item__link' to={props.path} target='_blank'>
          <figure className='pins__item__pic-wrap' data-category={props.label}>
            <img src={props.src} alt="Experience" className='pins__item__img' />
          </figure>
          <div className='pins__item__info'>
            <h5 className='pins__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default PinNoteItem;
