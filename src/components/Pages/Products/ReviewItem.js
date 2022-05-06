import React from 'react';

const ReviewItem = ({ product }) => {
    
    return (
        <div className='d-flex'>
            <div className='col-6 border'><p className='py-2 px-2 text-left'> {product.name}</p></div>
            <div className='col-2 border'><p className='py-2 px-2'> {product.price}</p></div>
            <div className='col-2 border'><p className='py-2 px-2'> {product.quantity}</p></div>
            <div className='col-2 border'><p className='py-2 px-2'> {product.price}</p></div>
        </div>
    );
};

export default ReviewItem;