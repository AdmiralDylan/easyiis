import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  //get the tech stored in local storage
  const data = JSON.parse(localStorage.getItem("tech"));

  const[nameCompany,setName]=useState([]);
  //get the name of the company related to companyId
  async function getCompanyName(){
    try{
      const res = await axios.get(`http://localhost:8081/getCompany/${data[0].company_idCompany}`)
      setName(res.data[0]);
    }catch(err){
      console.log(err)
    }
  }

  if(nameCompany.length===0){
    getCompanyName()
  }


  const navigate = useNavigate();

  //if you login you must..
  function handleLogout(){
    //clear saved tech nav home
    localStorage.clear()
    navigate('/')
  }


  return (
    <div>
        <h3>Welcome {data[0].nameFirst}</h3>

        {nameCompany!=0 && <h3>{nameCompany.nameCompany}</h3>}

        <button className="handleLogout" onClick={()=>handleLogout()}>Logout</button>
    </div>
  )
}

export default NavBar