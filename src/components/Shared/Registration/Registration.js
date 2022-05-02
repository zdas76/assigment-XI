import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';



const Registration = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState('');
    const [userError, setUserError] = useState('');

    
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        // loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth)

    const handleEmain = e => {
        setEmail(e.target.value);
    }
    const handlePassword = e => {
        setPassword(e.target.value);
    }
    const handleConfirmPassword = e => {
        setConfirmPassword(e.target.value);
    }

    // useEffect(() => {
        
        
    // },[]);
    
    if (user) {
        navigate('/home');
    }
    console.log(user);

    const handleSingUp = e => {
        e.preventDefault();

        if (error) {
            setUserError(error.message);
        }

        if (password !== confirmPassword) {
            setUserError('Your Password not Match');
        }
        if (password.length < 6) {
            setUserError('Please provide minimum six digit');
        }
        
        createUserWithEmailAndPassword(email, password);
        console.log(email, password);
    }

    return (
        <div>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-8">
                <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-3xl w-50 max-w-md " >
                    <div className="font-medium self-center text-xl sm:text-3xl text-gray-800">
                        Join us Now
                    </div>
                    <div className="mt-4 self-center text-xl sm:text-sm text-gray-800">
                        Enter your credentials to get access account
                    </div>

                    <div className="mt-10">
                        <form onSubmit={handleSingUp}>
                            <div className="flex flex-col mb-5">
                                <div className="relative"> 
                                    <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400" >
                                        <i className="fas fa-at text-blue-500"></i>
                                    </div>

                                    <input onBlur={handleEmain} id="email" type="email" name="email" className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border  border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Enter your email" required/>
                                </div>
                            </div>

                            <div className="flex flex-col mb-6">
                                <div className="relative">
                                    <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400" >
                                        <span> <i className="fas fa-lock text-blue-500"></i> </span>
                                    </div>

                                    <input onBlur={handlePassword} id="password" type="password" name="password" className=" text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400 " placeholder="Enter your password" required />
                                </div>
                            </div>
                            <div className='flex flex-col mb-6'>
                                <div className="relative">
                                    <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400" >
                                        <span> <i className="fas fa-lock text-blue-500"></i> </span>
                                    </div>

                                    <input onBlur={handleConfirmPassword} id="confarm-password" type="password" name="password" className=" text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400 " placeholder="Confirm Your password" required />
                                </div>
                            </div>

                            <div className="flex w-full">
                                <button type="submit" className="flex mt-2 items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-500 hover:bg-blue-600 rounded-2xl py-2 w-full transition duration-150 ease-in ">
                                    <span className="mr-2 uppercase">Sign Up</span>
                                    <span>
                                        <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor" > <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" /> </svg>
                                    </span>
                                </button>
                            </div>
                            {userError}
                        </form>
                    </div>
                    <div className="flex justify-center items-center mt-6">
                        <span className="ml-2" >You have an account?
                            <Link to="/login" className='inline-flex items-center text-blue-500 font-medium text-xs text-center ml-2'>Login here</Link>
                        </span>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Registration;