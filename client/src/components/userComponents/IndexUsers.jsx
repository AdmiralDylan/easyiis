import React from 'react'
import { useEffect } from 'react'
import { useState} from 'react'
import axios from 'axios'
import { Link, Routes, parsePath, useParams } from 'react-router-dom';
import { Route } from "react-router-dom";
import UpdateUser from "./UpdateUser";
import CheckIn from './CheckIn';
import Scribe from './Scribe';



const IndexUsers = () => {

  
  const params = useParams();
  const[users,setUsers] = useState([])
  useEffect(()=>{
    const fetchAllUsers = async ()=>{
      try{
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
        <div style={{display:'flex'}}className="user" key={user.idGeneralUser}>
          <h3>{user.nameFirst + " " + user.nameLast + " id: " + user.idGeneralUser}</h3>
          <button className="deleteUser" onClick={()=>handleDelete(user.idGeneralUser)}>delete</button>
          <Routes>
            <Route index element={<UpdateUser
            data={{user}}/>}/>
          </Routes>
          <Routes>
            {user.checkedIn ===1 &&
            <Route index element={<CheckIn style={'green'}
            data={{user}}/>}/>
            }
            {user.checkedIn ===0 &&
            <Route index element={<CheckIn style={'grey'}
            data={{user}}/>}/>
            }
          </Routes>
          <Routes>
            {user.doseAmount>0 &&
             <Route index element={<Scribe style={'green'}
            data={{user}}/>}/>
            }
            {user.doseAmount<=0 &&
             <Route index element={<Scribe style={'grey'}
            data={{user}}/>}/>
            }
          </Routes>
        </div>
      ))}
      </div>
  </div>
  );
};

export default IndexUsers