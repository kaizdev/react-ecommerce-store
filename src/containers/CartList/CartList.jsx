import { useEffect, useState } from "react";
import { getProductSubscription } from "../../services/products-service";
import CartCard from "../../components/CartCard/CartCard";
import { ShieldCheck } from "@phosphor-icons/react";
import styles from "./CartList.module.scss";

const CartList = ({ cartItemsTotalQty, cartItemsTotalPrice }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const unsub = getProductSubscription(setProducts);
        return () => unsub();
    }, []);

    const cartItems = products.filter((product) => product.productCartQty > 0);

    // const cartItemsTotalQty = products
    //     .filter((product) => typeof product.productCartQty === "number")
    //     .reduce((acc, curr) => {
    //         return acc + curr.productCartQty;
    //     }, 0);

    if (cartItems.length === 0) {
        return <p>Nothing in your cart. Please add some items to your cart!</p>;
    }

    return (
        <>
            <main className={styles.cart_container}>
                <section className={styles.cart_products_left}>
                    {cartItems.map((product) => (
                        <CartCard key={product.id} product={product} />
                    ))}
                </section>
                <div className={styles.cart_summary_right}>
                    <p>Order Summary</p>

                    <div className={styles.order_value}>
                        <p>Order value</p>
                        <p>${cartItemsTotalPrice}</p>
                    </div>

                    <p style={{ color: "green" }}>
                        Congratulations you qualify for FREE delivery
                    </p>
                    <div
                        className={`${styles.order_value} ${styles.order_total}`}
                    >
                        <p>Order Total</p>
                        <p>${cartItemsTotalPrice}</p>
                    </div>
                    <button className={styles.checkout_btn}>
                        <ShieldCheck /> Checkout Securely
                    </button>
                </div>
            </main>
        </>
    );
};
export default CartList;
