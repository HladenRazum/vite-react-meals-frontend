import PageWrapper from "../../components/Layout/PageWrapper/PageWrapper";
import NewRecipeForm from "./components/NewRecipeForm/NewRecipeForm";

const NewRecipe: React.FC = () => {
   return (
      <PageWrapper title="New Recipe">
         <NewRecipeForm />
      </PageWrapper>
   );
};

export default NewRecipe;
