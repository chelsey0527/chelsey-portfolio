import React from 'react';
import {Sidenav, Nav} from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import './Navrbar.css';

const headerStyles = {
  padding: 20,
  fontSize: 20,
  fontWeight: 'bold',
  color: '#575757',
};


const Navbar = () => {
  const [expanded, setExpanded] = React.useState(true);
  const [activeKey, setActiveKey] = React.useState('1');

  return (
    <>
      <div style={{width: 300}}>
        <Sidenav expanded={expanded} defaultOpenKeys={['3', '4']}>
          <Sidenav.Header>
            <div style={headerStyles}>
              <a href='/'>
                ChinShan, Lee
              </a>
            </div>
          </Sidenav.Header>
          <Sidenav.Body>
            <Nav activeKey={activeKey} onSelect={setActiveKey}>
              <Nav.Item eventKey="1" icon={<DashboardIcon />} href='/About'>
                About
              </Nav.Item>
              <Nav.Item eventKey="2" icon={<GroupIcon />} href='/Experience'>
                Work Experience
              </Nav.Item>
              <Nav.Menu placement="rightStart" eventKey="3" title="Project" icon={<MagicIcon />}>
                <Nav.Item eventKey="3-1">Overview</Nav.Item>
                <Nav.Item eventKey="3-2" href='/Project/ICMS'>2020 | Intelligent Customer Management System</Nav.Item>
                <Nav.Item eventKey="3-3">2019 | Assignmaent Management System Design</Nav.Item>
                <Nav.Item eventKey="3-4">2018 | Pokémon game</Nav.Item>
              </Nav.Menu>
              <Nav.Item eventKey="4" icon={<GroupIcon />}>
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


