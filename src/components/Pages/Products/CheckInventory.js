import React from 'react';
import useProducts from '../../Hooks/useProducts';
import InventoryItem from './InventoryItem';

const CheckInventory = () => {

    const [products, setProducts] = useProducts();

    const itemDelete = (id) => {
        const proceed = window.confirm('Product Delete?');
        if (proceed) {
           
            const url = `https://damp-coast-51374.herokuapp.com/product/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = products.filter(product => product._id !== id);
                        setProducts(remaining); 
                    }
                    console.log('delete', id);
            })
        }
        
    }
    let number = 1;
    
    return (
        <div className='container my-5'>
            <h1 className='display-4 fw-bold my-5'>Product Inventory</h1>
            <div className='row border'>
                <div className='row col-10 justify-content-center'>
                    <p className='col-1 fw-bold border'>Sl. No.</p>
                    <p className='col-7 fw-bold border text-start pl-2'>Product Name</p>
                    <p className='col-2 fw-bold border'>Quantity</p>
                    <p className='col-2 fw-bold border'>Price</p>

                </div>

                <div className='col-2 justify-content-center align-items-center'>
                    <p className='fw-bold'>Action</p>
                </div>
            </div>
            {
                products.map(product => <InventoryItem
                    key={product._key}
                    product={product}
                    itemDelete={itemDelete}
                    number={number++}
                ></InventoryItem>)
            }
        </div>
    );
};

export default CheckInventory;
