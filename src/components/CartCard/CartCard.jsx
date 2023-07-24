import { Minus, Plus, Trash } from "@phosphor-icons/react";
import styles from "./CartCard.module.scss";
import {
    increaseCartQtyById,
    decreaseCartQtyById,
    increaseCartQtyInputValById,
    removeFromCartById,
} from "../../services/products-service";
import { useRef } from "react";

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
        productCartQty,
    } = product;

    return (
        <>
            <main>
                <div className={styles.card_container_outer}>
                    <div className={styles.card_container_inner}>
                        <img
                            className={styles.img_cart}
                            src={productImage}
                            alt={productName + " photo"}
                        />
                        <div className={styles.card_container_middle}>
                            <p>{productName}</p>
                            <div className={styles.cart_price_qty}>
                                <p>
                                    <strong>${productPrice}</strong>
                                </p>
                                <div>
                                    <button>
                                        <Minus
                                            cursor={"pointer"}
                                            size={16}
                                            onClick={() => {
                                                decreaseCartQtyById(id);
                                            }}
                                        />
                                    </button>
                                    <input
                                        type="number"
                                        min={0}
                                        value={productCartQty}
                                        className={styles.qty_input}
                                        onChange={() => {}}
                                    />

                                    <button>
                                        <Plus
                                            cursor={"pointer"}
                                            size={16}
                                            onClick={() => {
                                                increaseCartQtyById(id);
                                            }}
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Trash
                        cursor={"pointer"}
                        size={26}
                        color="blue"
                        onClick={() => {
                            removeFromCartById(id);
                        }}
                    />
                </div>

                <hr />
            </main>
        </>
    );
};
export default CartCard;
