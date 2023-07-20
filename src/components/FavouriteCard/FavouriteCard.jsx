import { Link } from "react-router-dom";
import styles from "./FavouriteCard.module.scss";
import { updateFavouriteById } from "../../services/products-service";

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
                <p>{productRating}</p>
                <p>
                    <strong>{"$" + productPrice}</strong>
                </p>
                <button className={styles.add_btn}>Add to Bag</button>
                <button className={styles.add_btn} onClick={updateFavourites}>
                    Remove from favourites
                </button>
            </div>
        </>
    );
};
export default FavouriteCard;
