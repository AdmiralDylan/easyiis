import React from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import axios from 'axios'
import { useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { Route, Routes } from "react-router-dom";
import SignatureBox from '../features/SignatureBox';

//AddTech component

const data = JSON.parse(localStorage.getItem("tech"));


const AddTech = () => {
    const [tech,setTech] = useState({
        password:"",
        username:"",
        isAdmin:"",
        nameFirst:"",
        nameLast:"",
        signature:"",
        email:"",
        company_idCompany:data[0].company_idCompany
    });

    const[isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate();

    const handleChange = (e) =>{
        setTech((prev) => ({...prev,[e.target.name]: e.target.value}));
    };

    const handleClick = async e =>{
        try{
            await axios.post("http://localhost:8081/tech",tech);
            setIsOpen(false);
            window.location.reload()
        }catch(err){
            console.log(err)
        }

    }

    return (
        <div className='addTechPopout'>
            <Popup trigger=
                {<button>Add new tech</button>}
                modal opened nested>{
                    close => (
                        <div className='modal'>
                            <div className='form'>
                                <h1>Add New Tech</h1>
                                <input type="text" placeholder='password' onChange={handleChange} name="password" />
                                <input type="text" placeholder='username' onChange={handleChange} name="username" />
                                <input type="boolean" placeholder='is admin?' onChange={handleChange} name="isAdmin" />
                                <input type="text" placeholder='first name' onChange={handleChange} name="nameFirst" />
                                <input type="text" placeholder='last name' onChange={handleChange} name="nameLast" />
                                <input type="text" placeholder='email' onChange={handleChange} name="email" />
                                

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