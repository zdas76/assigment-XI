import React from 'react';
import { Link } from 'react-router-dom';

const InventoryItem = ({ product, itemDelete, number}) => {
    
    return (
        <div className='border row'>
            <div className='row col-md-10 justify-content-center'>
                <p className='col-1 border'>{number}</p>
                <p className='col-7 border text-start pl-2' >{product.name}</p>
                <p className='col-2 border' >{product.quantity}</p>
                <p className='col-2 border' >{product.price}</p>
                
            </div>

            <div className='col-md-2'>
                <span className='justify-content-center align-items-center'>
                    <Link to={`/updateproduct/${product._id}`}>
                        <button className='mx-1 px-3 my-0 border btn-info rounded'>Edit </button>
                    </Link>
                    <button onClick={() => itemDelete(product._id)} className='mx-1 px-2 my-0 border btn-info rounded'>Delete</button>
                </span>
            </div>
        </div>
    );
};

export default InventoryItem;