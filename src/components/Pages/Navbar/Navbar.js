import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Navbar.css'

const Navbar = () => {
    const [user] = useAuthState(auth);
    const [togal, setTogal] = useState(true);

    const handleSignOut = () => {
        signOut(auth)
    }


    return (
        <div className='sticky-top'>
            <button className="d-block d-lg-none me-3 mt-2 ms-auto fw-bold display-5" onClick={() => setTogal(!togal)}>&#8801;</button>
            {
                togal ?
                    <div className='my-2 d-flex flex-column flex-lg-row justify-content-center bg-dark py-3' >
                        <NavLink to="home" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home </NavLink>
                        <NavLink to="products" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Products </NavLink>
                        <NavLink to="blogs" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Blogs </NavLink>
                        {
                            user ? <div className='d-flex flex-column flex-lg-row'>
                                <NavLink to="chekinvenroty" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Check Inventory </NavLink>
                                <NavLink to="addproduct" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>AddProduct </NavLink>

                            </div> : null
                        }
                        <NavLink to="contact" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Contact </NavLink>
                        {
                            user ? <button className="text-warning fw-bold ms-2" onClick={handleSignOut}>Sing Out</button> : (<NavLink to="/login" className={({ isActive }) => (isActive ? 'active' : 'inactive')}> <i className="fas fa-user text-blue-500 mt-1"></i> Log In </NavLink>)
                        }
                    </div> : null

            }




        </div>
    );
};

export default Navbar;
