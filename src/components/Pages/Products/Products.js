import useProducts from '../../Hooks/useProducts';
import Product from '../Product/Product';


const Products = () => {
    const [products, setProducts] = useProducts();
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

           
        </div>
    );
};

export default Products;