import HomeComponent from "./component/home";
import LoginComponent from "./component/auth/login";
import QLGV from "./component/QLGV/QLGV";
import QLHS from "./component/QLHS/QLHS";
import Score from "./component/score/Score";
import AddStudent from "./component/student/AddStudent";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes
} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/Login" element={<LoginComponent />} />
      <Route path="/tkb" element={<HomeComponent />} />
      <Route path="/qlgv" element={<QLGV />} />
      <Route path="/qlhs" element={<QLHS />} />
      <Route path="/score" element={<Score />} />
      <Route path="/qlhs/add" element={<AddStudent />} />
    </Routes>
    
  );
}

export default App;
