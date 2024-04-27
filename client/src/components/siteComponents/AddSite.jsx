import React, { useContext } from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import axios from 'axios'
import { useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { Context } from '../Context';


//Addsite component

const AddSite = () => {
    let data = JSON.parse(localStorage.getItem("tech"));
    console.log("data from addsite ",data[0].company_idCompany)
    
    const [site,setSite] = useState({
        siteName:"",
        siteDescription:"",
        operationDate:0,
        operationTimeStart:"",
        operationTimeEnd:"",
        timeInterval:15,
        siteAddress:"",
        company_idCompany:data[0].company_idCompany
    });

    const[isOpen, setIsOpen] = useState(false)

    const navigate = useNavigate();

    const handleChange = (e) =>{
        setSite((prev) => ({...prev,[e.target.name]: e.target.value}));
    };

    const handleClick = async e =>{
        try{
            await axios.post("http://localhost:8081/sites",site);
            setIsOpen(false);
            window.location.reload()
        }catch(err){
            console.log(err)
        }

    }

    return (
        <div className='addSitePopout'>
            <Popup trigger=
                {<button>add site</button>}
                modal opened nested>{
                    close => (
                        <div className='modal'>
                            <div className='form'>
                                <h1>Add New Site</h1>
                                <input type="text" placeholder='site name' onChange={handleChange} name="siteName" />
                                <input type="text" placeholder='site description' onChange={handleChange} name="siteDescription" />
                                <input type="date" placeholder='site date' onChange={handleChange} name="operationDate" />
                                <input type="time" placeholder='site start time' onChange={handleChange} name="operationTimeStart" />
                                <input type="time" placeholder='site end time' onChange={handleChange} name="operationTimeEnd" />
                                <input type="number" placeholder='time interval' onChange={handleChange} name="timeInterval" />
                                <input type="text" placeholder='site address' onChange={handleChange} name="siteAddress" />


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

export default AddSite