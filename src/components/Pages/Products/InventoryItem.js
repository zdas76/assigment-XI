import React from 'react';
import { Link } from 'react-router-dom';

const InventoryItem = ({ product, itemDelet}) => {
    console.log(product);
    return (
        <div className='border d-flex col-12'>
            <div className='d-flex col-9 justify-content-center'>
                <p className='col-1 border'></p>
                <p className='col-7 border text-start pl-2' >{product.name}</p>
                <p className='col-3 border' >{product.quantity}</p>
                <p className='col-3 border' >{product.price}</p>
                
            </div>

            <div className=' col-3'>
                <span className='d-flex justify-content-center align-items-center'>
                    <Link to={`/updateproduct/${product._id}`}>
                        <button className='mx-1 px-3 my-0 border btn-info rounded'>Edit </button>
                    </Link>
                    <button onClick={() => itemDelet(product._id)} className='mx-1 px-2 my-0 border btn-info rounded'>Delete</button>
                </span>
            </div>
        </div>
    );
};

export default InventoryItem;