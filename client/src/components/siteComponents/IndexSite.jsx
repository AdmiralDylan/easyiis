import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState} from 'react'
import axios from 'axios'
import { Link, Routes, useNavigate } from 'react-router-dom';
import { Route } from "react-router-dom";
import UpdateSite from "./UpdateSite";
import SignatureBox from '../features/SignatureBox';
import Context from '../Context';


const IndexSite = () => {

  const navigate = useNavigate();
  const[sites,setSites] = useState([])  

  const data = JSON.parse(localStorage.getItem("tech"));
  //console.log("data from addsite ",data[0].company_idCompany)


  useEffect(()=>{
    const fetchAllSites = async ()=>{
      try{
        const res = await axios.get(`http://localhost:8081/sites/${data[0].company_idCompany}`);
        setSites(res.data);
      }catch(err){
        console.log(err)
      }
    }
    fetchAllSites()
  },[]);

  const handleDelete = async (idSite) => {
    try {
      await axios.delete("http://localhost:8081/sites/"+idSite)
    } catch (err) {
      console.log(err)
    }
  }

 // When div is click move to site page and load users assigned there
 const handleNavigate = async (idSite) => {
      try{
          navigate("/SitePage/"+idSite);
      }catch(err){
          console.log(err);
      }
}

  return (
  <div>
    <div className="Sites">
      <h1>Sites</h1>
      {sites.map(site=>(
        <div className="site" key={site.idSite}>
          <button onClick={()=>handleNavigate(site.idSite)}><h3>{site.siteName}</h3></button>
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