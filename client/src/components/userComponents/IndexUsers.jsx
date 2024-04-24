import React from 'react'
import { useEffect } from 'react'
import { useState} from 'react'
import axios from 'axios'
import { Link, Routes, parsePath, useParams } from 'react-router-dom';
import { Route } from "react-router-dom";
import AddUser from "./AddUser";
import UpdateUser from "./UpdateUser";



const IndexUsers = () => {
  const params = useParams();
  const[users,setUsers] = useState([])

  useEffect(()=>{
    const fetchAllUsers = async ()=>{
      try{
        const siteId = [parsePath(window.location.href)];
        console.log("site id for user navigation = ", params.id);
        const res = await axios.get("http://localhost:8081/generaluser/"+params.id);
        setUsers(res.data);
      }catch(err){
        console.log(err)
      }
    }
    fetchAllUsers()
  },[])

  const handleDelete = async (idGeneralUser) => {
    try {
      await axios.delete("http://localhost:8081/generaluser/"+idGeneralUser)
      window.location.reload()
    } catch (err) {
      console.log(err)
    }
  }

  return (
  <div>
    <div className="Users">
      <h1>Users</h1>
      {users.map(user=>(
        <div className="user" key={user.idGeneralUser}>

          <h3>{user.nameFirst + " " + user.nameLast}</h3>
          <button className="deleteUser" onClick={()=>handleDelete(user.idGeneralUser)}>delete</button>
          <Routes>
            <Route index element={<UpdateUser
            data={{user}}/>}/>
          </Routes>
        </div>
      ))}
      </div>
      <Routes>
        <Route index element={<AddUser/>}/>
      </Routes>
  </div>
  );
};

export default IndexUsers