import React from 'react'
import { useEffect } from 'react'
import { useState} from 'react'
import axios from 'axios'
import { Link, Routes } from 'react-router-dom';
import { Route } from "react-router-dom";
import IndexVaccineProfiles from '../components/vaccineProfileComponents/IndexVaccineProfiles';
import NavBar from '../components/features/NavBar';


const VaccineProfilePage = () => {


  return (
  <div>
    <Routes>
          <Route index element={<NavBar/>}/>
    </Routes>
    <Routes>
      <Route index element={<IndexVaccineProfiles/>}/>
    </Routes>
  </div>
  );
}

export default VaccineProfilePage