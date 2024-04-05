import React from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import axios from 'axios'
import { useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { Route, Routes } from "react-router-dom";
import SignatureBox from '../features/SignatureBox';

//AddTech component

const AddTech = () => {
    const [tech,setTech] = useState({

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

    const[isOpen, setIsOpen] = useState(false)

    const navigate = useNavigate();

    const handleChange = (e) =>{
        setTech((prev) => ({...prev,[e.target.name]: e.target.value}));
    };

    const handleClick = async e =>{
        try{
            await axios.post("http://localhost:8081/generaluser",tech);
            setIsOpen(false);
            window.location.reload()
        }catch(err){
            console.log(err)
        }

    }

    console.log(tech)
    return (
        <div className='addTechPopout'>
            <Popup trigger=
                {<button>Add new tech</button>}
                modal opened nested>{
                    close => (
                        <div className='modal'>
                            <div className='form'>
                                <h1>Add New Tech</h1>
                                <input type="date" placeholder='dob' onChange={handleChange} name="dob" />
                                <input type="text" placeholder='gender' onChange={handleChange} name="gender" />
                                <input type="text" placeholder='address' onChange={handleChange} name="address" />
                                <input type="text" placeholder='first name' onChange={handleChange} name="nameFirst" />
                                <input type="text" placeholder='last name' onChange={handleChange} name="nameLast" />
                                <input type="text" placeholder='email' onChange={handleChange} name="email" />
                                <input type="number" placeholder='1' onChange={handleChange} name="vaccineSite_idVaccineSite" />
                                <input type="number" placeholder='1' onChange={handleChange} name="vaccineSite_company_idCompany" />
                                <input type="text" placeholder='vaccine administration site' onChange={handleChange} name="administrationSite" />
                                <input type="number" placeholder='dose amount' onChange={handleChange} name="doseAmount" />

                                <Routes>
                                   <Route index element={<SignatureBox/>} /> 
                                </Routes>

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
    );
};

export default AddTech