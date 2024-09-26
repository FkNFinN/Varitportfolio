import React from 'react';
import { Button } from './Button';
import './Footer.css'

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Thanks for reviewing!
        </p>
        <div className='input-areas'>
          <form>
            <Button buttonStyle='btn--outline'>Contact <i className='fa-solid fa-phone' /> </Button>
          </form>
        </div>
      </section>
      <small className='website-rights'>Varit © 2024</small>
    </div>
  )
}

export default Footer
