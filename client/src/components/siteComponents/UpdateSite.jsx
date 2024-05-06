import React from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import axios from 'axios'
import { useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

//Update site component 

const UpdateSite = (props) => {
    //You will see this throughout other `name`Components
    //props is an argument passed through the indexSite component
    //passed in is the respective database object, this one is a site
    //figured I'd use this method rather than frequently calling gets from the server.
    const idSite = props.data.site.idSite;
    const data = JSON.parse(localStorage.getItem("tech"))
    const [site,setSite] = useState({
        siteName:props.data.site.siteName,
        siteDescription:props.data.site.siteDescription,
        operationDate:props.data.site.operationDate,
        operationTimeStart:props.data.site.operationTimeStart,
        operationTimeEnd:props.data.site.operationTimeEnd,
        timeInterval:props.data.site.timeInterval,
        siteAddress:props.data.site.siteAddress,
        company_idCompany:data[0].company_idCompany
    });
        
    const handleChange = (e) =>{
        setSite((prev) => ({...prev,[e.target.name]: e.target.value}));
    };

    const handleClick = async e =>{
        
        e.preventDefault();
        try{
            await axios.put(`http://localhost:8081/sites/`+idSite,site);
            window.location.reload()
        }catch(err){
            console.log(err);
        }
    }

    return (
        <div className='UpdateSitePopout'>
            <Popup trigger=
                {<button>Update site</button>}
                modal nested>{
                    close => (
                        <div className='modal'>
                            <div className='form'>
                                <h1>Update Site</h1>
                                <input type="text" value={site.siteName} onChange={handleChange} name="siteName" />
                                <input type="text" value={site.siteDescription} onChange={handleChange} name="siteDescription" />
                                <input type="date" value={site.operationDate} onChange={handleChange} name="operationDate" />
                                <input type="time" value={site.operationTimeStart} onChange={handleChange} name="operationTimeStart" />
                                <input type="time" value={site.operationTimeEnd} onChange={handleChange} name="operationTimeEnd" />
                                <input type="number" value={site.timeInterval} onChange={handleChange} name="timeInterval" />
                                <input type="text" value={site.siteAddress} onChange={handleChange} name="siteAddress" />
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

export default UpdateSite