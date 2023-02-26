import PageWrapper from "../../components/Layout/PageWrapper/PageWrapper";
import Rating from "../../components/Rating/Rating";

const TestPage = () => {
   return (
      <PageWrapper title="Prototypes page">
         <Rating rating={3} />
      </PageWrapper>
   );
};

export default TestPage;
