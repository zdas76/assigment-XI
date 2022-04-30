import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import google from '../../../images/google.png';
import app from '../../../firebase.init';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Login = () => {
    const [user, setUser] = useState({});

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const handelGoogleSingin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                console.log(user);
            })
            .catch(error => {
                console.error('Error :', error);
            })
    };

        

    return (
        <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100'>

            <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-3xl w-50 max-w-md " >
                <div className="font-medium self-center text-xl sm:text-3xl text-gray-800">
                    Welcome to Best Furniture Gallery </div>
                <h1 className="text-2xl font-medium text-primary mt-4 mb-2">
                    Login to your account
                </h1>

                <div className="mt-10">
                    <form action="#">
                      <div className="flex flex-col mb-5">
                            <div className="relative">
                                <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400" >
                                    <i className="fas fa-at text-blue-500"></i>
                                </div>

                                <input id="email" type="email" name="email" className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border  border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Enter your email" />
                            </div>
                        </div>

                        <div className="flex flex-col mb-6">
                            <div className="relative">
                                <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400" >
                                    <span> <i className="fas fa-lock text-blue-500"></i> </span>
                                </div>

                                <input id="password" type="password" name="password" className=" text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400 " placeholder="Enter your password" />
                            </div>
                        </div>

                        <div className="flex w-full">
                            <button type="submit" className="flex mt-2 items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-500 hover:bg-blue-600 rounded-2xl py-2 w-full transition duration-150 ease-in ">
                                <span className="mr-2 uppercase">Log In</span>
                                <span>
                                    <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor" > <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" /> </svg>
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
                <div className="flex justify-center items-center mt-6">
                    <span className="ml-2" > Need to register?
                        <Link to="/registration" className='inline-flex items-center text-blue-500 font-medium text-xs text-center ml-2'>SingUp here</Link>
                    </span>
                </div>
                
                <div className="flex w-full">
                    <button onClick={handelGoogleSingin} type="submit" className="flex mt-2 items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-500 hover:bg-blue-600 rounded-2xl py-2 w-full transition duration-150 ease-in ">
                        <span className="mr-2 uppercase">Log In with Google</span>
                        <span><img className='w-6' src={google} alt="" /></span>
                    </button>
                </div>

                
            </div>
            
        </div>
    );
};

export default Login;