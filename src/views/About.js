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
        <Col sm={9}>
          <h2 className='margin-bottom-20'>I am Chin-Shan(Chelsey) Lee </h2>
          <div className='normal-font'>
            I am always passionate about <span className='highlight-color'>education</span>, <span className='highlight-color'>technology innovation</span> and <span className='highlight-color'>entrepreneurship</span>.
            Through my master degree, I seek to deepen my knowledge in computer vision, data mining, distributed system.
            <br/>
            <div className=' margin-bottom-20'>
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
                  <strong>Related course:</strong> Deep learning, Object-oriented programming (Java), Data structure, Algorithm, Operating System, Computer Architecture, Database Management, Discrete Mathematics, Linear Algebra, Calculus, Statistics, Introduction to Computer, Mobile technologies and Application
                </Col>
              </Row>
            </div>
          </div>
        </Col>
        <Col sm={3}>
          <div className='me-container'>
            <img src={me}/>
          </div>
        </Col>
      </Row>


      <h2 className='margin-bottom-20'>A Content Creater</h2>
      <div className='normal-font margin-bottom-20'>I post makeup tutorials on <a href='https://www.dcard.tw/my/persona' alt='dcard' target='_blank' rel='noreferrer'>Dcard</a> (an online social media and networking platform based in Taiwan).</div>
      <Row>
        <Col xs={12} sm={4}>
          <iframe src="https://embed.dcard.tw/v1/posts/241210886?showMedia=1&" height="500" style={{width: '100%'}} ></iframe>
        </Col>
        <Col xs={12} sm={4}>
          <iframe src="https://embed.dcard.tw/v1/posts/241201389?showMedia=1&" height="500" style={{width: '100%'}}></iframe>
        </Col>
        <Col xs={12} sm={4}>
          <iframe src="https://embed.dcard.tw/v1/posts/241012709?showMedia=1&" height="500" style={{width: '100%'}}></iframe>
        </Col>
      </Row>

    </>
  );
};

export default About;
