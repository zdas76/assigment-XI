import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import Modal from '../AddProduct/Modal/Modal';

const Product = ({ product }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='col-12 col-md-6 col-xl-4 g-5 my-5'>
            <Card>
                <Card.Img variant="top" src={product.img} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text className='text-left'>
                        <p>Price: BDT. {product.price}</p>
                        <p>Supplier : {product.supplierName}</p>

                    </Card.Text>
                    <div className='flex'>
                        <button className=' w-25 badge bg-info text-dark' onClick={() => setIsOpen(true)}>Details</button>
                        <Modal open={isOpen} onClose={() => setIsOpen(false)} product={product}></Modal>
                    </div>
                </Card.Body>
                <Card.Footer className='m-0 p-0'>
                    <button className='w-100 badge bg-dark fw-bold fs-6 py-3 px-5 rounded'>Add To Card</button>
                </Card.Footer>
            </Card>
            
        </div>
    );
};

export default Product;