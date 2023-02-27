import Filter from "../../components/Layout/Filter/Filter";
import PageWrapper from "../../components/Layout/PageWrapper/PageWrapper";
import ThemeSwitch from "../../features/ThemeSwitch/ThemeSwitch";
import RecipesList from "./components/RecipesList/RecipesList";
import "./Home.scss";

const Home: React.FC = () => {
   return (
      <PageWrapper title="Home">
         <div className="Home">
            <div className="filters">
               <Filter />
            </div>
            <RecipesList />
         </div>
      </PageWrapper>
   );
};

export default Home;
