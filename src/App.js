import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import 'rsuite/dist/rsuite.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Navbar from './components/Navbar';
import BackToTop from './components/BackToTop';
import Home from './views/Home';
import Overview from './views/Overview';
import Experience from './views/Experience';
import ICMS from './views/project/ICMS';
import AMSM from './views/project/AMSM';
import Pokemon from './views/project/Pokemon';
import Famille from './views/project/Famille';
import Contact from './views/Contact';

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
              <Route path='/Overview' element={<Overview/>} />
              <Route path='/Contact' element={<Contact/>} />
              <Route path='/Project/ICMS' element={<ICMS/>} />
              <Route path='/Project/AMSM' element={<AMSM/>} />
              <Route path='/Project/Pokemon' element={<Pokemon/>} />
              <Route path='/Project/Famille' element={<Famille/>} />
              {/* <Route path='/About' element={<Experience/>} />
            <Route path='/Portfolio' element={<Portfolio/>} />
            <Route path='/Contact' element={<Contact/>} /> */}
            </Routes>
          </div>
        </div>
      </BrowserRouter>
      <BackToTop/>
    </React.StrictMode>,
);

export default App;
