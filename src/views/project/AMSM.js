import React from 'react';
import {TagGroup, Tag} from 'rsuite';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import dfd from '../../assets/sa/DFD.png';
import rdb from '../../assets/sa/RDB.png';
import fdd from '../../assets/sa/FDD.png';
import nf from '../../assets/sa/3NF.png';
import d01 from '../../assets/sa/d01.png';
import d02 from '../../assets/sa/d02.png';
import d03 from '../../assets/sa/d03.png';
import d04 from '../../assets/sa/d04.png';
import Footer from '../../components/Footer';
import LearnCard from '../../components/LearnCard';
import './AMSM.css';
import '../../index.css';

const AMSM = () => {
  return (
    <>
      <h2>Assignment Management System Design</h2>
      <h5 className='margin-bottom-50'>Course project, Soochow Univeristy, 2019</h5>

      <div className='small-title'>Description</div>
      <div className='normal-font margin-bottom-20'>
        Course project for System Analysis and Design, 2019 SPRING.
        <br/>
        Designed database architecture for system that will used by 100+ students.
        <br/>
        We discussed aspect in the following:
        <ul>
          <li>Preliminary Investigation Report</li>
          <li>Functional Decomposition Diagram</li>
          <li>Data Flow Diagram</li>
          <li>Data Dictionary</li>
          <li>Database Design</li>
          <li>UI/UX design</li>
        </ul>
      </div>

      <div className='small-title'>Tools</div>
      <div className='normal-font margin-bottom-20'>
        <TagGroup>
          <Tag color="orange">My SQL</Tag>
          <Tag color="default">draw.io</Tag>
        </TagGroup>
      </div>

      <div className='small-title'>Link</div>
      <div className='normal-font margin-bottom-20'>
        <ul>
          <li>
            <a href='https://drive.google.com/file/d/1HC7i3v0qMl5YnMEe9UU3Sy2kvqI9wBzr/view?usp=share_link' alt='aicrms' target='_blank' rel='noreferrer'>Full design document (ZH-TW)</a>
          </li>
        </ul>
      </div>

      <div className='small-title margin-bottom-10'>System design overview</div>
      <div className='normal-font margin-bottom-50'>
        <Row>
          <Col xs={12} sm={12} className='margin-bottom-20'>
            <div className='amsm-image-container'>
              <img src={fdd}/>
            </div>
            <div className='light-grey text-center'>
            ▲ FDD
            </div>
          </Col>
          <Col xs={12} sm={6} className='margin-bottom-20'>
            <div className='amsm-image-container'>
              <img src={dfd}/>
            </div>
            <div className='light-grey text-center'>
            ▲ ER diagram
            </div>
          </Col>
          <Col xs={12} sm={6} className='margin-bottom-20'>
            <div className='amsm-image-container'>
              <img src={rdb}/>
            </div>
            <div className='light-grey text-center '>
              ▲ Relational DB
            </div>
          </Col>
          <Col xs={12} sm={12}>
            <div className='large-amsm-image-container'>
              <img src={nf}/>
            </div>
            <div className='light-grey text-center '>
            ▲  Normalization(3NF)
            </div>
          </Col>
        </Row>
      </div>

      <div className='small-title margin-bottom-10'>UI/UX design overview</div>
      <div className='normal-font margin-bottom-50'>
        <Row>
          <Col xs={12} sm={6} className='margin-bottom-20'>
            <div className='image-container'>
              <img src={d01}/>
            </div>
            <div className='light-grey text-center'>
            ▲ Home Page
            </div>
          </Col>
          <Col xs={12} sm={6} className='margin-bottom-20'>
            <div className='image-container'>
              <img src={d02}/>
            </div>
            <div className='light-grey text-center'>
              ▲ Exam Page
            </div>
          </Col>
          <Col xs={12} sm={6}>
            <div className='image-container'>
              <img src={d03}/>
            </div>
            <div className='light-grey text-center'>
             ▲ Question Page
            </div>
          </Col>
          <Col xs={12} sm={6}>
            <div className='image-container'>
              <img src={d04}/>
            </div>
            <div className='light-grey text-center'>
              ▲  User Page
            </div>
          </Col>
        </Row>
      </div>

      <div className='small-title'>What I learned</div>
      <div className='normal-font'>
        <LearnCard
          content1="Our school had faced difficulties in managing assignments and exams with the
          previous system, lead to the need for an improved and more advanced system."
          content2="Used the System Development Life Cycle (SDLC) to stage each process from user requests. Implemented the system with features such as user database management, formulated exams, and
          discussion forums."
          content3="Constructed the database architecture designed to serve over 100 users, with a database
          containing 200 past exams. Clear communications and setting expectations to ensure that there is a mutual understanding
          of what is expected from the project can help to prevent constant changes and redevelopment later."
          content4="It was hard to design a well-rounded system. Although experienced over ten meetings for discussion,
          there are still numerous details that can be improved."
        />
      </div>

      <Footer/>
    </>
  );
};

export default AMSM;
