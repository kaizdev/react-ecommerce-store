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

    // const inputRef = useRef();

    // const onInputChange = async (event) => {
    //     if (event.key === "Enter") {
    //         const newQty = +inputRef.current.value;
    //         if (!isNaN(newQty) && newQty >= 0) {
    //             await increaseCartQtyInputValById(id, newQty);
    //         }
    //     }
    // };

    return (
        <>
            <img
                className={styles.img_cart}
                src={productImage}
                alt={productName + " photo"}
            />
            <p>{productName}</p>
            <p>{productPrice}</p>
            <p>{productCartQty}</p>
            <div>
                <button>
                    <Minus
                        size={16}
                        onClick={() => {
                            decreaseCartQtyById(id);
                        }}
                    />
                </button>
                <input
                    type="number"
                    min={0}
                    // ref={inputRef}
                    value={productCartQty}
                    // onKeyDown={onInputChange}
                    onChange={() => {}}
                />
                {/* {productCartQty} */}

                <button>
                    <Plus
                        size={16}
                        onClick={() => {
                            increaseCartQtyById(id);
                        }}
                    />
                </button>
                <Trash
                    cursor={"pointer"}
                    size={26}
                    onClick={() => {
                        removeFromCartById(id);
                    }}
                />
            </div>
        </>
    );
};
export default CartCard;
