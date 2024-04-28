import React, { useState } from 'react'

const WelcomeToEasy = ({ sendUserToParent }) => {
    
  const [user,setUser] = useState({
    dob:"",
    gender:"",
    address:"",
    nameFirst:"",
    nameLast:"",
    email:"",
  });


  const handleChange = (e) =>{
    console.log(e)
    setUser((prev) => ({...prev,[e.target.name]: e.target.value}));
  };

  function handleClick() {
    sendUserToParent(user);
  }

  return (
    <div>
        <h1>
            Welcome to EasyIIS
        </h1>

        <h3>Title of vaccine site</h3>

        <p>Description of vaccine site</p>
      
        <input type="date" placeholder='dob' onChange={handleChange} name="dob" />
        <input type="text" placeholder='gender' onChange={handleChange} name="gender" />
        <input type="text" placeholder='address' onChange={handleChange} name="address" />
        <input type="text" placeholder='first name' onChange={handleChange} name="nameFirst" />
        <input type="text" placeholder='last name' onChange={handleChange} name="nameLast" />
        <input type="text" placeholder='email' onChange={handleChange} name="email" />


      <div>
        <button onClick={handleClick}>Send Data to Parent</button>
      </div>
    </div>
  )
}

export default WelcomeToEasy