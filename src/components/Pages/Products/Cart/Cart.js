
import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import ChekOut from '../ChekOut';
import './Cart.css'

const Cart = ({ cart }) => {
    
    // const [newCart, setnewCart] = useState([cart]);

    

    return (
        <div className='cart'>
            <p>Total Product : {cart.length}</p>
            <Link to='/checkout'> Check </Link>
            
        </div>
        
    );
};

export default Cart;