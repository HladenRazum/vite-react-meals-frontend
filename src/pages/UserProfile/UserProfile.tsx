import PageWrapper from "../../components/Layout/PageWrapper/PageWrapper";
import UserProfileForm from "./components/UserProfileForm";

const UserProfile: React.FC = () => {
   return (
      <PageWrapper title="User Profile">
         <main>
            <UserProfileForm />
         </main>
      </PageWrapper>
   );
};

export default UserProfile;
