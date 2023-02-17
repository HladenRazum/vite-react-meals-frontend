import { Routes } from "react-router-dom";
import NavigationWrapper from "./components/Layout/NavigationWrapper/NavigationWrapper";
import LayoutWrapper from "./components/Layout/LayoutWrapper/LayoutWrapper";
import getRoutes from "./utils/getRoutes";

function App() {
   return (
      <div>
         <LayoutWrapper>
            <NavigationWrapper>
               <Routes>{getRoutes()}</Routes>
            </NavigationWrapper>
         </LayoutWrapper>
      </div>
   );
}

export default App;
