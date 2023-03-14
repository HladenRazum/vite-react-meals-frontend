import userProfileImage from "../../../../../assets/user-profile.jpg";
import classes from "./PersonalDetailsHeader.module.scss";

const PersonalDetailsHeader: React.FC = () => {
   return (
      <header className={classes.PersonalDetailsHeader}>
         <img src={userProfileImage} width={100} />
         <div>
            <h4>John Doe</h4>
            <span>Director of Marketing</span>
            <p>USA, Illinoise, Chicago</p>
         </div>
         <button>Edit</button>
      </header>
   );
};

export default PersonalDetailsHeader;
