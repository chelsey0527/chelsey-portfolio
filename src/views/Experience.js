import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import tcfc from '../assets/icon/tcfc.png';
// import cgu from '../assets/icon/cgu.png';
import fm from '../assets/icon/famille.png';
import ms from '../assets/icon/microsoft.png';
import scu from '../assets/icon/scu.png';
import sb from '../assets/icon/sb.png';
import Footer from '../components/Footer';
import './Experience.css';
import '../index.css';

const Experience = () => {
  return (
    <>
      <h2 className='margin-bottom-50'>Work Experience</h2>

      <div className='work-container'>
        <Row style={{marginTop: 20}}>
          <Col sm={2}>
            <div className='icon-container'>
              <img src={tcfc} alt={tcfc}></img>
            </div>
          </Col>
          <Col sm={10}>
            <Row>
              <Col sm={8}><div className='small-title'>Full Stack Web Engineer</div></Col>
              <Col sm={4}><div className='time'>Sep 2022 – present</div></Col>
            </Row>
            <div className='normal-font'><i>Taiwan Cybersecurity Foundry Company, Taipei Taiwan</i></div>
            <ul className='normal-font'>
              <li>
                Develop <a href='https://esm.secbuzzer.co/' alt='esm-description' target='_blank' rel='noreferrer'>Citadel </a>
                to provide real-time monitoring and threat detection for client’s network security needs using React.js, Redux,
                Node.js, Sequelize, MySQL, serving 20+ global clients. Optimized network performance from 10 to 5 mins by minimize
                HTTP requests and remove unnecessary data dependencies
              </li>
              <li>
                Developed Internal Data Management and Analysis System for Taiwan Power Company to manage electric towers’
                state and provide monthly analysis report using Angular.js, Spring boot, SQL server
              </li>
            </ul>
          </Col>
        </Row>

        {/* <Row style={{marginTop: 20}}>
          <Col sm={2}>
            <div className='icon-container'>
              <img src={cgu} alt="cgu"></img>
            </div>
          </Col>
          <Col sm={10}>
            <Row>
              <Col sm={8}><div className='small-title'>Research Assistant @ Medical Image Processing & Computer Vision Lab</div></Col>
              <Col sm={4}><div className='time'>Jul 2021 – Aug 2022</div></Col>
            </Row>
            <div className='normal-font'>
              <i>
                Chang Gung University, Taipei Taiwan; Associate Prof.
                <a href='https://orcid.org/0000-0002-1681-5410' target='_blank' rel='noreferrer'>Yi-Ping Chao, PhD</a>
              </i>
            </div>
            <ul className='normal-font'>
              <li>
                Established database containing 3,000+ data of pupils with appropriate labeling for Convolutional
                Neural Network (CNN)-based deep learning model training, and evaluated the model&#39;s performance on the
                detection of pupil size which reached an accuracy of 89.43%
              </li>
            </ul>
          </Col>
        </Row> */}

        <Row style={{marginTop: 20}}>
          <Col sm={2}>
            <div className='icon-container'>
              <img src={fm} alt="famille"></img>
            </div>
          </Col>
          <Col sm={10}>
            <Row>
              <Col sm={8}><div className='small-title'>Co-founder, Front-end developer</div></Col>
              <Col sm={4}><div className='time'>Sep 2018 – Jun 2022</div></Col>
            </Row>
            <div className='normal-font'><i>Famille (Online sneaker retail company), Taipei Taiwan</i></div>
            <ul className='normal-font'>
              <li>
                Launched online sneaker reselling platform serving customers across Taiwan, using with EJS,
                Node.js, MySQL, integrated online payment service - TapPay, and deployed on Microsoft Azure
              </li>
              <li>
                <a href='/Project/Famille'>Platform overview</a>
              </li>
            </ul>
          </Col>
        </Row>

        <Row style={{marginTop: 20}}>
          <Col sm={2}>
            <div className='icon-container'>
              <img src={ms} alt="microsoft"></img>
            </div>
          </Col>
          <Col sm={10}>
            <Row>
              <Col sm={8}>
                <a href='/Work/MSFT'>
                  <div className='small-title'>Technical Assistant Intern</div>
                </a>
              </Col>
              <Col sm={4}><div className='time'>Jun 2020 – Jun 2021</div></Col>
            </Row>
            <div className='normal-font'><i>Microsoft Corporation, Taipei Taiwan</i></div>
            <ul className='normal-font'>
              <li>
              Trained more than 500 teachers in designing STEM lessons with Microsoft 365 products,
              Minecraft Education and HoloLens 2
              </li>
              <li>
              Resolved government body’s technical issues and trained more than 200 people on implementing
              Microsoft Azure on their service
              </li>
            </ul>
          </Col>
        </Row>

        <Row style={{marginTop: 20}}>
          <Col sm={2}>
            <div className='icon-container'>
              <img src={scu} alt="microsoft"></img>
            </div>
          </Col>
          <Col sm={10}>
            <Row>
              <Col sm={8}><div className='small-title'>Teaching Assistant</div></Col>
              <Col sm={4}><div className='time'>Mar 2020 – Jul 2020</div></Col>
            </Row>
            <div className='normal-font'><i>Information Security (2020 SPRING), Soochow University, Taipei Taiwan</i></div>
            <ul className='normal-font'>
              <li>
              Responsible for English Academic Journal Paper Reading at practice lesson for
              20 master’s students
              </li>
            </ul>
          </Col>
        </Row>

        <Row style={{marginTop: 20}}>
          <Col sm={2}>
            <div className='icon-container'>
              <img src={sb} alt="microsoft"></img>
            </div>
          </Col>
          <Col sm={10}>
            <Row>
              <Col sm={8}>
                <a href='/Work/Sandbox'>
                  <div className='small-title'>Robot class Teacher</div>
                </a>
              </Col>
              <Col sm={4}><div className='time'>Mar 2020 – Dec 2021</div></Col>
            </Row>
            <div className='normal-font'><i>Sandbox Academy, Taipei Taiwan</i></div>
            <ul className='normal-font'>
              <li>
              Taught Python logic with programmable robotics to 15 K-12 students.
              </li>
            </ul>
          </Col>
        </Row>

        <Footer/>
      </div>
    </>
  );
};

export default Experience;
