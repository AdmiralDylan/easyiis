import React from 'react'
import { useEffect } from 'react'
import { useState} from 'react'
import axios from 'axios'
import { Link, Routes } from 'react-router-dom';
import { Route } from "react-router-dom";
import AddSite from "../components/siteComponents/AddSite";
import UpdateSite from "../components/siteComponents/UpdateSite";
import IndexUsers from '../components/userComponents/IndexUsers';
import IndexSite from '../components/siteComponents/IndexSite';


const Sites = () => { 

  return (
  <div>
    <h3>Sites Page</h3>

    <p>search site</p>

    <div>
      <Routes>
        <Route index element= {<AddSite/>} />
      </Routes>
    </div>

    <div>
        <Routes>
          <Route index element= {<IndexSite/>} />
        </Routes>
    </div>
  </div>
  );
};

export default Sites