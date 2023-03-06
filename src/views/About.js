import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import me from '../assets/me.webp';
import '../index.css';
import './About.css';

const About = () => {
  return (
    <>
      <h2 className='margin-bottom-20'>I am ChinShan(Chelsey) </h2>
      <Row>
        <Col sm={6}>
          <div className='normal-font'>
            Graduated from <span className='underline'>Soochow univeristy</span>  class of 2021.
            <br/>
            Majored in <span className='underline'>Computer Science and Information Management</span>.
            <br/>
            <br/>
            I am always passionate about technology innovation and entrepreneurship.
            I founded Famille with my friends in my sophomore year. Our company become popular in Taiwan because
            we seize the market trend, provides match making between resalers and buyers, makeing over $50,000 USD
            a year.
            <br/>
            <br/>
            I believe our greatest glory is not in never falling, but in rising every time we fall.
          </div>
        </Col>
        <Col sm={6}>
          <div className='me-container'>
            <img src={me}/>
          </div>
        </Col>
      </Row>

    </>
  );
};

export default About;
