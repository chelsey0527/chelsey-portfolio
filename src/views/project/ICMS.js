import React from 'react';
import {TagGroup, Tag} from 'rsuite';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import g01 from '../../assets/graduationProject/grad-00.gif';
import g02 from '../../assets/graduationProject/thirdparty.gif';
import g03 from '../../assets/graduationProject/advanceSearch.gif';
import p01 from '../../assets/graduationProject/01.png';
import p02 from '../../assets/graduationProject/02.png';
import team from '../../assets/graduationProject/team.png';
import Footer from '../../components/Footer';
import LearnCard from '../../components/LearnCard';
import './ICMS.css';
import '../../index.css';

const ICMS = () => {
  return (
    <>
      <h2>Intelligent Customer Management System </h2>
      <h5 className='margin-bottom-50'>Graduation Project, Enterprise Electronic Lab, Soochow Univeristy, 2020</h5>

      <div className='small-title'>Description</div>
      <div className='normal-font margin-bottom-20'>
        Graduation project at Soochow University.
        <br/>
        In collaboration with Global Smart Achievement Consultant Co.,Ltd.
        with We developed an intelligent platform for sales to manage working history and analyze customer’s
        information with relation model and key words extract.
        <br/>
        Shortlisted for 25th International ICT Innovative Services Awards, ranked top 15 from 500 team.
      </div>

      <div className='small-title'>Developed with</div>
      <div className='normal-font margin-bottom-20'>
        <TagGroup>
          <Tag color="blue">ASP.NET</Tag>
          <Tag color="violet">PHP</Tag>
          <Tag color="orange">My SQL</Tag>
        </TagGroup>
      </div>

      <div className='small-title'>Link</div>
      <div className='normal-font margin-bottom-20'>
        <ul>
          <li>
            <a href='http://www.aicrms.com/' alt='aicrms' target='_blank' rel='noreferrer'>Demo</a> (Currently no test account available.)
          </li>
        </ul>
      </div>

      <div className='small-title margin-bottom-10'>Quick overview</div>
      <div className='normal-font margin-bottom-50'>
        <Row>
          <Col xs={12} sm={6} className='margin-bottom-20'>
            <div className='icms-images-container'>
              <img src={g02}/>
            </div>
            <div className='light-grey text-center'>
            ▲ Login page (Third party login)
            </div>
          </Col>
          <Col xs={12} sm={6} className='margin-bottom-20'>
            <div className='icms-images-container'>
              <img src={g01}/>
            </div>
            <div className='light-grey text-center'>
              ▲ Achievement tracking page
            </div>
          </Col>
          <Col xs={12} sm={6}>
            <div className='icms-images-container'>
              <img src={g03}/>
            </div>
            <div className='light-grey text-center'>
            ▲  Advanced query
            </div>
          </Col>
          <Col xs={12} sm={6}>
            <div className='others'>
            Due to the confidentiality agreement,<br/>
            other pages are not allowed to demo.
            </div>
          </Col>
        </Row>
      </div>

      <div className='small-title margin-bottom-10'>Project management timeline</div>
      <div className='normal-font margin-bottom-50'>
        <div className='large-icms-images-container'>
          <img src={p01}/>
        </div>
        <div className='light-grey text-center margin-bottom-20'>
            ▲  PM timeline (1/2)
        </div>
        <div className='large-icms-images-container'>
          <img src={p02}/>
        </div>
        <div className='light-grey text-center'>
            ▲  PM timeline (2/2)
        </div>
      </div>

      <div className='small-title'>What I learned</div>
      <div className='normal-font margin-bottom-50'>
        <LearnCard
          content1="We were in collaboration with Global Smart Achievement Consultant to build their sales management system.
          And the company constantly change their requirements and made us to redevelop all the time."
          content2="As the team lead, I was responsible for project management.
          And I decided to evaluate the feasibility with the company first before
          I transfer the needs to my teammates."
          content3="Clear communications and setting expectations to ensure that there is a mutual understanding
          of what is expected from the project can help to prevent constant changes and redevelopment later."
          content4="Being able to adapt to changing project requirements is important in any project management
          role to keep the project moving forward."
        />
      </div>

      <div className='small-title'>Our Team</div>
      <div className='normal-font'></div>
      <div className='large-icms-team-images-container'>
        <img src={team}/>
      </div>

      <Footer/>
    </>
  );
};

export default ICMS;
