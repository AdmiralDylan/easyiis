import React from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import axios from 'axios'
import { useState} from 'react'


//Update vaccineProfile component 

const UpdateVaccineProfile = (props) => {
    const idVaccineProfile = props.data.vaccineProfile.idVaccineProfile;
    const [vaccineProfile,setVaccineProfile] = useState({
        cvxCode:"",
        lotNumber:"",
        expirationDate:0,
        vaccineName:"",
        visDocument:"",
        company_idCompany:0
    });

    const handleChange = (e) =>{
        setVaccineProfile((prev) => ({...prev,[e.target.name]: e.target.value}));
    };

    const handleClick = async e =>{
        
        e.preventDefault();
        try{
            await axios.put(`http://localhost:8081/vaccineProfile/`+idVaccineProfile,vaccineProfile);
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
                                <input type="text" placeholder='cvx' onChange={handleChange} name="cvxCode" />
                                <input type="text" placeholder='lot number' onChange={handleChange} name="lotNumber" />
                                <input type="date" placeholder='expiration date' onChange={handleChange} name="expirationDate" />
                                <input type="text" placeholder='vaccine name' onChange={handleChange} name="vaccineName" />
                                <input type="url" placeholder='vis document' onChange={handleChange} name="visDocument" />
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

export default UpdateVaccineProfile