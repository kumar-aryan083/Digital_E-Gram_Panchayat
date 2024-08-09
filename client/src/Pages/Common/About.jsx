import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  if(!localStorage.getItem("token")){
    navigate('/login');
  }else{
    return (
      <div>
        About Page
      </div>
    );
  }
}

export default About;
