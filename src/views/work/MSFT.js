import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import g01 from '../../assets/msft/01.jpg';
import g02 from '../../assets/msft/02.png';
import g03 from '../../assets/msft/03.jpg';
import g04 from '../../assets/msft/04.jpg';
import Footer from '../../components/Footer';
import LearnCard from '../../components/LearnCard';
import './MSFT.css';
import '../../index.css';

const MSFT = () => {
  return (
    <>
      <h2>Technical Assistant Intern</h2>
      <h5 className='margin-bottom-50'>Microsoft, Jun 2020 - Jun 2021</h5>

      <div className='normal-font margin-bottom-50'>
        <Row>
          <Col xs={12} sm={6} className='margin-bottom-20'>
            <div className='image-container'>
              <img src={g01}/>
            </div>
            <div className='light-grey text-center'>
            ▲ My Badge
            </div>
          </Col>
          <Col xs={12} sm={6} className='margin-bottom-20'>
            <div className='image-container'>
              <img src={g02}/>
            </div>
            <div className='light-grey text-center'>
              ▲ Delivering Minecraft training for teachers
            </div>
          </Col>
          <Col xs={12} sm={6}>
            <div className='image-container'>
              <img src={g03}/>
            </div>
            <div className='light-grey text-center'>
            ▲  AR training at Taipei American School
            </div>
          </Col>
          <Col xs={12} sm={6}>
            <div className='image-container'>
              <img src={g04}/>
            </div>
            <div className='light-grey text-center'>
            ▲  HoloLens 2 in education
            </div>
          </Col>
        </Row>
      </div>


      <div className='small-title'>What I learned</div>
      <div className='normal-font margin-bottom-20'>
        <LearnCard
          content1="Although I had experience in teaching K-12 students, it was totally different to guide teachers, they were stricter for the teaching methods and the outcomes
          ."
          content2="I started to research the difference between teaching students and teachers. Then I realized that we should consider their predicaments during the lessons, and implement our product to solve their potential problems."
          content3="This allowed teachers to understand and relate to their specific needs and implement our product to solve their potential problems, in order to achieve their goals."
          content4="Always consider our approaches based on different target group for better outcomes."
        />
      </div>

      <Footer/>
    </>
  );
};

export default MSFT;
