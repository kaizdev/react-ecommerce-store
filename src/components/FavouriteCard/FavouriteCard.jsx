import { Link } from "react-router-dom";
import styles from "./FavouriteCard.module.scss";
import {
    updateFavouriteById,
    increaseCartQtyById,
} from "../../services/products-service";
import { useState } from "react";
import StarRatings from "../StarRatings/StarRatings";

const FavouriteCard = ({ product }) => {
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

    const updateFavourites = () => {
        updateFavouriteById(id);
    };

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        increaseCartQtyById(id);
        setIsClicked(true);
    };

    return (
        <>
            <div className={styles.card}>
                <div className={styles.image_container}>
                    <div className={styles.image_inner}>
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
                <button className={styles.add_btn} onClick={updateFavourites}>
                    Remove from favourites
                </button>
            </div>
        </>
    );
};
export default FavouriteCard;
