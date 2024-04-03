import React from 'react'
import { useEffect } from 'react'
import { useState} from 'react'
import axios from 'axios'
import { Link, Routes } from 'react-router-dom';
import { Route } from "react-router-dom";
import AddSite from "../components/siteComponents/AddSite";
import UpdateSite from "../components/siteComponents/UpdateSite";
import IndexUsers from '../components/userComponents/IndexUsers';


const Sites = () => {

  const[sites,setSites] = useState([])

  useEffect(()=>{
    const fetchAllSites = async ()=>{
      try{
        const res = await axios.get("http://localhost:8081/sites")
        setSites(res.data);
      }catch(err){
        console.log(err)
      }
    }
    fetchAllSites()
  },[])

  const handleDelete = async (idSite) => {
    try {
      await axios.delete("http://localhost:8081/sites/"+idSite)
      window.location.reload()
    } catch (err) {
      console.log(err)
    }
  }

  return (
  <div>
    <div>
    <Routes>
        <Route index element={<IndexUsers/>}/>
      </Routes>
    </div>
    <div className="Sites">
      <h1>Sites</h1>
      {sites.map(site=>(
        <div className="site" key={site.idSite}>
          <h3>{site.siteName}</h3>
          <p>{site.operationDate}</p>
          <button className="deleteSite" onClick={()=>handleDelete(site.idSite)}>delete</button>
          <Routes>
            <Route index element={<UpdateSite
            data={{site}}/>}/>
          </Routes>
        </div>
      ))}
      </div>
      <Routes>
        <Route index element={<AddSite/>}/>
      </Routes>
  </div>
  );
};

export default Sites