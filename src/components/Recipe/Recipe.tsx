import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";

type RecipeProps = {
   title: string;
   imageURL: string;
   rating: number;
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
            <div>{rating}</div>
         </header>
      </div>
   );
};

export default Recipe;
