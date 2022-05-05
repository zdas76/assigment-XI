import React from 'react';
import { Card } from 'react-bootstrap';
import './Modal.css'

const Modal = ({ open, children, onClose, product }) => {
    
    console.log(product);
    if (!open) {
        return null
    };
    
    
    return (
        <div className='orverlay'>
            <div className='modals'>
                <button className='btn btn-dark d-block ms-auto' onClick={onClose}>Close</button>
                {children}

                <div className='mt-3'>
                    <h1 className='text-3xl fw-bold mb-2'> Products Details</h1>
                    <Card>
                        <Card.Img className='imgwidth mx-auto' variant="top" src={product.img} />
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text className='text-left'>
                                <p className='align'> <strong>Description:</strong> {product.description}</p>
                                <p> <strong>Price:</strong> BDT. {product.price}</p>
                                <p><strong>Available Quantity :</strong> {product.quantity}</p>
                                <p><strong>Supplier :</strong> {product.supplierName}</p>

                            </Card.Text>
                        </Card.Body>
                    </Card>
                    
                </div>
            </div>
        </div>
    );
};

export default Modal;