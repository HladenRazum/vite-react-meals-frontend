import { Routes } from "react-router-dom";
import Wrapper from "./components/Layout/Wrapper/Wrapper";
import getRoutes from "./utils/getRoutes";

function App() {
   return (
      <div>
         <Wrapper>
            <Routes>{getRoutes()}</Routes>
         </Wrapper>
      </div>
   );
}

export default App;
