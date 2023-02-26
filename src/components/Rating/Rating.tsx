import classes from "./Rating.module.scss";

type RatingProps = {
   rating: number;
};

const Rating: React.FC<RatingProps> = ({ rating }) => {
   return (
      <div className={classes.Rating}>
         <input type="radio" name="radio_0" />
         <input type="radio" name="radio_1" />
         <input type="radio" name="radio_2" />
         <input type="radio" name="radio_3" />
         <input type="radio" name="radio_4" />
         <input type="radio" name="radio_5" />
      </div>
   );
};

export default Rating;
