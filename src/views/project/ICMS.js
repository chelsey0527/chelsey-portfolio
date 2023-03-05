import React from 'react';
import {TagGroup, Tag} from 'rsuite';
import './ICMS.css';
import g01 from '../../assets/graduationProject/grad-00.gif';
import g02 from '../../assets/graduationProject/thirdparty.gif';
import g03 from '../../assets/graduationProject/advanceSearch.gif';


const ICMS = () => {
  return (
    <>
      <h2>Intelligent Customer Management System </h2>
      <h5 className='margin-bottom-50'>Enterprise Electronic Lab, Soochow Univeristy, 2020</h5>

      <div className='small-title'>Description</div>
      <div className='normal-font'>
        This is my Graduation project at Soochow University.
        We developed an intelligent platform for sales to manage working history and analyze customer’s
        information with relation model and key words extract.
      </div>
      <div className='normal-font margin-bottom-20'>
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

      <div className='small-title'>Demo</div>
      <div className='normal-font margin-bottom-20'>
        <a href='http://www.aicrms.com/' alt='aicrms' target='_blank' rel='noreferrer'>Visit website</a> (Currently no test account available.)
      </div>

      <div className='small-title'>Demo</div>
      <div className='normal-font '>
        <div className='image-container'>
          <img src={g01}/>
        </div>
        <div className='image-container'>
          <img src={g02}/>
        </div>
        <div className='image-container'>
          <img src={g03}/>
        </div>
      </div>

    </>
  );
};

export default ICMS;
