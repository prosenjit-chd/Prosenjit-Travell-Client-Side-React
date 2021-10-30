import { useState, useEffect } from 'react';
import { getStoredCart } from '../utilities/fakedb';

const useCart = services => {
    const [cart, setCart] = useState([]);

    useEffect(() => {

        if (services.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const key in savedCart) {
                const addedProduct = services.find(services => services.id === key);
                if (addedProduct) {
                    // set quantity
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                }
            }
            setCart(storedCart);
        }

    }, [services]);

    return [cart, setCart];
}

export default useCart;