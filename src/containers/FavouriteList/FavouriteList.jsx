import { useEffect, useState } from "react";
import { getProductSubscription } from "../../services/products-service";
import FavouriteCard from "../../components/FavouriteCard/FavouriteCard";
import styles from "./FavouriteList.module.scss";

const FavouriteList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const unsub = getProductSubscription(setProducts);
        return () => unsub();
    }, []);

    const favouriteProducts = products.filter(
        (product) => product.productFavourite
    );

    if (favouriteProducts.length === 0) {
        return <p>Nothing in favourites. Please add some favourites!</p>;
    }

    return (
        <>
            <section className={styles.list}>
                {favouriteProducts.map((product) => (
                    <FavouriteCard key={product.id} product={product} />
                ))}
            </section>
        </>
    );
};
export default FavouriteList;
