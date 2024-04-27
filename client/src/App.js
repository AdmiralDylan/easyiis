import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Sites from "./pages/Sites";
import AdminLandingPage from "./pages/AdminLandingPage";
import Techs from "./pages/Techs";
import VaccineProfilePage from "./pages/VaccineProfilePage";
import SitePage from "./pages/SitePage";
import ContextProvider from "./components/Context";
import DownloadCSV from "./pages/DownloadCSV";

function App() {

  return (
    <div className="App">
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/sites" element={<Sites/>}/>
            <Route path="/sitePage/:id" element={<SitePage/>}/>
            <Route path="/landing" element={<AdminLandingPage/>}/>
            <Route path="/tech" element={<Techs/>}/>
            <Route path="/vaccineProfiles" element={<VaccineProfilePage/>}/>
            <Route path="/downloadCSV" element={<DownloadCSV/>}/>
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
