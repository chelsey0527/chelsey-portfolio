import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import tcfc from '../assets/icon/tcfc.png';
import cgu from '../assets/icon/cgu.png';
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
        <Row style={{ marginTop: 20 }}>
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
                Built data visualization charts library for product usage to enhance UX, utilizing D3.js, TypeScript, and Storybook
              </li>
              <li>
                Reconstructed relational database’s structure to improve server-side logic and for better management. Resulted in
                a 200% increase in customer satisfaction

              </li>
              <li>
                Developed Phalanx to automate vulnerability scan and penetration test tools that help organizations keep abreast
                of potential vulnerabilities using React.js, Redux, Node.js, and MySQL, serving 20+ global clients

              </li>
            </ul>
          </Col>
        </Row>

        <Row style={{ marginTop: 20 }}>
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
                Gathered and annotated the data with relevant labels, and curated the data to meet the requirements of the machine learning algorithms employed
              </li>
              <li>
                Trained deep convolutional neural network (CNN) using transfer learning approach, which is designed to detect juvenile myoclonic epilepsy (JME) using diffusion magnetic resonance imaging (MRI) data              </li>
            </ul>
          </Col>
        </Row>

        <Row style={{ marginTop: 20 }}>
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
                Engineered cloud solutions tailored for government bodies, focusing on image classification using Microsoft
                Azure, deployed on their applications to enhance the safety of their Electronic Tower Inspection process
              </li>
              <li>
                Trained 500+ teachers across the country in designing STEM lessons for K-12 students with Microsoft 365
                products, Minecraft Education, and HoloLens 2
              </li>
            </ul>
          </Col>
        </Row>

        <Row style={{ marginTop: 20 }}>
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

        <Row style={{ marginTop: 20 }}>
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
              <br /><br />
            </ul>
          </Col>
        </Row>

        <Row style={{ marginTop: 20 }}>
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
                Integrated cash flow system with TapPay (Payment Gateway), eliminating the need for redirects to external sites.
                This resulted in a 20% increase in total sales by providing a secure payment method directly within the platform
              </li>
              <li>
                Constructed a sneaker reselling platform to handle customer’s orders, using EJS, Node.js, MySQL and deployed
                on Microsoft Azure, serving customers across Taiwan
              </li>
              <li>
                <a href='/Project/Famille'>Platform overview</a>
              </li>
            </ul>
          </Col>
        </Row>

        <Footer />
      </div>
    </>
  );
};

export default Experience;
