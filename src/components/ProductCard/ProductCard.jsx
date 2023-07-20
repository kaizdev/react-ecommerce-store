import { Link } from "react-router-dom";
import styles from "./ProductCard.module.scss";
import { Heart } from "@phosphor-icons/react";
import { updateFavouriteById } from "../../services/products-service";
import StarRatings from "../StarRatings/StarRatings";

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

    // const favouriteStyles = productFavourite === true;

    const updateFavourites = () => {
        updateFavouriteById(id);
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
                <button className={styles.add_btn}>Add to Bag</button>
            </div>
        </>
    );
};
export default ProductCard;
// todo: add stars for the rating
// style the button orange
