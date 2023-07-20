import { Star, StarHalf } from "@phosphor-icons/react";
import FullStar from "./FullStar";
import { HalfStar } from "./HalfStar";

const StarRatings = ({ rating }) => {
    let stars = [];
    let fullStars = Math.floor(rating);
    let hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
        stars.push(<FullStar key={i} />);
    }

    if (hasHalfStar) {
        stars.push(<HalfStar key={fullStars} />);
    }

    return <div>{stars}</div>;
};
export default StarRatings;
