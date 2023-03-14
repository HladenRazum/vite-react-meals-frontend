import PersonalDetailsHeader from "./PersonalDetailsHeader/PersonalDetailsHeader";
import classes from "./PersonalDetails.module.scss";
import PersonalDetailsList from "./PersonalDetailsList/PersonalDetailsList";

const PersonalDetails: React.FC = () => {
   return (
      <section className={classes.PersonalDetails}>
         <PersonalDetailsHeader />
         <PersonalDetailsList />
      </section>
   );
};

export default PersonalDetails;
