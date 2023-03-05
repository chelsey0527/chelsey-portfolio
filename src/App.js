import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import 'rsuite/dist/rsuite.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Experience from './views/Experience';
import ICMS from './views/project/ICMS';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <BrowserRouter>
        <div className='container'>
          <Navbar />
          <div className='main-container'>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/Experience' element={<Experience/>} />
              <Route path='/Project/ICMS' element={<ICMS/>} />
              {/* <Route path='/About' element={<Experience/>} />
            <Route path='/Portfolio' element={<Portfolio/>} />
            <Route path='/Contact' element={<Contact/>} /> */}
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </React.StrictMode>,
);

export default App;
