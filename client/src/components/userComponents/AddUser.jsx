import React from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import axios from 'axios'
import { useState} from 'react'
import { parsePath, useNavigate, useParams } from 'react-router-dom';
import { Route, Routes } from "react-router-dom";
import SignatureBox from '../features/SignatureBox';

//AddUser component

const AddUser = () => {
    const params = useParams();
    let compId = JSON.parse(localStorage.getItem("tech"));
    const [user,setUser] = useState({
        dob:"",
        gender:"",
        address:"",
        nameFirst:"",
        nameLast:"",
        signature:new Blob(),
        email:"",
        vaccineSite_idVaccineSite:params.id,
        vaccineSite_company_idCompany:compId[0].company_idCompany,
        administrationSite:"",
        doseAmount:0,
        checkedIn:0,
        checkedInTime:0
    });

    const[isOpen, setIsOpen] = useState(false)

    const navigate = useNavigate();

    const handleChange = (e) =>{
        setUser((prev) => ({...prev,[e.target.name]: e.target.value}));
    };

    const handleClick = async e =>{
        try{
            const blea = await axios.post("http://localhost:8081/generaluser/",user);
            console.log("response from node ",JSON.stringify(blea))
            setIsOpen(false);
            window.location.reload()
        }catch(err){
            console.log(err)
        }

    }

    return (
        <div className='addSitePopout'>
            <Popup trigger=
                {<button>Add new user</button>}
                modal opened nested>{
                    close => (
                        <div className='modal'>
                            <div className='form'>
                                <h1>Add New User</h1>
                                <input type="date" placeholder='dob' onChange={handleChange} name="dob" />
                                <input type="text" placeholder='gender' onChange={handleChange} name="gender" />
                                <input type="text" placeholder='address' onChange={handleChange} name="address" />
                                <input type="text" placeholder='first name' onChange={handleChange} name="nameFirst" />
                                <input type="text" placeholder='last name' onChange={handleChange} name="nameLast" />
                                <input type="text" placeholder='email' onChange={handleChange} name="email" />

                                <Routes>
                                   <Route index element={<SignatureBox/>} type="img" onChange={handleChange} name="signature"/> 
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

export default AddUser