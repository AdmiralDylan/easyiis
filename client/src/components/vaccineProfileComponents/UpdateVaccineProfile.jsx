import React from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import axios from 'axios'
import { useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Route, Routes } from "react-router-dom";
import SignatureBox from '../features/SignatureBox';

//Update vaccineProfile component 

const UpdateVaccineProfile = (props) => {
    const idVaccineProfile = props.data.vaccineProfile.idVaccineProfile;
    const [vaccineProfile,setVaccineProfile] = useState({
        dob:"",
        gender:"",
        address:"",
        nameFirst:"",
        nameLast:"",
        signature:"",
        email:"",
        vaccineSite_idVaccineSite:0,
        vaccineSite_company_idCompany:0,
        administrationSite:"",
        doseAmount:0
    });

    //const navigate = useNavigate();

    //const location = useLocation();
    
    //console.log("IdSite",idSite);
    
    const handleChange = (e) =>{
        setVaccineProfile((prev) => ({...prev,[e.target.name]: e.target.value}));
    };

    const handleClick = async e =>{
        
        e.preventDefault();
        try{
            await axios.put(`http://localhost:8081/generaluser/`+idVaccineProfile,vaccineProfile);
            window.location.reload()
        }catch(err){
            console.log(err);
        }
    }

    return (
        <div className='UpdateVaccineProfilePopout'>
            <Popup trigger=
                {<button>Update Vaccine Profile</button>}
                modal nested>{
                    close => (
                        <div className='modal'>
                            <div className='form'>
                                <h1>Update Vaccine Profile</h1>
                                <input type="date" placeholder='dob' onChange={handleChange} name="dob" />
                                <input type="text" placeholder='gender' onChange={handleChange} name="gender" />
                                <input type="text" placeholder='address' onChange={handleChange} name="address" />
                                <input type="text" placeholder='first name' onChange={handleChange} name="nameFirst" />
                                <input type="text" placeholder='last name' onChange={handleChange} name="nameLast" />
                                <input type="text" placeholder='signature' onChange={handleChange} name="signature" />
                                <input type="text" placeholder='email' onChange={handleChange} name="email" />
                                <input type="number" placeholder='1' onChange={handleChange} name="vaccineSite_idVaccineSite" />
                                <input type="number" placeholder='1' onChange={handleChange} name="vaccineSite_company_idCompany" />
                                <input type="text" placeholder='vaccine administration site' onChange={handleChange} name="administrationSite" />
                                <input type="number" placeholder='dose amount' onChange={handleChange} name="doseAmount" />
                            </div>
                            <button onClick={handleClick}>Update</button>
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
    );
};

export default UpdateVaccineProfile