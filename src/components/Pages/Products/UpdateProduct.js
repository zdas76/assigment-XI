import React from 'react';
import { useParams } from 'react-router-dom';

const UpdateProduct = () => {
    const { id } = useParams();
    console.log(id);
    return (
        <div className='my-5'>
            <h1>Update Product : {id }</h1>
        </div>
    );
};

export default UpdateProduct;