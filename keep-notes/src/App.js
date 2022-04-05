import {
  LandingPage,
  Home,
  Labels,
  Archive,
  Trash,
  Login,
} from "./pages/index";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/trash" element={<Trash />}></Route>
        <Route path="/archive" element={<Archive />}></Route>
        <Route path="/labels" element={<Labels />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/" element={<LandingPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
