import React from 'react'
import { useEffect } from 'react'
import { useState} from 'react'
import axios from 'axios'
import { Link, Routes } from 'react-router-dom';
import { Route } from "react-router-dom";
import AddTech from "./AddTech";
import UpdateTech from "./UpdateTech";



const IndexTechs = () => {

  const data = JSON.parse(localStorage.getItem("tech"));
  //console.log("data from indextechs ",data[0].company_idCompany)

  const[techs,setTechs] = useState([])

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

  const handleDelete = async (idTech) => {
    console.log("handle delete " + idTech);
    try {
      await axios.delete("http://localhost:8081/tech/" + idTech)
    } catch (err) {
      console.log(err)
    }
  }

  return (
  <div>
    <div className="Techs">
      <h1>Techs</h1>
      {techs.map(tech=>(
        <div className="tech" key={tech.idTech}>
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