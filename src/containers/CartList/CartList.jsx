import { useEffect, useState } from "react";
import { getProductSubscription } from "../../services/products-service";
import CartCard from "../../components/CartCard/CartCard";

const CartList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const unsub = getProductSubscription(setProducts);
        return () => unsub();
    }, []);

    const cartItems = products.filter((product) => product.productCartQty > 0);

    const cartItemsTotalQty = products.reduce((acc, curr) => {
        return acc + curr.productCartQty;
    }, 0);

    if (cartItems.length === 0) {
        return <p>Nothing in your cart. Please add some items to your cart!</p>;
    }

    return (
        <>
            <section>
                {cartItems.map((product) => (
                    <CartCard key={product.id} product={product} />
                ))}
            </section>
        </>
    );
};
export default CartList;
