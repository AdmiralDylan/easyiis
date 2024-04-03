import React from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import axios from 'axios'
import { useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

//Update user component 

const UpdateUser = (props) => {
    const idGeneralUser = props.data.user.idGeneralUser;
    const [user,setUser] = useState({
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
                {<button>Update site</button>}
                modal nested>{
                    close => (
                        <div className='modal'>
                            <div className='form'>
                                <h1>Update Site</h1>
                                <input type="text" placeholder='site name' onChange={handleChange} name="siteName" />
                                <input type="text" placeholder='site description' onChange={handleChange} name="siteDescription" />
                                <input type="date" placeholder='site date' onChange={handleChange} name="operationDate" />
                                <input type="time" placeholder='site start time' onChange={handleChange} name="operationTimeStart" />
                                <input type="time" placeholder='site end time' onChange={handleChange} name="operationTimeEnd" />
                                <input type="number" placeholder='time interval' onChange={handleChange} name="timeInterval" />
                                <input type="text" placeholder='site address' onChange={handleChange} name="siteAddress" />
                                <input type="number" placeholder='1' onChange={handleChange} name="company_idCompany" />


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