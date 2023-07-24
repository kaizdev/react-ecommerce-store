import { Link } from "react-router-dom";
import styles from "./ProductCard.module.scss";
import { Heart } from "@phosphor-icons/react";
import {
    increaseCartQtyById,
    updateFavouriteById,
} from "../../services/products-service";
import StarRatings from "../StarRatings/StarRatings";
import { useState } from "react";

const ProductCard = ({ product }) => {
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
        id,
    } = product;

    const [isClicked, setIsClicked] = useState(false);

    const updateFavourites = () => {
        updateFavouriteById(id);
    };

    const handleClick = () => {
        increaseCartQtyById(id);
        setIsClicked(true);
    };

    return (
        <>
            <div className={styles.card}>
                <div className={styles.image_container}>
                    <div className={styles.image_inner}>
                        <Heart
                            size={32}
                            weight={productFavourite ? "fill" : "light"}
                            onClick={updateFavourites}
                            className={styles.favourite}
                        />

                        <Link to={id}>
                            <img
                                className={styles.card_image}
                                src={productImage}
                                alt={productName + " photo"}
                            />
                        </Link>
                    </div>
                </div>
                <Link to={id}>
                    <h3>{productName}</h3>
                </Link>

                <StarRatings rating={productRating} />

                <p>
                    <strong>{"$" + productPrice}</strong>
                </p>
                <button
                    className={
                        isClicked
                            ? `${styles.add_btn} ${styles.add_btn_clicked}`
                            : styles.add_btn
                    }
                    onClick={handleClick}
                >
                    {isClicked ? "Product added to cart" : "Add to cart"}
                </button>
            </div>
        </>
    );
};
export default ProductCard;
