import React from 'react'
import { Link, Routes } from 'react-router-dom';
import { Route} from "react-router-dom";
import AddTech from "../components/techComponents/AddTech";
import IndexTechs from '../components/techComponents/IndexTechs';


const Techs = () => {

  return (
  <div>

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