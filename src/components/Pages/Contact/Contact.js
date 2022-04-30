import React from 'react';
import contact from '../../../images/contactus.jpg';

const Contact = () => {
    return (
        <div className='container'>
            <p className='text-4xl font-semibold mt-5'><span className='border-b border-dashed border-indigo-600 px-10'>Get in tuch</span></p>
            <div className="row my-5">
                <div className='col-md-6'>
                    <form className='text-left w-75 m-auto'>
                        <div className='py-2'>
                            <label htmlFor="name">Name</label>
                            <input className='form-control ' type="text" />
                        </div>
                        <div className='py-2'>
                            <label htmlFor="email">Email</label>
                            <input className='form-control ' type="email" />
                        </div>
                        <div className='py-2'>
                            <label htmlFor="phone">Phone Number</label>
                            <input className='form-control ' type="number" name='phone' max="11" />
                        </div>
                        <div className='py-2'>
                            <label htmlFor="phone">Message</label>
                            <textarea className='form-control' name="" id="" cols="30" rows="6"></textarea>
                        </div>
                        <div className='py-2'>
                            <input type="button" value="Send" className='w-25 bg-blue-400 py-2 rounded text-white' />

                        </div>
                    </form>
                </div>
                <div className="col-md-6">
                    <img className='mt-12' src={contact} alt="" />
                </div>
            </div>
            
        </div>
    );
};

export default Contact;