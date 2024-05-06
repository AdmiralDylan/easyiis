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

  let data = JSON.parse(localStorage.getItem("tech"));
  
  //Giving context to non admins and admins
  let isAdmin = data[0].isAdmin;
  let isAllowed = false;

  if(isAdmin === 1){
    isAllowed = true;
  }

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
      const res = await axios.delete("http://localhost:8081/sites/"+idSite)
      console.log("res from delete " + res)
      window.location.reload()
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
    <h1>Sites</h1>
    <div className="Sites" style={{display:'flex'}}>
      {sites.map(site=>(
        <div style={{padding:'1rem',margin:'auto',border:'1px solid black'}} className="site" key={site.idSite}>
          <button onClick={()=>handleNavigate(site.idSite)}><h3>{site.siteName}</h3></button>
          <p>{site.operationDate}</p>
          {isAllowed && <button className="deleteSite" onClick={()=>handleDelete(site.idSite)}>delete</button>}
          {isAllowed && <Routes>
            <Route index element={<UpdateSite
            data={{site}}/>}/>
          </Routes>
          }
        </div>
      ))}
      </div>
  </div>
  );
};

export default IndexSite