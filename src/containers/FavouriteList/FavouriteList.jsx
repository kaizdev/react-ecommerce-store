import { useEffect, useState } from "react";
import { getProductSubscription } from "../../services/products-service";
import FavouriteCard from "../../components/FavouriteCard/FavouriteCard";

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
            {/* <section>
                {products
                    .filter((product) => product.productFavourite)
                    .map((product) => (
                        <FavouriteCard key={product.id} product={product} />
                    ))}
            </section> */}

            <section>
                {favouriteProducts.map((product) => (
                    <FavouriteCard key={product.id} product={product} />
                ))}
            </section>
        </>
    );
};
export default FavouriteList;
