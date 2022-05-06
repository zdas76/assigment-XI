import { deleteShoppingCart, removeFromDb } from '../../Hooks/LocalStore';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts';
import ReviewItem from './ReviewItem';

const ChekOut = ( ) => {
    
    const [products, setProducts] = useProducts([]);
    const [cart, setCart] = useCart();

    let totalAmount = 0;
    let totalQuantity = 0;
    let grantTotalAmount = 0;
    for (const item of cart) {
        totalAmount = totalAmount + parseInt(item.price);
        totalQuantity = totalQuantity + parseInt(item.quantity);
        grantTotalAmount = grantTotalAmount + parseInt(item.quantity * item.price)
    }

    const oderConfer = (products) => {
        let productQuantity = cart.quantity;
        const rest = products.filter(product =>
            
            product._id === product._id);
        setCart(rest);
        console.log(productQuantity);
    }

    
    const deleteItem = (product) => {
        const rest = cart.filter(cartProduct => cartProduct._id !== product._id);
        setCart(rest);
        removeFromDb(product._id);
    }

    return (
        <div className='container my-5'>
            <h2>Oder Reviews</h2>
            <div className='d-flex mt-5'>
                <div className='col-6 border'><p className='fw-bold py-2 px-2 text-left'> Product Name</p></div>
                <div className='col-2 border'><p className='fw-bold py-2 px-2'> Unite Price</p></div>
                <div className='col-2 border'><p className='fw-bold py-2 px-2'> Quantity</p></div>
                <div className='col-2 border'><p className='fw-bold py-2 px-2'> Total Price</p></div>
            </div>
            {
                cart.map(product => <ReviewItem
                    key={product._id}
                    product={product}
                    deleteItem={deleteItem}
                ></ReviewItem>)
            }
            <div className='d-flex'>
                <div className='col-8'><p className='fw-bold py-2 px-2 border text-right'>Grant Total</p></div>
                <div className='col-2'><p className='fw-bold py-2 px-2 border'> {totalQuantity}</p></div>
                <div className='col-2'><p className='fw-bold py-2 px-2 border'> {grantTotalAmount}</p></div>
            </div>
            <div className='my-5 text-end'>
                <button onClick={oderConfer} className='btn btn-success px-5'>Confarme Order</button>
            </div>
        </div>
    );
};

export default ChekOut;