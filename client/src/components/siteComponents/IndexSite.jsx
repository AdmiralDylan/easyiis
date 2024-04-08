import React from 'react'
import { useEffect } from 'react'
import { useState} from 'react'
import axios from 'axios'
import { Link, Routes } from 'react-router-dom';
import { Route } from "react-router-dom";
import UpdateSite from "./UpdateSite";
import SignatureBox from '../features/SignatureBox';


const IndexSite = () => {

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
  </div>
  );
};

export default IndexSite