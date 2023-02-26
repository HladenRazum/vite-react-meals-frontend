import { Route, Routes } from "react-router-dom";
import NavigationWrapper from "./components/Layout/NavigationWrapper/NavigationWrapper";
import LayoutWrapper from "./components/Layout/LayoutWrapper/LayoutWrapper";
import getRoutes from "./utils/getRoutes";
import useTheme from "./hooks/useTheme";

function App() {
   useTheme();

   return (
      <div>
         <LayoutWrapper>
            <NavigationWrapper>
               <Routes>
                  {getRoutes()}
                  <Route path="*" element={<h1>Not found</h1>} />
               </Routes>
            </NavigationWrapper>
         </LayoutWrapper>
      </div>
   );
}

export default App;
