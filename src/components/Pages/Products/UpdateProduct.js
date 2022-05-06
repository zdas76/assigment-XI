import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const UpdateProduct = () => {
    const { id } = useParams();
    const { register, handleSubmit } = useForm();

    console.log(id);

    const [products, setProduct] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
        
    }, [])


    const onUpdate = (data, e) => {
        console.log(data);
        const url = `http://localhost:5000/product/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdateProduct)
        })
            .then(res => res.json())
            .then(name => {
                e.target.reset();
                console.log(name);

            })

    };


    return (
        <div className='my-5'>
            <h1>Update Product : {products.name}</h1>
            <form className=" " onSubmit={handleSubmit(onUpdate)}>
                <div className="d-flex justify-content-center w-100 mx-auto">
                    <div className="d-flex flex-column text-right px-3 pt-1 justify-content-between">
                        <label className="" htmlFor="productName">Name :</label>
                        <label htmlFor="">Image :</label>
                        <label htmlFor="">Description :</label>
                        <label htmlFor="">Quantity :</label>
                        <label htmlFor="">Price :</label>
                        <label htmlFor="">Supplier :</label>
                    </div>

                    <div className="w-sm-100 w-75 w-md-50">
                        <input className="form-control" {...register("name", { required: true, maxLength: 100 })} />
                        <input className="form-control my-4" {...register("img", { required: true, maxLength: 200 })} />
                        <input className="form-control my-4" {...register("description", { required: true, maxLength: 500 })} />
                        <input className="form-control my-4" type="number" {...register("quantity", { required: true, min: 1, max: 100000 })} />
                        <input className="form-control my-4" type="number" {...register("price", { required: true, min: 1, max: 100000 })} />
                        <input className="form-control " {...register("supplierName", { required: true, maxLength: 500 })} />
                    </div>
                </div>
                <input className="form-control w-25 mx-auto mt-4 bg-light fw-bold" type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default UpdateProduct;