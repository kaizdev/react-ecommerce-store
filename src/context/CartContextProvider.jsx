//^ can probably remove this whole page

import { createContext } from "react";

export const CartContext = createContext(null);

// initially the cart will be 0

// const getDefaultCart = () => {
//     let cart = {}
//     for (let i = 1; i < products.length + 1 ; i++ ){
//         cart[i] = 0;
//     }
//     return cart
// }

const CartContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(); // update the default state

    const addToCart = (itemID) => {
        setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] + 1 }));
    };

    const removeFromCart = (itemID) => {
        setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] - 1 }));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
export default CartContextProvider;
