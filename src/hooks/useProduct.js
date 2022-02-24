import {useEffect, useState} from "react";
import {addToDb, getStoredCart} from "./useLocalStorage";

const useProduct = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        const savedCart = getStoredCart();
        const storedCart = [];
        if (products.length) {
            for (const key in savedCart) {
                const addedProduct = products.find(product => product.key === key);
                if (addedProduct) {
                    // get multiple cart quantity
                    const quantity = savedCart[key];

                    // add product quantity
                    addedProduct.quantity = quantity;

                    storedCart.push(addedProduct);
                }

            }
            setCart(storedCart);
        }
    }, [products])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);

        // save to local storage
        addToDb(product.key);
    }

    return {
        products, setProducts, handleAddToCart, cart
    }
}

export default useProduct;
