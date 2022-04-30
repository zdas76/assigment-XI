import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <div className='bg-slate-800 d-block flex flex-wrap justify-around text-slate-200 py-2 border-b'>
                <div></div>
                <div className='border-r px-3'><h1>gmail.com</h1></div>
                <div className='border-r px-3'><p>+88017100000000</p></div>
                <div className='border-r px-3'><p>Sat-Wed: 9.00 AM  - 10.00 PM</p></div>
                <div className='border-r px-3 flex'>
                    <Link to="login" className='mx-2 text-blue-400'>Log In </Link>
                    <p>or</p>
                    <Link to="registration" className='mx-2 text-blue-400'>Registration </Link>
                </div>
                <div></div>
            </div>
            <div className='bg-slate-800 d-block flex flex-wrap justify-center text-slate-200 py-2'>
                <NavLink to="home" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home </NavLink>
                <NavLink to="products" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Products </NavLink>
                <NavLink to="about" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>About </NavLink>
                <NavLink to="blog" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Blogs </NavLink>
                <NavLink to="contact" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Contact </NavLink>
            </div>
        </div>
    );
};

export default Navbar;