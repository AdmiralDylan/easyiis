import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Sites from "./pages/Sites";
import AddSite from "./components/siteComponents/AddSite";
import UpdateSite from "./components/siteComponents/UpdateSite";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/sites" element={<Sites/>}/>
          <Route path="/add" element={<AddSite/>}/>
          <Route path="/updatesite/:idSite" element={<UpdateSite/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
