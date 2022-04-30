import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className='bg-slate-800 flex flex-row text-slate-200 py-2 border-b'>
                <div className='basis-1/5'></div>
                <div className='border-r px-3 basis-1/5'></div>
                <div className='border-r px-3 basis-1/5'><p> +88017100000000</p></div>
                <div className='border-r px-3 basis-1/5 text-center bg-blue-400 w-100'>
                    <p>Social Links</p>
                    <div className='flex flex-col'>
                        <a target="_blank" href="https://www.facebook.com"><i className="fab fa-facebook"></i></a>
                        <a target="_blank" href="https://bd.linkedin.com/"><i className="fab fa-linkedin-in"></i></a>
                        <a target="_blank" href="https://twitter.com/?lang=en"><i className="fab fa-twitter"></i></a>
                        
                    </div>
                </div>
                <div className='basis-1/5'></div>
            </div>
        </div>
    );
};

export default Footer;