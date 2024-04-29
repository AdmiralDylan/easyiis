import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ChooseVaccine = (props) => {

  
  const siteid = props.sitedata.idSite
  
  const[vaccineProfiles,setVaccineProfiles] = useState([])
  
  useEffect(()=>{
    const fetchAllVaccineProfiles = async ()=>{
      try{
        const res = await axios.get(`http://localhost:8081/vaccines/${siteid}`)
        setVaccineProfiles(res.data);
      }catch(err){
        console.log(err)
      }
    }
    fetchAllVaccineProfiles()
  },[])

  function handleClick(prop) {
    props.sendUserToParent({'vaccineprofile_idVaccineProfile':prop});
  }
  

  return (
    <div>

        <h2>
            Choose a Vaccine
        </h2>

        <div className="VaccineProfiles">
          <h3>Vaccines Available</h3>
          {vaccineProfiles.map(vaccineProfile=>(
          <div className="vaccineProfile" key={vaccineProfile.idVaccineProfile}>
          <h3>{vaccineProfile.vaccineName}</h3>
          <button className="selectVaccineProfile" onClick={()=>handleClick(vaccineProfile.idVaccineProfile)}>Select</button>
        </div>
        ))}
      </div>
      
    </div>
  );
};

export default ChooseVaccine