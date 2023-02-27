import { Link } from "react-router-dom";
import { RatingType } from "../../types/rating.type";
import { ROUTES } from "../../utils/routes";
import Rating from "../../components/Rating/Rating";

type RecipeProps = {
   title: string;
   imageURL: string;
   rating: RatingType;
};

const Recipe: React.FC<RecipeProps> = ({ title, imageURL, rating }) => {
   return (
      <div>
         <header>
            <h4>{title}</h4>
            <Link to={ROUTES.recipes.path + "/" + title}>
               <figure>
                  <img src={imageURL} alt={title} />
               </figure>
            </Link>
            <Rating rating={rating} fontSize={24} />
         </header>
      </div>
   );
};

export default Recipe;
