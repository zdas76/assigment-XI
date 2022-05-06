import React from 'react';

const ReviewItem = ({ product, deleteItem }) => {

    // const [cart, setCart] = useCart([]);
    // console.log(cart);

   
    return (
        <div className='d-flex'>
            <div className='col-6 border'>
                <p className='py-2 px-2 text-left'> {product.name}</p>
            </div>
            <div className='col-2 border'><p className='py-2 px-2'> {product.price}</p></div>
            <div className='col-2 border'><p className='py-2 px-2'> {product.quantity}</p></div>
            <div className='col-2 border d-flex justify-content-around'><p className='py-2 px-2'> {product.price}</p>
                <button onClick={() => deleteItem(product)} className='p-2 border rounded-circle fw-bold btn-outline-danger'>X</button></div>
        </div>
    );
};

export default ReviewItem;