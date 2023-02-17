import NAV_LINKS from "../../../utils/navLinks";
import Navigation from "../Navigation/Navigation";

type NavigationWrapperProps = {
   children?: React.ReactNode;
};

const NavigationWrapper: React.FC<NavigationWrapperProps> = ({ children }) => {
   return (
      <div className="navigation">
         <Navigation links={NAV_LINKS} />
         {children}
      </div>
   );
};

export default NavigationWrapper;
