import { StarHalf } from "@phosphor-icons/react";
import styles from "./StarRatings.module.scss";
export const HalfStar = () => {
    return (
        <span>
            <StarHalf weight="fill" className={styles.star_rating} />
        </span>
    );
};
