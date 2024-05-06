import React from 'react'
import { useEffect } from 'react'
import { useState} from 'react'
import axios from 'axios'
import { Link, Routes } from 'react-router-dom';
import { Route } from "react-router-dom";
import AddTech from "./AddTech";
import UpdateTech from "./UpdateTech";



const IndexTechs = () => {

  //loaded tech from login
  const data = JSON.parse(localStorage.getItem("tech"));
  
  //sets array of techs, basically
  const[techs,setTechs] = useState([])

  //consitantly sets the array of techs, aysnc to wait for the accepted response from axios
  useEffect(()=>{
    const fetchAllTechs = async ()=>{
      try{
        const res = await axios.get(`http://localhost:8081/tech/${data[0].company_idCompany}`)
        setTechs(res.data);
      }catch(err){
        console.log(err)
      }
    }
    fetchAllTechs()
  },[])

  //delete tech by Id
  const handleDelete = async (idTech) => {
    console.log("handle delete " + idTech);
    try {
      const res = await axios.delete("http://localhost:8081/tech/" + idTech)
      window.location.reload()
    } catch (err) {
      console.log(err)
    }
  }

  return (
  <div>
    <div className="Techs">
      <h1>Techs</h1>
      {techs.map(tech=>(
        <div style={{display:'flex'}} className="tech" key={tech.idTech}>
          <h3>{tech.nameFirst}</h3>
          <button className="deleteTech" onClick={()=>handleDelete(tech.idTech)}>delete</button>
          <Routes>
            <Route index element={<UpdateTech
            data={{tech}}/>}/>
          </Routes>
        </div>
      ))}
      </div>
  </div>
  );
};

export default IndexTechs