import React from 'react';
import {Sidenav, Nav} from 'rsuite';
import InfoRoundIcon from '@rsuite/icons/InfoRound';
import MemberIcon from '@rsuite/icons/Member';
import EmailFillIcon from '@rsuite/icons/EmailFill';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import './Navrbar.css';

const Navbar = () => {
  const [expanded, setExpanded] = React.useState(true);
  const [activeKey, setActiveKey] = React.useState('1');

  return (
    <>
      <div style={{width: 300}}>
        <Sidenav expanded={expanded} defaultOpenKeys={['3', '4']}>
          <Sidenav.Header>
            <div className='header'>
              <a href='/'>
                Chin-Shan Lee
              </a>
            </div>
          </Sidenav.Header>
          <Sidenav.Body>
            <Nav activeKey={activeKey} onSelect={setActiveKey}>
              <Nav.Item eventKey="1" icon={<InfoRoundIcon />} href='/About'>
                About
              </Nav.Item>
              <Nav.Item placement="rightStart" eventKey="2" icon={<MemberIcon />} href='/Experience'>
                Work Experience
              </Nav.Item>
              <Nav.Menu placement="rightStart" eventKey="3" title="Project" icon={<MagicIcon />}>
                {/* <Nav.Item eventKey="3-1" href='/Overview'>Overview</Nav.Item> */}
                <Nav.Item eventKey="3-1" href='/Project/ICMS'>2020 Intelligent Customer Management System</Nav.Item>
                <Nav.Item eventKey="3-2" href='/Project/AMSM'>2019 Assignmaent Management System Design</Nav.Item>
                <Nav.Item eventKey="3-3" href='/Project/Famille'>2018 Famille</Nav.Item>
                <Nav.Item eventKey="3-4" href='/Project/Pokemon'>2018 Pokémon game</Nav.Item>
              </Nav.Menu>
              {/* <Nav.Menu placement="rightStart" eventKey="4" title="Side Project" icon={<MagicIcon />}>
                <Nav.Item eventKey="4-1" href='/Project/ICMS'>2022 Taipei Day Trip</Nav.Item>
                <Nav.Item eventKey="4-2" href='/Project/AMSM'>2023 Object Detection</Nav.Item>
              </Nav.Menu> */}
              <Nav.Item eventKey="4" icon={<EmailFillIcon />} href='/Contact'>
                Contact
              </Nav.Item>
            </Nav>
          </Sidenav.Body>
          <Sidenav.Toggle expanded={expanded} onToggle={(expanded) => setExpanded(expanded)} />
        </Sidenav>
      </div>
    </>
  );
};

export default Navbar;


