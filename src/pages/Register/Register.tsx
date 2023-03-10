import PageWrapper from "../../components/Layout/PageWrapper/PageWrapper";
import RegisterForm from "./components/RegisterForm";

const Register: React.FC = () => {
   return (
      <PageWrapper title="Register">
         <RegisterForm />
         {/* <TestRegisterForm /> */}
      </PageWrapper>
   );
};

export default Register;
