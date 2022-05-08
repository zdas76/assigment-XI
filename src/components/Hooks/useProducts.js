import { useEffect, useState } from "react"

const useProducts = () => {
    const [products, setProducts] = useState([]);



    useEffect(() => {
        fetch('https://damp-coast-51374.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    // console.log(products);

    return [products, setProducts]
}

export default useProducts;