import React from 'react';
import {TagGroup, Tag} from 'rsuite';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Footer from '../../components/Footer';
import './Pokemon.css';
import '../../index.css';

const Pokemon = () => {
  return (
    <>
      <h2>Pokémon game</h2>
      <h5 className='margin-bottom-50'>Course Project, Soochow Univeristy, 2018</h5>

      <div className='small-title'>Description</div>
      <div className='normal-font margin-bottom-20'>
        Course project for Object-Oriented Programming (Java) 2018 SPRING.
        <br/>
        Developed a Pokémon game for Android platform using object-oriented programming language Java
        and Android Studio.
        <br/>
        Utilized various Android components, such as activities, fragments, intents to create user interface.
      </div>

      <div className='small-title'>Developed with</div>
      <div className='normal-font margin-bottom-20'>
        <TagGroup>
          <Tag color="blue">Java</Tag>
        </TagGroup>
      </div>

      <div className='small-title'>Link</div>
      <div className='normal-font margin-bottom-20'>
        <ul>
          <li>
            <a href='https://github.com/chelsey0527/18-OO-Pokemon' alt='pokemon' target='_blank' rel='noreferrer'>Code</a>
          </li>
        </ul>
      </div>

      <div className='small-title margin-bottom-10'>Demo video</div>
      <div className='normal-font margin-bottom-20'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/_4bOL7QfLSE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>


      {/* <div className='small-title'>What I learned</div>
      <div className='normal-font'>
        <div>Problem & Approach:</div>
        <div>
        Our school had faced difficulties in managing assignments and exams with the
        previous system, lead to the need for an improved and more advanced system
        </div>
        <div>Contribution:</div>
        <div>
        Used the System Development Life Cycle (SDLC) to stage each process from user requests
          <br/>
        Implemented the system with features such as user database management, formulated exams, and
        discussion forums
        </div>
        <div>Solutions & Impact:</div>
        <div>
        Constructed the database architecture designed to serve over 100 users, with a database
        containing 200 past exams
        </div>
        <div>Learning & Reflection:</div>
        <div>
        It was hard to design a well-rounded system. Although experienced over ten meetings for discussion,
        there are still numerous details that can be improved
        </div>
      </div> */}

      <Footer/>
    </>
  );
};

export default Pokemon;
