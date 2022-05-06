
import { Link } from 'react-router-dom';


const Cart = ({ cart }) => {
    
    // const [newCart, setnewCart] = useState([cart]);

    

    return (
        <div>
            <p className='mb-3'>Total Product : {cart.length}</p>
            <Link className='btn-warning rounded px-3 fw-blod py-1' to='/checkout'> Check </Link>
            
        </div>
        
    );
};

export default Cart;