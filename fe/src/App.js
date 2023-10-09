import HomeComponent from "./component/home";
import LoginComponent from "./component/auth/login";
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
    </Routes>
    
  );
}

export default App;
