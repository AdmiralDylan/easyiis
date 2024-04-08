import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Sites from "./pages/Sites";
import AdminLandingPage from "./pages/AdminLandingPage";
import Techs from "./pages/Techs";
import VaccineProfilePage from "./pages/VaccineProfilePage";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/sites" element={<Sites/>}/>
          <Route path="/landing" element={<AdminLandingPage/>}/>
          <Route path="/tech" element={<Techs/>}/>
          <Route path="/vaccineProfiles" element={<VaccineProfilePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
