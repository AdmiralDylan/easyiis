import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Popup from 'reactjs-popup';


const CheckIn = (props) => {
    const idGeneralUser = props.data.user.idGeneralUser;
    
    const [user,setUser] = useState({
        checkedIn:false,
        checkedInTime:0
    });


    
    
    const handleChange = (e) =>{
        if(e.target.name === 'checkedIn'){
            setUser((prev) => ({...prev,[e.target.name]:e.target.checked}));
        }else{
            setUser((prev) => ({...prev,[e.target.name]: e.target.value}));
        }
    };


    const handleClick = async e =>{
        
        e.preventDefault();
        try{
            console.log("user before axios ", user)
            const res = await axios.put(`http://localhost:8081/checkIn/`+idGeneralUser,user);
            console.log("res from ceckin ",res.data)
            window.location.reload()
        }catch(err){
            console.log(err);
        }
    }

    console.log(props);

  return (
    <div className='checkInPopout'>
            <Popup trigger=
                {<button style={{backgroundColor:props.style}}>check-in</button>}
                modal opened nested>{
                    close => (
                        <div className='modal'>
                            <div className='form'>
                                <h1>check-in</h1>
                                <input type="time" onChange={handleChange} name="checkedInTime" />
                                <input type="checkbox" onChange={handleChange} name="checkedIn" />
            
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
  )
}

export default CheckIn