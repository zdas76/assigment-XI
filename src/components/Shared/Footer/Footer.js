import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className='bg-slate-800 flex flex-row text-slate-200 py-2 border-b'>
                <div className='basis-1/5 border-r'></div>
                <div className='border-r px-3 basis-1/5'>
                    <h1 className='text-xl mb-3'>Footer Menu</h1>
                    <div className='flex flex-col'>
                        <Link to='/'>Home</Link>
                        <Link to='/product'>Products</Link>
                        <Link to='/about'>About</Link>
                        <Link to='/blogs'>Blogs</Link>
                        <Link to='/contact'>Contact</Link>
                    </div>
                </div>

                <div className='border-r px-3 basis-1/5'>
                    <p className='text-xl mb-3'>Contact Us</p>
                    <p> <i className="fas fa-phone-volume mr-3 my-2"></i> +8801725807676</p>
                    <p> <a href="mailto:zdas76@gmail.com"><i className="fas fa-envelope mr-3 my-2"></i> zdas76@gmail.com</a> </p>
                    <address><i className="fas fa-map-marker-alt mr-3 my-2"></i>Sadar, Mymensingh</address>
                </div>

                <div className='border-r px-3 basis-1/5'>
                    <p className='text-xl mb-3'>Social Links</p>
                    <div className='flex flex-col'>
                        <a target="_blank" href="https://www.facebook.com"><i className="fab fa-facebook my-2 text-xl"></i></a>
                        <a target="_blank" href="https://bd.linkedin.com/"><i className="fab fa-linkedin-in my-2 text-xl"></i></a>
                        <a target="_blank" href="https://twitter.com/?lang=en"><i className="fab fa-twitter my-2 text-xl"></i></a>
                        
                    </div>
                </div>
                <div className='basis-1/5'></div>
            </div>
            <div className='bg-slate-800 py-4 text-white fw-same-bold'>
                <p>Copyright &copy; 2022. Zibonanando Das All reserved</p>
            </div>
        </div>
    );
};

export default Footer;