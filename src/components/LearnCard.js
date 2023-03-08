import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CreativeIcon from '@rsuite/icons/Creative';
import RemindOutlineIcon from '@rsuite/icons/RemindOutline';
import PeoplesUploadedIcon from '@rsuite/icons/PeoplesUploaded';
import IdMappingIcon from '@rsuite/icons/IdMapping';
import './LearnCard.css';

const LearnCard = (props) => {
  return (
    <>
      <Row>
        <Col xs={12} sm={6} md={3}>
          <div className='learn-card'>
            <div className='learn-card-circle'>
              <RemindOutlineIcon/>
            </div>
            <div className='learn-card-title'>Problem&Approach</div>
            <div className='learn-card-content'>
              {props.content1}
            </div>
          </div>
        </Col>
        <Col xs={12} sm={6} md={3}>
          <div className='learn-card'>
            <div className='learn-card-circle'>
              <PeoplesUploadedIcon/>
            </div>
            <div className='learn-card-title'>Contribution</div>
            <div className='learn-card-content'>
              {props.content2}
            </div>
          </div>
        </Col>
        <Col xs={12} sm={6} md={3}>
          <div className='learn-card'>
            <div className='learn-card-circle'>
              <CreativeIcon/>
            </div>
            <div className='learn-card-title'>Solutions&Impact</div>
            <div className='learn-card-content'>
              {props.content3}
            </div>
          </div>
        </Col>
        <Col xs={12} sm={6} md={3}>
          <div className='learn-card'>
            <div className='learn-card-circle'>
              <IdMappingIcon/>
            </div>
            <div className='learn-card-title'>Learning&Reflection</div>
            <div className='learn-card-content'>
              {props.content4}
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default LearnCard;
