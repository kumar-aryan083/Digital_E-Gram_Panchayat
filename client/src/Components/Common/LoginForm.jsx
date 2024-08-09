import React, { useState } from 'react';
import '../Styles/LoginForm.css'
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = ({position}) => {
    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    });

    const navigate = useNavigate();

    const handleChange = (e)=>{
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        // console.log(loginData);
        const res = await fetch(`http://localhost:8800/api/${position}/login`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginData)
        })
        if(res.ok){
            alert("logged in successfully");
            const saveData = await res.json();
            const token = saveData.token;
            localStorage.setItem('token', token);
            navigate('/');
        }else{
            alert("unable to login");
        }
    }

  return (
    <>
        <div className="full">
            <div className="card">
                <form onSubmit={handleSubmit}>
                    <h1>Login Form</h1><hr className='hori-rule'/>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="username">Username:</label>
                            <input type="text" name='username' required value={loginData.username} onChange={handleChange}/>
                        </div>
                        <div className="col">
                            <label htmlFor="password">Password:</label>
                            <input type="password" name='password' required value={loginData.password} onChange={handleChange}/>
                        </div>
                    </div>
                    <div className="btn-login">
                        <input type="submit" value="Login"/>``
                    </div>
                </form>
                <div className="extra">Don't have an account? <Link to={`/${position}/register`}>Register here</Link></div>
            </div>
        </div>
    </>
  );
}

export default LoginForm;
