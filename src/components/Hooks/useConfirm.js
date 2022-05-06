
import { useEffect, useState } from 'react';
import { getStoredCart } from './LocalStore';



const useConfirme = () => {

    let [confirme, setConfirme] = useState([]);


    useEffect(() => {
        const storedCart = getStoredCart();
        const saveCart = [];
        const keys = Object.keys(storedCart)
        fetch('http://localhost:5000/produc', {
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
                // setCart(saveCart);
            })


    }, []);


    return [confirme, setConfirme];
};

export default useConfirme;