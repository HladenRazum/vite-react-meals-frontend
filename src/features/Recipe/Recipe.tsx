import { Link } from "react-router-dom";
import { RatingType } from "../../types/rating.type";
import { ROUTES } from "../../utils/routes";
import Rating from "../../components/Rating/Rating";
import classes from "./Recipe.module.scss";
import Paper from "../../components/Layout/atoms/Paper/Paper";

type RecipeProps = {
   title: string;
   imageURL: string;
   rating: RatingType;
};

const Recipe: React.FC<RecipeProps> = ({ title, imageURL, rating }) => {
   return (
      <Paper>
         <div className={classes.Recipe}>
            <header>
               <Link to={ROUTES.recipes.path + "/" + title}>
                  <figure>
                     <img src={imageURL} alt={title} />
                  </figure>
                  <h4>{title}</h4>
               </Link>

               <Rating rating={rating} fontSize={24} />
            </header>
         </div>
      </Paper>
   );
};

export default Recipe;
