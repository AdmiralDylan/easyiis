import React from 'react'
import { useEffect } from 'react'
import { useState} from 'react'
import axios from 'axios'
import { Link, Routes } from 'react-router-dom';
import { Route } from "react-router-dom";
import AddVaccineProfile from "./AddVaccineProfile";
import UpdateVaccineProfile from "./UpdateVaccineProfile";



const IndexVaccineProfiles = () => {

  const[vaccineProfiles,setVaccineProfiles] = useState([])
  let data = JSON.parse(localStorage.getItem("tech"));

  useEffect(()=>{
    const fetchAllVaccineProfiles = async ()=>{
      try{
        const res = await axios.get(`http://localhost:8081/vaccineProfile/${data[0].company_idCompany}`)
        setVaccineProfiles(res.data);
        console.log(res)
      }catch(err){
        console.log(err)
      }
    }
    fetchAllVaccineProfiles()
  },[])

  const handleDelete = async (idVaccineProfile) => {
    try {
      await axios.delete("http://localhost:8081/vaccineProfile/"+idVaccineProfile)
      window.location.reload()
    } catch (err) {
      console.log(err)
    }
  }

  return (
  <div>
    <div className="VaccineProfiles">
      <h1>Vaccine Profiles</h1>
      
      <Routes>
        <Route index element={<AddVaccineProfile/>}/>
      </Routes>
      
      {vaccineProfiles.map(vaccineProfile=>(
        <div className="vaccineProfile" key={vaccineProfile.idVaccineProfile}>

          <h3>{vaccineProfile.vaccineName}</h3>
          <button className="deleteVaccineProfile" onClick={()=>handleDelete(vaccineProfile.idVaccineProfile)}>delete</button>
          <Routes>
            <Route index element={<UpdateVaccineProfile
            data={{vaccineProfile}}/>}/>
          </Routes>
        </div>
      ))}
      </div>
  </div>
  );
}

export default IndexVaccineProfiles