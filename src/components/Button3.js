import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btnb--outline'];

const SIZES = ['btnb--medium', 'btnb--large'];

export const Button3 = ({
  children, 
  type, 
  onClick, 
  buttonStyle, 
  buttonSize
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to='/projects' className='btnb-mobile'>
      <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
      >
        {children}
      </button>


    </Link>
  )
};