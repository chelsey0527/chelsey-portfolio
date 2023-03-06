
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ln from '../assets/icon/linkedin.png';
import g from '../assets/icon/gmail.png';
import git from '../assets/icon/github.png';
import '../index.css';
import './Contact.css';


const Contact = () => {
  return (
    <>
      <h2 className='margin-bottom-50'>Contact</h2>

      <Row style={{width: 200, marginBottom: 20}}>
        <Col sm={2}>
          <div className='logo-container'>
            <img src={ln} alt='LinkedIn'/>
          </div>
        </Col>
        <Col sm={10}>
          <a>leechinshan</a>
        </Col>
      </Row>

      <Row style={{width: 200, marginBottom: 20}}>
        <Col sm={2}>
          <div className='logo-container'>
            <img src={g} alt='Gmail'/>
          </div>
        </Col>
        <Col sm={10}>
          <a>chelsey0527</a>
        </Col>
      </Row>

      <Row style={{width: 200, marginBottom: 20}}>
        <Col sm={2}>
          <div className='logo-container'>
            <img src={git} alt='Github'/>
          </div>
        </Col>
        <Col sm={10}>
          <a>chelsey0527</a>
        </Col>
      </Row>

    </>
  );
};

export default Contact;
