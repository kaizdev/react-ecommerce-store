import { useEffect, useState } from "react";
import { getProductSubscription } from "../../services/products-service";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./ProductList.module.scss";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const unsub = getProductSubscription(setProducts);
        return () => unsub();
    }, []);

    return (
        <>
            <section className={styles.list}>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </section>
        </>
    );
};
export default ProductList;
