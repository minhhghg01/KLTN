import HomeComponent from "./component/home";
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
        <Route path="/tkb" element={<HomeComponent />} />
    </Routes>
    
  );
}

export default App;
