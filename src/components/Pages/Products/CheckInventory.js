import React from 'react';
import useProducts from '../../Hooks/useProducts';
import InventoryItem from './InventoryItem';

const CheckInventory = () => {

    const [products, setProducts] = useProducts();

    const itemDelet = (id) => {
        const proceed = window.confirm('Product Delete?');
        if (proceed) {
            console.log('delete', id);
            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = products.filter(product => product._id !== id);
                        setProducts(remaining); 
                    }
                    
            })
        }
        
    }
    
    return (
        <div className='container my-5'>
            <h1>Product Inventory</h1>
            <div className='d-flex border col-12'>
                <div className='d-flex col-9 justify-content-center'>
                    <p className='col-1 fw-bold border'>Sl. No.</p>
                    <p className='col-7 fw-bold border text-start pl-2'>Product Name</p>
                    <p className='col-3 fw-bold border'>Quantity</p>
                    <p className='col-3 fw-bold border'>Price</p>

                </div>

                <div className='d-flex col-3 justify-content-center align-items-center'>
                    <p className='fw-bold d-flex '>Action</p>
                </div>
            </div>
            {
                products.map(product => <InventoryItem
                    key={product._key}
                    product={product}
                    itemDelet={itemDelet}
                ></InventoryItem>)
            }
        </div>
    );
};

export default CheckInventory;
