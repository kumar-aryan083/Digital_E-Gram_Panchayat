import React, { useState } from 'react';
import '../Styles/RegisterForm.css'
import { Link, useNavigate } from 'react-router-dom';

const RegistrationForm = ({position}) => {
  const [formData, setFormData] = useState({
    name:"",
    username:"",
    email:"",
    age:"",
    password: "",
    cnfPassword:"",
    address:""
  }) 

  const navigate = useNavigate();

  const handleChange = (e)=>{
    // console.log(formData);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    if(formData.password === formData.cnfPassword){
      // console.log(formData);
      // console.log(JSON.stringify(formData));
      const {cnfPassword, ...others} = formData;
      const res = await fetch(`http://localhost:8800/api/${position}/register`, {
        method: "POST",
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(others)
      })
      if(res.ok){
        alert("successful");
        const officerData = await res.json();
        localStorage.setItem("officerData", JSON.stringify(officerData));
        navigate(`/${position}/login`);
      }else{
        alert("unsuccessful")
      }
    }else{
      alert("Password should be same")
    }
  }

  return (
    <div className="full">
      <div className="card">
        <form onSubmit={handleSubmit}>
          <h1>Registration Form</h1><hr className='hori-rule'/>
          <div className="row">
            <div className="col">
              <label htmlFor="name">Name:</label>
              <input type="text" name='name' required onChange={handleChange} value={formData.name} />
            </div>
            <div className="col">
              <label htmlFor="username">Username:</label>
              <input type="text" name='username' required onChange={handleChange} value={formData.username} />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="email">Email:</label>
              <input type="email" name='email' required onChange={handleChange} value={formData.email} />
            </div>
            <div className="col">
              <label htmlFor="age">Age:</label>
              <input type="number" name='age' required onChange={handleChange} value={formData.age} />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="password">Password:</label>
              <input type="password" name='password' required onChange={handleChange} value={formData.password} />
            </div>
            <div className="col">
              <label htmlFor="cnfPassword">Confirm Password:</label>
              <input type="password" name='cnfPassword' required onChange={handleChange} value={formData.cnfPassword} />
            </div>
          </div>
          <label htmlFor="address">Address:</label>
          <br />
          <textarea name="address" id="" rows={10} onChange={handleChange} value={formData.address} ></textarea>
          <div className="btn">
            <input type="submit" value="Register"/>
          </div>
        </form>
        <div className="exists">
          Already have an account? <Link to={`/${position}/login`}>Login here</Link>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
