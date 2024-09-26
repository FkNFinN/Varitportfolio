import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home.js'
import Projects from './components/pages/Projects.js';
import About from './components/pages/About.js';
import Contact from './components/pages/Contact.js';
import RRS from './components/pages/3RRS.js';
import LeafRoomba from './components/pages/LeafRoomba.js';
import Macc from './components/pages/Macc.js';
import Omni from './components/pages/omni.js';
import Piano from './components/pages/piano.js';
import Avian from './components/pages/avian.js';
import Pcb from './components/pages/pcb.js';
import MotorPlate from './components/pages/motorPlate.js';
import Customgpt from './components/pages/customgpt.js';
import Guitar from './components/pages/guitar.js';
import Bts from './components/pages/bts.js';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/about' exact Component={About} />
          <Route path='/projects' exact Component={Projects} />
          <Route path='/contact' exact Component={Contact} />
          <Route path='/3RRS' exact Component={RRS} />
          <Route path='/leafRoomba' exact Component={LeafRoomba} />
          <Route path='/macc' exact Component={Macc} />
          <Route path='/omni' exact Component={Omni} />
          <Route path='/piano' exact Component={Piano} />
          <Route path='/avian' exact Component={Avian} />
          <Route path='/pcb' exact Component={Pcb} />
          <Route path='/motorPlate' exact Component={MotorPlate} />
          <Route path='/customgpt' exact Component={Customgpt} />
          <Route path='/guitar' exact Component={Guitar} />
          <Route path='/bts' exact Component={Bts} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
