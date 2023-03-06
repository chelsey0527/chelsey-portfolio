import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import g01 from '../../assets/sandbox/01.png';
import g02 from '../../assets/sandbox/02.jpg';
import g03 from '../../assets/sandbox/03.jpg';
import g04 from '../../assets/sandbox/04.png';
import g05 from '../../assets/sandbox/05.png';
import Footer from '../../components/Footer';
import './Sandbox.css';
import '../../index.css';

const Sandbox = () => {
  return (
    <>
      <h2>Technical Assistant Intern</h2>
      <h5 className='margin-bottom-50'>Microsoft, Jun 2020 - Jun 2021</h5>

      <div className='small-title margin-bottom-10'>Quick overview</div>
      <div className='normal-font margin-bottom-20'>
        <Row>
          <Col xs={12} sm={6} className='margin-bottom-20'>
            <div className='image-container'>
              <img src={g01}/>
            </div>
            <div className='light-grey text-center'>
            ▲ First week
            </div>
          </Col>
          <Col xs={12} sm={6} className='margin-bottom-20'>
            <div className='image-container'>
              <img src={g02}/>
            </div>
            <div className='light-grey text-center'>
              ▲ Divided into group

            </div>
          </Col>
          <Col xs={12} sm={6}>
            <div className='image-container'>
              <img src={g03}/>
            </div>
            <div className='light-grey text-center'>
            ▲  Let’s work together
            </div>
          </Col>
          <Col xs={12} sm={6}>
            <div className='image-container'>
              <img src={g04}/>
            </div>
            <div className='light-grey text-center'>
            ▲  Last week! Say cheese!
            </div>
          </Col>
          <Col xs={12} sm={12}>
            <div className='sb-large-image-container'>
              <img src={g05}/>
            </div>
            <div className='light-grey text-center'>
            ▲  My notes before each lesson
            </div>
          </Col>
        </Row>
      </div>


      <div className='small-title'>What I learned</div>
      <div className='normal-font margin-bottom-20'>
        <div>Problem & Approach:</div>
        <div>
        In my class, there were students in grades 7 and 11 with vastly different learning and comprehension abilities. The older students tended to work independently, which caused a gap in learning
        </div>
        <div>Contribution:</div>
        <div>
        To bridge this gap, I mixed the age groups of students and offered extra points to motivate the older students to take on leadership roles and assist their younger classmates
        </div>
        <div>Solutions & Impact:</div>
        <div>
        This strategy helped promote teamwork and collaboration among the older and younger students, which resulted in an improvement in the overall performance of the class. The older students were able to develop leadership skills, while the younger students received additional support and guidance
        </div>
        <div>Learning & Reflection:</div>
        <div>
        By using points and prizes incentives, students were encouraged to collaborate, and this became a habit in their daily lives
        </div>
      </div>

      <Footer/>
    </>
  );
};

export default Sandbox;
