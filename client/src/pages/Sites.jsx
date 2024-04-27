import React from 'react'
import { Link, Routes } from 'react-router-dom';
import { Route } from "react-router-dom";
import AddSite from "../components/siteComponents/AddSite";
import IndexSite from '../components/siteComponents/IndexSite';


const Sites = () => { 

  let data = JSON.parse(localStorage.getItem("tech"));

  let isAdmin = data[0].isAdmin;
  let isAllowed = false;

  if(isAdmin === 1){
    isAllowed = true;
  }

  return (
  <div>
    <h3>Sites Page</h3>

    <p>search site</p>

    {isAllowed && 
    <div>
      <Routes>
        <Route index element= {<AddSite/>} />
      </Routes>
    </div>
    }

    <div>
        <Routes>
          <Route index element= {<IndexSite/>} />
        </Routes>
    </div>
  </div>
  );
};

export default Sites