import React from 'react';
import {TagGroup, Tag} from 'rsuite';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import f01 from '../../assets/famille/f01.png';
import f02 from '../../assets/famille/f02.png';
import f03 from '../../assets/famille/f03.png';
import f04 from '../../assets/famille/f04.png';
import team from '../../assets/famille/team.png';
import Footer from '../../components/Footer';
import LearnCard from '../../components/LearnCard';
import './Famille.css';
import '../../index.css';

const Famille = () => {
  return (
    <>
      <h2>Famille</h2>
      <h5 className='margin-bottom-50'>Startup, 2018</h5>

      <div className='small-title'>Description</div>
      <div className='normal-font margin-bottom-20'>
        A sneaker reselling platform that served customers across Taiwan
      </div>

      <div className='small-title'>Developed with</div>
      <div className='normal-font margin-bottom-20'>
        <TagGroup>
          <Tag color="default">EJS</Tag>
          <Tag color="green">Node.js</Tag>
          <Tag color="orange">MySQL</Tag>
          <Tag color="blue">Azure</Tag>
        </TagGroup>
      </div>

      <div className='small-title'>Link</div>
      <div className='normal-font margin-bottom-20'>
        <ul>
          <li>
            <a href='https://www.familletw.com/' alt='aicrms' target='_blank' rel='noreferrer'>Demo</a> (Currently no test account available.)
          </li>
        </ul>
      </div>

      <div className='small-title margin-bottom-10'>Quick overview</div>
      <div className='normal-font margin-bottom-50'>
        <Row>
          <Col xs={12} sm={6} className='margin-bottom-20'>
            <div className='image-container'>
              <img src={f01}/>
            </div>
            <div className='light-grey text-center'>
              ▲ Login/Register modal
            </div>
          </Col>
          <Col xs={12} sm={6} className='margin-bottom-20'>
            <div className='image-container'>
              <img src={f02}/>
            </div>
            <div className='light-grey text-center'>
              ▲ Products page
            </div>
          </Col>
          <Col xs={12} sm={6}>
            <div className='image-container'>
              <img src={f03}/>
            </div>
            <div className='light-grey text-center'>
            ▲  Single product page
            </div>
          </Col>
          <Col xs={12} sm={6}>
            <div className='image-container'>
              <img src={f04}/>
            </div>
            <div className='light-grey text-center'>
            ▲  Checkout page
            </div>
          </Col>
        </Row>
      </div>

      <div className='small-title'>What I learned</div>
      <div className='normal-font margin-bottom-50'>
        <LearnCard
          content1="To improve efficiency and meet the growing demand for sneakers, the platform allows
          customers to place orders at any time, automating the process and reducing the workload on the startup."
          content2="Responsible for all UI/UX design and front-end develop with HTML, CSS, EJS.<br/>
          Established a weekly progress review system to monitor productivity and implemented a
          feature request process to evaluate all potential functions."
          content3="Our sneaker reselling platform has become popular in Taiwan because we seized
          the market demand, established matchmaking between retailers and buyers."
          content4="Insight into market changes and execution are critical issues to a startup."
        />
      </div>

      <div className='small-title'>Our Team</div>
      <div className='normal-font'></div>
      <div className='image-container'>
        <img src={team}/>
      </div>

      <Footer/>
    </>
  );
};

export default Famille;
