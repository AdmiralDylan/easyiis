import React from 'react'
import { Link, Routes } from 'react-router-dom';
import { Route} from "react-router-dom";
import AddTech from "../components/techComponents/AddTech";
import IndexTechs from '../components/techComponents/IndexTechs';
import NavBar from '../components/features/NavBar';


const Techs = () => {

  return (
  <div>
    <Routes>
          <Route index element={<NavBar/>}/>
    </Routes>

    <div>
      <Routes>
        <Route index element={<AddTech/>}/>
      </Routes>
    </div>

    <div>
      <Routes>
        <Route index element={<IndexTechs/>}/>
      </Routes>
    </div>
  </div>

  );
}

export default Techs