import React, { useState } from 'react'

const FillInfo = (props) => {
    
  const [user,setUser] = useState({
    dob:"",
    gender:"",
    address:"",
    nameFirst:"",
    nameLast:"",
    email:"",
  });


  const handleChange = (e) =>{
    setUser((prev) => ({...prev,[e.target.name]: e.target.value}));
  };

  function handleClick() {
    props.sendUserToParent(user);
  }

  return (
    <div>

        <h3>{props.sitedata.siteName}</h3>
      
        <input type="date" placeholder='dob' onChange={handleChange} name="dob" />
        <input type="text" placeholder='gender' onChange={handleChange} name="gender" />
        <input type="text" placeholder='address' onChange={handleChange} name="address" />
        <input type="text" placeholder='first name' onChange={handleChange} name="nameFirst" />
        <input type="text" placeholder='last name' onChange={handleChange} name="nameLast" />
        <input type="text" placeholder='email' onChange={handleChange} name="email" />


      <div>
        <button onClick={handleClick}>Save</button>
      </div>
    </div>
  )
}

export default FillInfo