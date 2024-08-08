import React from 'react';
import {Routes, Route } from 'react-router-dom'
import Home from './Pages/Common/Home';
import Navbar from './Components/Common/Navbar'
import About from './Pages/Common/About';
import Services from './Pages/Common/Services';
import Contact from './Pages/Common/Contact';
import Register from './Pages/Common/Register';
import Login from './Pages/Common/Login';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
