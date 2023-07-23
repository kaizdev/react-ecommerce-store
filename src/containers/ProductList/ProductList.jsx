import { useEffect, useState, useRef } from "react";
import { getProductSubscription } from "../../services/products-service";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./ProductList.module.scss";
import { CaretCircleRight } from "@phosphor-icons/react";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const unsub = getProductSubscription(setProducts);
        return () => unsub();
    }, []);

    const carouselRef = useRef(null);

    const scrollRight = () => {
        carouselRef.current.scrollBy({ left: 300, behaviour: "smooth" });
    };

    return (
        <>
            <main>
                <h3>Recommended For You</h3>
                <section ref={carouselRef} className={styles.list}>
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </section>

                <CaretCircleRight
                    onClick={scrollRight}
                    size={52}
                    weight="fill"
                    className={styles.caret_circle}
                />
            </main>
        </>
    );
};
export default ProductList;
