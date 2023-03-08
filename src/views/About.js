import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import me from '../assets/me.webp';
import scu from '../assets/icon/scu.png';
import '../index.css';
import './About.css';

const About = () => {
  return (
    <>
      <Row className='margin-bottom-50'>
        <Col sm={8}>
          <h2 className='margin-bottom-20'>I am ChinShan(Chelsey), Lee </h2>
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
            &#34;Our greatest glory is not in never falling, but in rising every time we fall.&#34;
          </div>
        </Col>
        <Col sm={4}>
          <div className='me-container'>
            <img src={me}/>
          </div>
        </Col>
      </Row>

      <h2 className='margin-bottom-20'>Education</h2>
      <div className='work-container'>
        <Row style={{marginTop: 20}}>
          <Col sm={2}>
            <div className='edu-icon-container'>
              <img src={scu} alt={scu}></img>
            </div>
          </Col>
          <Col sm={10}>
            <Row>
              <Col sm={8}><div className='small-title'>BBA in Computer Science and Information Management</div></Col>
              <Col sm={4}><div className='time'>Sep 2017 – Jun 2021</div></Col>
            </Row>
            <div className='normal-font'><i>Soochow University, Taiwan, </i></div>
            <ul className='normal-font'>
              <li>
                Related course: Introduction to computer, Object-oriented programming, Data Structure
                , Algorithm, Database Management, Probabilities, Discrete Mathmatics, Linear Algebra
                , Computer Architecture, Operating System, Deep Learning
              </li>
            </ul>
          </Col>
        </Row>


      </div>


    </>
  );
};

export default About;
