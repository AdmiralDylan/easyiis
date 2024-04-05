import React from 'react'
import { useEffect } from 'react'
import { useState} from 'react'
import axios from 'axios'
import { Link, Routes } from 'react-router-dom';
import { Route } from "react-router-dom";
import AddTech from "./AddTech";
import UpdateTech from "./UpdateTech";



const IndexTechs = () => {

  const[techs,setTechs] = useState([])

  useEffect(()=>{
    const fetchAllTechs = async ()=>{
      try{
        const res = await axios.get("http://localhost:8081/generaluser")
        setTechs(res.data);
      }catch(err){
        console.log(err)
      }
    }
    fetchAllTechs()
  },[])

  const handleDelete = async (idTech) => {
    try {
      await axios.delete("http://localhost:8081/generaluser/"+idTech)
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
        <div className="tech" key={tech.idTech}>

          <h3>{tech.nameFirst + " " + tech.nameLast}</h3>
          <button className="deleteTech" onClick={()=>handleDelete(tech.idTech)}>delete</button>
          <Routes>
            <Route index element={<UpdateTech
            data={{tech}}/>}/>
          </Routes>
        </div>
      ))}
      </div>
      <Routes>
        <Route index element={<AddTech/>}/>
      </Routes>
  </div>
  );
};

export default IndexUsers