import React from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import axios from 'axios'
import { useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Route, Routes } from "react-router-dom";
import SignatureBox from '../features/SignatureBox';

//Update user component 

const UpdateUser = (props) => {
    const idGeneralUser = props.data.user.idGeneralUser;
    const data = localStorage.getItem("tech")
    console.log("site id general user" + props.data.user.vaccineSite_idVaccineSite);

    const [user,setUser] = useState({
        dob:"",
        gender:props.data.user.gender,
        address:props.data.user.address,
        nameFirst:props.data.user.nameFirst,
        nameLast:props.data.user.nameLast,
        signature:"",
        email:props.data.user.email,
    });

    
    const handleChange = (e) =>{
        setUser((prev) => ({...prev,[e.target.name]: e.target.value}));
    };

    const handleClick = async e =>{
        
        e.preventDefault();
        try{
            await axios.put(`http://localhost:8081/generaluser/`+idGeneralUser,user);
            window.location.reload()
        }catch(err){
            console.log(err);
        }
    }

    return (
        <div className='UpdateUserPopout'>
            <Popup trigger=
                {<button>Update User</button>}
                modal nested>{
                    close => (
                        <div className='modal'>
                            <div className='form'>
                                <h1>Update User: {props.data.user.nameFirst}</h1>
                                <input type="date" placeholder='dob' onChange={handleChange} name="dob" />
                                <input type="text" value={user.gender} placeholder='gender' onChange={handleChange} name="gender" />
                                <input type="text" value={user.address} placeholder='address' onChange={handleChange} name="address" />
                                <input type="text" value={user.nameFirst} placeholder='first name' onChange={handleChange} name="nameFirst" />
                                <input type="text" value={user.nameLast} placeholder='last name' onChange={handleChange} name="nameLast" />
                                <input type="text" value={user.email} placeholder='email' onChange={handleChange} name="email" />

                                <Routes>
                                   <Route index element={<SignatureBox/>} /> 
                                </Routes>
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

export default UpdateUser