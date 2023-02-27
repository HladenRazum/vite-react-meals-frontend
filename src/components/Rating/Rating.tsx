import { useState } from "react";
import classes from "./Rating.module.scss";

type RatingProps = {
   rating: 0 | 1 | 2 | 3 | 4 | 5;
   fontSize?: number;
};

const Rating: React.FC<RatingProps> = ({ fontSize, rating }) => {
   const [selectedRating, setSelectedRating] = useState(rating || 0);

   return (
      <div className={classes.Rating}>
         {[...Array(5)].map((star, index) => {
            index += 1;
            return (
               <button
                  key={`start_${index}`}
                  onClick={() => setSelectedRating(index)}
                  onDoubleClick={() => setSelectedRating(0)}
                  style={{ fontSize: fontSize }}
                  className={index <= selectedRating ? classes.on : classes.off}
               >
                  <span className="star">&#9733;</span>
               </button>
            );
         })}
      </div>
   );
};

export default Rating;
