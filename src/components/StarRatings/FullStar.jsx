import { Star } from "@phosphor-icons/react";
import styles from "./StarRatings.module.scss";

const FullStar = () => {
    return (
        <span>
            <Star weight="fill" className={styles.star_rating} />
        </span>
    );
};
export default FullStar;
