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

  //admin or tech context
  let isAdmin = data[0].isAdmin;
  let isAllowed = false;

  if(isAdmin === 1){
    isAllowed = true;
  }


  //back to home
  function handleCompany(){
    if(isAllowed){
      navigate('/landing')
    } else if(!isAllowed){
      navigate('/sites')
    }

  }


  return (
    <div style={{display:'flex', padding:'2rem'}}>
        <h3 style={{paddingLeft:'5%',paddingRight:'5%'}}>Welcome {data[0].nameFirst}</h3>

        {nameCompany!=0 && <h3 style={{paddingLeft:'5%',paddingRight:'5%'}}><button onClick={()=>handleCompany()}>{nameCompany.nameCompany}</button></h3>}

        <button style={{paddingLeft:'5%',paddingRight:'5%'}} className="handleLogout" onClick={()=>handleLogout()}>Logout</button>
    </div>
  )
}

export default NavBar