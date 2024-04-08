import React from 'react'
import { useEffect } from 'react'
import { useState} from 'react'
import axios from 'axios'
import { Link, Routes } from 'react-router-dom';
import { Route } from "react-router-dom";
import AddTech from "../components/techComponents/AddTech";
import UpdateTech from "../components/techComponents/UpdateTech";
import IndexTechs from '../components/techComponents/IndexTechs';


const Techs = () => {

  const[techs,setTechs] = useState([])

  useEffect(()=>{
    const fetchAllTechs = async ()=>{
      try{
        const res = await axios.get("http://localhost:8081/tech")
        setTechs(res.data);
      }catch(err){
        console.log(err)
      }
    }
    fetchAllTechs()
  },[])

  const handleDelete = async (idTech) => {
    try {
      await axios.delete("http://localhost:8081/tech/"+idTech)
      window.location.reload()
    } catch (err) {
      console.log(err)
    }
  }

  return (
  <div>
    <Routes>
      <Route index element={<IndexTechs/>}/>
    </Routes>
  </div>
  );
}

export default Techs