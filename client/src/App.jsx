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
        <Route path='/officer/register' element={<Register position='officer'/>} />
        <Route path='/officer/login' element={<Login position='officer'/>} />
        <Route path='/staff/register' element={<Register position='staff'/>} />
        <Route path='/staff/login' element={<Login position='staff'/>} />
        <Route path='/user/register' element={<Register position='user'/>} />
        <Route path='/user/login' element={<Login position='user'/>} />
      </Routes>
    </>
  );
}

export default App;
