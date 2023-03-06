
import React from 'react';
import ln from '../assets/icon/linkedin.png';
import g from '../assets/icon/gmail.png';
import git from '../assets/icon/github.png';
import '../index.css';
import './Contact.css';


const Contact = () => {
  return (
    <>
      <h2 className='margin-bottom-50'>Contact</h2>

      <a href='https://www.linkedin.com/in/chinshanlee/' target='_blank' rel='noreferrer'>
        <div className='logo-container'>
          <img src={ln} alt='LinkedIn'/>
        </div>
      </a>
      <a href='mailto:chelsey0527@gmail.com' target='_blank' rel='noreferrer'>
        <div className='logo-container'>
          <img src={g} alt='Gmail'/>
        </div>
      </a>
      <a href='https://github.com/chelsey0527' target='_blank' rel='noreferrer'>
        <div className='logo-container'>
          <img src={git} alt='Github'/>
        </div>
      </a>

    </>
  );
};

export default Contact;
