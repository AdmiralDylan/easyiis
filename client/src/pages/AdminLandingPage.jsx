import React from 'react'
import IndexSite from '../components/siteComponents/IndexSite'
import AddSite from '../components/siteComponents/AddSite';
import AddTech from '../components/techComponents/AddTech';
import { Context } from '../components/Context';
import { useContext } from 'react';

import { Link, Routes, Route } from 'react-router-dom';


const AdminLandingPage = () => {

    

return (
    <div>
        <h1>
            Admin Landing Page
        </h1>

        <div>
            <button><Link to ="/sites">View Sites</Link></button>
            <Routes><Route index element={<AddSite />}/></Routes>
            <button><Link to ="/tech">View Techs</Link></button>
            <Routes><Route index element={<AddTech/>}/></Routes>
        </div>
        <br></br>
        <h3>Upcoming Sites</h3>
        <div>
            <Routes>
                <Route index element= {<IndexSite/>} />
            </Routes>
        </div>
        <br></br>
        <button><Link to ="/vaccineProfiles">View Sites</Link></button>
        <button>Download CSV</button>
    </div>
  )
}

export default AdminLandingPage