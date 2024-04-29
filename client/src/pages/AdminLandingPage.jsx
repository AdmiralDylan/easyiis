import React from 'react'
import IndexSite from '../components/siteComponents/IndexSite'
import AddSite from '../components/siteComponents/AddSite';
import AddTech from '../components/techComponents/AddTech';
import { Link, Routes, Route } from 'react-router-dom';
import NavBar from '../components/features/NavBar';


const AdminLandingPage = () => {

    

return (
    <div>
        <Routes>
            <Route index element={<NavBar/>}/>
        </Routes>
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
        <button><Link to ="/vaccineProfiles">Vaccine Profiles</Link></button>
        <button><Link to ="/downloadCSV">Download CSV</Link></button>
    </div>
  )
}

export default AdminLandingPage