import PersonalDetailsListItem from "./PersonalDetailsListItem/PersonalDetailsListItem";
import classes from "./PersonalDetailsList.module.scss";

type Details = {
   category: string;
   value: string;
};

const DETAILS: Details[] = [
   {
      category: "current position",
      value: "ux designer",
   },
   {
      category: "E-mail",
      value: "kk@gmail.com",
   },
   {
      category: "username",
      value: "HladenRazum",
   },
   {
      category: "gender",
      value: "male",
   },
];

const PersonalDetailsList: React.FC = () => {
   // TODO: replace the hardcoded values with dynamic data
   if (DETAILS.length === 0) {
      return <p>Could not find any personal details</p>;
   }

   return (
      <div className={classes.PersonalDetailsList}>
         <ul>
            {DETAILS.map((detail) => (
               <PersonalDetailsListItem
                  key={detail.category}
                  category={detail.category}
                  value={detail.value}
               />
            ))}
         </ul>
      </div>
   );
};

export default PersonalDetailsList;
