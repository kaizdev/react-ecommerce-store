import { Minus, Plus, Trash } from "@phosphor-icons/react";
import styles from "./CartCard.module.scss";

const CartCard = ({ product }) => {
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

    return (
        <>
            <img
                className={styles.img_cart}
                src={productImage}
                alt={productName + " photo"}
            />
            <p>{productName}</p>
            <p>{productPrice}</p>
            <div>
                <Minus size={26} />
                <input type="number" min={0} />
                <Plus size={26} />
                <Trash size={26} />
            </div>
        </>
    );
};
export default CartCard;
