import React from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import axios from 'axios'
import { useState} from 'react'

//AddVaccineProfile component

const AddVaccineProfile = () => {
    const [vaccineProfile,setVaccineProfile] = useState({
        cvxCode:"",
        lotNumber:"",
        expirationDate:0,
        vaccineName:"",
        visDocument:"",
        company_idCompany:0
    });

    const[isOpen, setIsOpen] = useState(false)


    const handleChange = (e) =>{
        setVaccineProfile((prev) => ({...prev,[e.target.name]: e.target.value}));
    };

    const handleClick = async e =>{
        try{
            await axios.post("http://localhost:8081/vaccineProfile",vaccineProfile);
            setIsOpen(false);
            window.location.reload()
        }catch(err){
            console.log(err)
        }

    }

    return (
        <div className='addVaccineProfilePopout'>
            <Popup trigger=
                {<button>Add new Vaccine Profile</button>}
                modal opened nested>{
                    close => (
                        <div className='modal'>
                            <div className='form'>
                                <h1>Add New Vaccine Profile</h1>
                                <input type="text" placeholder='cvx' onChange={handleChange} name="cvxCode" />
                                <input type="text" placeholder='lot number' onChange={handleChange} name="lotNumber" />
                                <input type="date" placeholder='expiration date' onChange={handleChange} name="expiration date" />
                                <input type="text" placeholder='vaccine name' onChange={handleChange} name="vaccine mame" />
                                <input type="url" placeholder='vis document' onChange={handleChange} name="visDocument" />
                                <input type="number" placeholder='1' onChange={handleChange} name="company_idCompany" />
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

export default AddVaccineProfile