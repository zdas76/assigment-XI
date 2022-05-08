import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

const UpdateProduct = () => {
    const { id } = useParams();
    const Navigate = useNavigate();

    const [products, setProduct] = useState({});
    useEffect(() => {
        const url = `https://damp-coast-51374.herokuapp.com/product/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])

    
    const onUpdate = (e) => {
        const price = e.target.price.value;
        const quantity = parseInt(e.target.quantity.value) + parseInt(products.quantity);
        
        const UpdateProduct = { quantity, price };

        const url = `https://damp-coast-51374.herokuapp.com/product/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdateProduct)
        })
            .then(res => res.json())
            .then(data => {
                e.target.reset();
                Navigate('/chekinvenroty')
            })
    };


    return (
        <div className='my-5 container'>
            <h1>Update Product </h1>
            <form onSubmit={onUpdate} >
                <div className="d-flex flex-column mt-3">
                    <div className='d-flex'>
                        <label className='col-3 text-end' htmlFor="productName">Name :</label>
                        <p className='col-9 text-start ml-2'> {products.name} </p>
                    </div>

                    <div className='d-flex mt-3'>
                        <label className='col-3 text-end' htmlFor="">Quantity :</label>
                        <p className='col-4 text-start ml-2'> Available {products.quantity}</p>
                        <input className="border ml-2 col-2" type="number" name='quantity' required />
                    </div>

                    <div className='d-flex mt-3'>
                        <label className='col-3 text-end' htmlFor="">Price : </label>
                        <p className='col-4 text-start ml-2'> Current Price BDT. {products.price}</p>
                        <input className="border ml-2 col-2" type="number" name="price" required />
                    </div>
                    <input className='btn btn-info w-25 mx-auto mt-3' type="submit" value="Update" />
                </div>
            </form>
        </div>
    );
};

export default UpdateProduct;