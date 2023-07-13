import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import BootCamps from "./Pages/BootCamps";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/bootCamps" element={<BootCamps/>} />
      <Route path="/my_projects" element={<Projects/>} />
    </Routes>
  );
}

export default App;
