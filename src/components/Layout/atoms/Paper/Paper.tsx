import { ReactElement } from "react";
import classes from "./Paper.module.scss";

type PaperProps = {
   children: ReactElement;
};

const Paper: React.FC<PaperProps> = ({ children }) => {
   return <div className={classes.Paper}>{children}</div>;
};

export default Paper;
