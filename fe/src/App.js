import HomeComponent from "./page/tkb/home";
import LoginComponent from "./page/auth/login";
import QLGV from "./page/QLGV/QLGV";
import QLHS from "./page/QLHS/QLHS";
import Score from "./page/score/Score";
import QLHSAdd from "./page/QLHS/QLHSAdd";
import Test from "./page/test/Test";
import Question from "./component/question/Question";
import Success from "./page/success/Success";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes
} from "react-router-dom";
import SingleQuestion from "./component/question/SingleQuestion";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginComponent />} />
      <Route path="/tkb" element={<HomeComponent />} />
      <Route path="/qlgv" element={<QLGV />} />
      <Route path="/qlhs" element={<QLHS />} />
      <Route path="/score" element={<Score />} />
      <Route path="/qlhs/add" element={<QLHSAdd />} />
      <Route path="/test" element={<Test />} />
      <Route path="question/:id" element={<SingleQuestion />} />
      <Route path="finish" element={<Success />} />
    </Routes>
    
  );
}

export default App;
