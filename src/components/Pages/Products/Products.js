import { useEffect, useState } from 'react';
import { addTolocalStore, getStoredCart } from '../../Hooks/LocalStore';
import useCart from '../../Hooks/useCart';
import Product from '../Product/Product';
import Cart from './Cart';
import './Product.css'


const Products = () => {
    const [products, setProducts] = useState([]);
    const [pageCount, setPageCount] = useState([0]);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(12);
    let [cart, setCart] = useCart();

    useEffect(() => {
        fetch(`https://damp-coast-51374.herokuapp.com/product?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [page, size])



    useEffect(() => {
        fetch('https://damp-coast-51374.herokuapp.com/productcount')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / size);
                setPageCount(pages);
            });
    });

    
    
    //Add cart product
    const addToCart = (product) => {
        let newCart = [...cart, product];
        setCart(newCart);    
        addTolocalStore(product._id);
    }
    
    return (
			
        <div className='main'>
            <div className=' cart-main bg-info shadow py-2 fw-bold'>
                <Cart cart={cart}>

                </Cart>
            </div>

            <div className='container'>
                <div className='row'>
                    {
                        products.map(product =>
                            <Product
                                key={product._id}
                                product={product}
                                addToCart={addToCart}
                            ></Product>)
                    }
                </div>

                <div className='pagination my-5'>
                    {
                        [...Array(pageCount).keys()].map(number => <button
                            className={page === number ? 'selected' : ''}
                            onClick={() => setPage(number)}
                        >{number + 1}</button>)
                    }

                    <select defaultValue={'12'} onChange={e => setSize(e.target.value)}>
                        <option value="8">8</option>
                        <option value="12" >12</option>
                        <option value="16">16</option>
                        <option value="20">20</option>
                    </select>
                </div>
                
            </div>

        </div>
    );
};

export default Products;