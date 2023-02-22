import Filter from "../../components/Layout/Filter/Filter";
import PageWrapper from "../../components/Layout/PageWrapper/PageWrapper";
import "./Home.scss";

const Home: React.FC = () => {
   return (
      <PageWrapper title="Home">
         <div className="Home">
            <div className="filters">
               <Filter />
            </div>
            <div className="recipes-list">
               <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quidem ea, unde libero minus ab earum, nemo dolores quis
                  repellat, similique quia? Autem voluptate eos quos qui magnam
                  magni vero velit.
               </p>
            </div>
         </div>
      </PageWrapper>
   );
};

export default Home;
