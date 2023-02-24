import RecipeWithAuthorInfo from "../../../../RecipeWithAuthorInfo/RecipeWithAuthorInfo";
import { RecipeI } from "../../../../types/Recipe";

const RECIPES: RecipeI[] = [
   {
      name: "Черен ориз с печени зеленчуци",
      rating: 5,
      tumbnailImageURL:
         "https://recepti.gotvach.bg/files/lib/250x250/bulgur-gabi-zelenchuci.jpg",
      authorName: "Величка Щърбанова",
   },
];

const RecipesList: React.FC = () => {
   if (RECIPES.length === 0) {
      return <h3>No results</h3>;
   }

   return (
      <ul>
         {RECIPES.map((recipe) => (
            <RecipeWithAuthorInfo
               title={recipe.name}
               rating={recipe.rating}
               imageURL={recipe.tumbnailImageURL}
               authorName={recipe.authorName}
            />
         ))}
      </ul>
   );
};

export default RecipesList;
