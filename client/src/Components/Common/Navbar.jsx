import React from 'react';
import '../Styles/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const handleBurger = ()=>{
        const rnav = document.querySelector('.right-nav');
        if(rnav.style.left === "-100%"){
            rnav.style.left = "0";
        }else{
            rnav.style.left = "-100%";
        }
    }

    return (
        <>
            <nav className="navbar">
                <div className='left-nav'>
                    <h1>E-Gram Panchayat</h1>
                </div>
                <div className='right-nav'>
                    <ul className="nav-list">
                        <li className="list-items"><Link to='/'>Home</Link></li>
                        <li className="list-items"><Link to='/about'>About us</Link></li>
                        <li className="list-items"><Link to='/services'>Services</Link></li>
                        <li className="list-items"><Link to='/contact'>Contact us</Link></li>
                    </ul>
                </div>
                <div className="bgr" onClick={handleBurger}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
