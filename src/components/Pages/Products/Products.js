import { useEffect, useState } from 'react';
// import useProducts from '../../Hooks/useProducts';
import Product from '../Product/Product';
import './Product.css'


const Products = () => {
    const [products, setProducts] = useState([]);
    const [pageCount, setPageCount] = useState([0]);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10)

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


    return (
			
        <div className='container'>
            
            <div className='row'>
                {
                    products.map(product =>
                        <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                }
            </div>

            <div className='pagination my-5'>
                {
                    [...Array(pageCount).keys()].map(number => <button
                    className={page === number ? 'selected': ''}
                    onClick={()=> setPage(number)}
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
    );
};

export default Products;