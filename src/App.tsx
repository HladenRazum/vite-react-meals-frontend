import { Routes } from "react-router-dom";
import { getRoutes } from "./utils/routes";

function App() {
   return (
      <div>
         <Routes>{getRoutes()}</Routes>
      </div>
   );
}

export default App;
