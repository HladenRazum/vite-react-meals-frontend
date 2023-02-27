import Recipe from "../Recipe";
import { RatingType } from "../../../types/rating.type";

type RecipeWithAuthorInfoProps = {
   title: string;
   imageURL: string;
   rating: RatingType;
   authorName: string;
};

const RecipeWithAuthorInfo: React.FC<RecipeWithAuthorInfoProps> = ({
   title,
   imageURL,
   rating,
   authorName,
}) => {
   return (
      <div>
         <Recipe title={title} imageURL={imageURL} rating={rating} />
         <footer>
            <div>Author Image</div>
            <div>
               <div>{authorName}</div>
               {/* Number of recipes */}
               <span>500</span>
               {/* How many users have cooked this recipe */}
               <span>32k</span>
               {/* How many likes the user have */}
               <span>3k</span>
            </div>
         </footer>
      </div>
   );
};

export default RecipeWithAuthorInfo;
