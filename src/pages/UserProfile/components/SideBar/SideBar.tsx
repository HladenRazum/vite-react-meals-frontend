import classes from "./SideBar.module.scss";

const SideBar: React.FC = () => {
   return (
      <aside className={classes.SideBar}>
         <button>Log out</button>
         <br />
         <br />
         <button>Download personal information</button>
         <br />
         <br />
         <button>Delete account</button>
         <br />
         <br />
      </aside>
   );
};

export default SideBar;
