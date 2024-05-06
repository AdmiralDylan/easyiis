import React from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import axios from 'axios'
import { useState} from 'react'


//Update vaccineProfile component 

const UpdateVaccineProfile = (props) => {
    const idVaccineProfile = props.data.vaccineProfile.idVaccineProfile;

    console.log(props.data.vaccineProfile.expirationDate)
    
    const [vaccineProfile,setVaccineProfile] = useState({
        cvxCode:props.data.vaccineProfile.cvxCode,
        lotNumber:props.data.vaccineProfile.lotNumber,
        expirationDate:props.data.vaccineProfile.expirationDate,
        vaccineName:props.data.vaccineProfile.vaccineName,
        visDocument:props.data.vaccineProfile.visDocument,
        company_idCompany:props.data.vaccineProfile.company_idCompany
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
                                <input type="text" value={vaccineProfile.cvxCode} placeholder='cvx' onChange={handleChange} name="cvxCode" />
                                <input type="text" value={vaccineProfile.lotNumber} placeholder='lot number' onChange={handleChange} name="lotNumber" />
                                <input type="date" value={vaccineProfile.expirationDate} placeholder='expiration date' onChange={handleChange} name="expirationDate" />
                                <input type="text" value={vaccineProfile.vaccineName} placeholder='vaccine name' onChange={handleChange} name="vaccineName" />
                                <input type="url" value={vaccineProfile.visDocument} placeholder='vis document' onChange={handleChange} name="visDocument" />
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