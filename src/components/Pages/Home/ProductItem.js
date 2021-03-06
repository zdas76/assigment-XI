import React from 'react';
import { Card  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useProducts from '../../Hooks/useProducts';

const ProductItem = () => {
    const [products, setProducts] = useProducts({});

    return (
        <div className='container my-5'>
            <p className='display-4 fw-bold'> Products</p>
            <div className='row'>
                {
                    products.slice(0, 6).map(product =>
                        <div
                            key={product._id}
                            className='col-12 col-md-4 g-5 my-5'>
                            <Card>
                                <Card.Img variant="top" src={product.img} />
                                <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                    <div className='text-start mb-2'>
                                        <p><strong>Price: BDT.</strong> {product.price}</p>
                                        <p><strong>Supplier :</strong> {product.supplierName}</p>
                                        <p> <strong>Description :</strong> {product.description.slice(0, 80)}...</p>
                                        <p><strong>Quantity :</strong> {product.quantity}</p>
                                        
                                    </div>

                                </Card.Body>
                            </Card>
                            
                        </div>
                        
                    )

                }
            </div>

            <div>
                <Link to="/products" className='btn btn-info px-5 py-2 ml-2 fw-bold'>See More</Link>
            </div>

        </div>
    );
};

export default ProductItem;