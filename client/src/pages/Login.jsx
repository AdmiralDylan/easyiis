import React from 'react'

import axios from 'axios'
import {useState,useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../components/Context'

const Login = () => {
  
  
const context = useContext(Context);
const[techs,setTechs] = useState({
  username:"",
  password:""
})

const navigate = useNavigate();

const handleClick = async e =>{

  localStorage.clear();

  try{
      const res = await axios.post(`http://localhost:8081/login`,techs);
      console.log('REUSLT:', res)
      if(res.status === 200){
        //console.log("going into get tech " + JSON.stringify(res.data[0]))
        try{
          localStorage.setItem("tech",JSON.stringify(res.data))
          //console.log("local storage just before nav " + localStorage.getItem("tech"))
        }catch(err){
          console.log("error" + err)
        }
        if(res.data[0].isAdmin === 1){
          navigate('/landing')
        }else{
          navigate('/sites')
        }
      }else{
        console.log("nope");
      }
  }catch(err){
      console.log(err)
  }

}

const handleChange = (e) =>{
  setTechs((prev) => ({...prev,[e.target.name]: e.target.value}));
};

  return (
    <div className="login">
      <h1>Login</h1>
      <input type="text" placeholder='username' onChange={handleChange} name="username" />
      <input type="text" placeholder='password' onChange={handleChange} name="password" />
      <button onClick={handleClick}>login</button>
    </div>
  )
}

export default Login;