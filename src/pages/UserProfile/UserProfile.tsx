import PageWrapper from "../../components/Layout/PageWrapper/PageWrapper";
import PersonalDetails from "./components/PersonalDetails/PersonalDetails";
import SideBar from "./components/SideBar/SideBar";
import classes from "./UserProfile.module.scss";

const UserProfile: React.FC = () => {
   return (
      <PageWrapper title="User Profile">
         <div className={classes.UserProfile}>
            <SideBar />
            <div>
               <PersonalDetails />
            </div>
         </div>
      </PageWrapper>
   );
};

export default UserProfile;
