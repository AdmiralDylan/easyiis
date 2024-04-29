import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Popup from 'reactjs-popup';


const Scribe = (props) => {
    const idGeneralUser = props.data.user.idGeneralUser;
    //only changing these two values and vaccineprofileid
    const [user,setUser] = useState({
        administrationSite:"",
        doseAmount:0,
        vaccineprofile_idVaccineProfile:0
    });

  const[vaccineProfiles,setVaccineProfiles] = useState([])
  let data = JSON.parse(localStorage.getItem("tech"));

  useEffect(()=>{
    const fetchAllVaccineProfiles = async ()=>{
      try{
        const res = await axios.get(`http://localhost:8081/vaccineProfile/${data[0].company_idCompany}`)
        setVaccineProfiles(res.data);
        console.log(vaccineProfiles)
      }catch(err){
        console.log(err)
      }
    }
    fetchAllVaccineProfiles()
  },[])


    
    const handleChange = (e) =>{
        setUser((prev) => ({...prev,[e.target.name]: e.target.value}));
        console.log("value of profile id" + e.target + e.target.value)

    };

    const handleClick = async e =>{
        e.preventDefault();
        try{
            console.log("user before axios ", user)
            const res = await axios.put(`http://localhost:8081/scribe/`+idGeneralUser,user);
            console.log("res from ceckin ",res.data)
            window.location.reload()
        }catch(err){
            console.log(err);
        }
    }

  return (
    <div className='checkInPopout'>
            <Popup trigger=
                {<button style={{backgroundColor:props.style}}>Scribe</button>}
                modal opened nested>{
                    close => (
                        <div className='modal'>
                            <div className='form'>
                                <h1>Check-in {props.data.user.nameFirst}</h1>
                                <input type="text" placeholder="Administration Site" onChange={handleChange} name="administrationSite" />
                                <p>dose amount</p><input type="number" onChange={handleChange} name="doseAmount" />
                                
                                <div>
                                    <p>Select Vaccine</p>
                                    
                                    <select name="vaccineprofile_idVaccineProfile" onChange={handleChange}>
                                        {vaccineProfiles.map(profile =>(
                                            <option
                                            key={profile.idVaccineProfile}
                                            value={profile.idVaccineProfile}
                                            name="vaccineprofile_idVaccineProfile"
                                            >{profile.vaccineName}</option>
                                        ))}
                                    </select>
                                    
                                </div>
                            </div>
                            <button onClick={handleClick}>Add</button>
                            <div>
                                <button onClick=
                                    {() => close()}>
                                    Close Screen
                                </button>
                            </div>
                        </div>
                    )
                }
            </Popup>
        </div>
  )
}

export default Scribe