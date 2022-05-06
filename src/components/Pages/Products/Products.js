import { useEffect, useState } from 'react';
import { addTolocalStore, getStoredCart } from '../../Hooks/LocalStore';
import useCart from '../../Hooks/useCart';
import Product from '../Product/Product';
import Cart from './Cart/Cart';
import './Product.css'


const Products = () => {
    const [products, setProducts] = useState([]);
    const [pageCount, setPageCount] = useState([0]);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(9);
    let [cart, setCart] = useCart();

    useEffect(() => {
        fetch(`http://localhost:5000/product?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [page, size])



    useEffect(() => {
        fetch('http://localhost:5000/productcount')
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
        console.log(product);
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

                    <select defaultValue={'9'} onChange={e => setSize(e.target.value)}>
                        <option value="6">6</option>
                        <option value="9" >9</option>
                        <option value="15">15</option>
                        <option value="21">21</option>
                    </select>
                </div>
                
            </div>

        </div>
    );
};

export default Products;