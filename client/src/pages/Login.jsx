import React from 'react'
import axios from 'axios'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  
const[techs,setTechs] = useState({
  username:"",
  password:""
})

const navigate = useNavigate();

const handleClick = async e =>{
  try{
      const res = await axios.post(`http://localhost:8081/tech`,techs);
      console.log('REUSLT:', res)
      if(res.status === 200){
        navigate("/landing");
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