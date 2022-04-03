import {LandingPage} from "./pages/LandingPage"
import {Home} from "./pages/Home"
import {Labels} from "./pages/Labels"
import {Archive} from "./pages/Archive"
import {Trash} from "./pages/Trash"
import {Routes, Route} from "react-router-dom"


function App() {
  return (
    <>
      <Routes>
        <Route path="/trash" element={<Trash/>}></Route>
        <Route path="/archive" element={<Archive/>}></Route>
        <Route path="/labels" element={<Labels/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/" element={<LandingPage/>}></Route>
      </Routes>
    </>
  );
}

export default App;
