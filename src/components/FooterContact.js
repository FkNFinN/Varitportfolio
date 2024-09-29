import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function FooterContact() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <p className='footer-subscription-heading'>
          I'd love to hear from you.
        </p>
        <p className='footer-subscription-text'>
          Let's explore new opportunities together!
        </p>
        <br></br>
        <br></br>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Information</h2>
            <Link to='https://drive.google.com/file/d/1m8UeVJjtlloLqEROH-OPSB6WawzaRrVq/view?usp=sharing' target='_blank'>CV</Link>
            <Link to='https://drive.google.com/file/d/1ziTHnD2jMEBPfl0IyudU5T8kMG0N81Nq/view?usp=sharing' target='_blank'>Resume</Link>
            <Link to='https://drive.google.com/file/d/1db1ddTNlHPF83qZikg-BXeN4YfYHq7ne/view?usp=sharing' target='_blank'>Portfolio</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='https://www.instagram.com/fynfynn/' target='_blank' >Instagram</Link>
            <Link to='https://www.facebook.com/varit.finn/' target='_blank'>Facebook</Link>
            <Link to='https://github.com/FkNFinN' target='_blank'>Github</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <small class='website-rights'>Varit © 2020</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='https://www.facebook.com/varit.finn/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='https://www.instagram.com/fynfynn/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link github'
              to='https://github.com/FkNFinN'
              target='_blank'
              aria-label='GitHub'
            >
              <i class='fa-brands fa-github' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FooterContact;