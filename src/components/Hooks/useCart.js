
import { useEffect, useState } from 'react';
import { getStoredCart } from './LocalStore';



const useCart = () => {

    let [cart, setCart] = useState([]);


    useEffect(() => {
        const storedCart = getStoredCart();
        const saveCart = [];
        const keys = Object.keys(storedCart)
        fetch('https://damp-coast-51374.herokuapp.com/productByKeys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(keys)
        })
            .then(res => res.json())
            .then(products => {
        
            for (const id in storedCart) {
            const addedProduct = products.find(product => product._id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                saveCart.push(addedProduct);
            }
        }
        setCart(saveCart);
        })
      

    }, []);


    return [cart, setCart];
};

export default useCart;