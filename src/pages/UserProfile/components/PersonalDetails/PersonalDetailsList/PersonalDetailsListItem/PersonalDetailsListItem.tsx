import classes from "./PersonalDetailsListItem.module.scss";

type PersonalDetailsListItemProps = {
   category: string;
   value: string;
};

const PersonalDetailsListItem: React.FC<PersonalDetailsListItemProps> = ({
   category,
   value,
}) => {
   return (
      <li className={classes.PersonalDetailsListItem}>
         <span>{category}</span> <span className={classes.value}>{value}</span>
      </li>
   );
};

export default PersonalDetailsListItem;
