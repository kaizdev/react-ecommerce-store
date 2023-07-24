import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductById } from "../../services/products-service";
import styles from "./ProductPage.module.scss";

const ProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);

    const {
        productAges,
        productBrand,
        productDescription,
        productFavourite,
        productImage,
        productItemNum,
        productName,
        productPieces,
        productPrice,
        productRating,
        productStock,
    } = product ?? {};

    useEffect(() => {
        getProductById(id)
            .then((product) => setProduct(product))
            .catch((err) => setError(err));
    }, []);

    return (
        <>
            {product && (
                <main>
                    <p>{productName}</p>
                    <img
                        src={productImage}
                        alt={productName + " photo"}
                        className={styles.product_img}
                    />
                    <p>{productDescription}</p>
                </main>
            )}
            {error && <p>{error.message}</p>}
        </>
    );
};
export default ProductPage;
