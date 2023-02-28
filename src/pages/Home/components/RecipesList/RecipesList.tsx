import Recipe from "../../../../features/Recipe/Recipe";
import { RecipeI } from "../../../../types/recipe.interface";

const RECIPES: RecipeI[] = [
   {
      name: "Черен ориз с печени зеленчуци",
      rating: 2,
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
            <Recipe
               key={recipe.name}
               title={recipe.name}
               rating={recipe.rating}
               imageURL={recipe.tumbnailImageURL}
            />
         ))}
      </ul>
   );
};

export default RecipesList;
