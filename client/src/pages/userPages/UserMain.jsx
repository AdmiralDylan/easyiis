import React, { useEffect, useState } from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import WelcomeToEasy from './WelcomeToEasy'
import FillInfo from './FillInfo'
import axios from 'axios'

//main user page which other user component pages are loaded onto
//use state to from child to parent to aggrigate data for user table
//switch cases using a incrementing page value to render each page
//pages loaded based on siteid
//
const UserMain = () => {
    const params = useParams();

    let [user,setUser] = useState({
        dob:null,
        gender:"",
        address:"",
        nameFirst:"",
        nameLast:"",
        signature:new Blob(),
        email:"",
        vaccineSite_idVaccineSite:params.id,
        administrationSite:"",
        doseAmount:0,
        checkedIn:0,
        checkedInTime:0
    });

    //loads user with prev, and current from child
  function handleUserFromChild(e) {
    console.log("e from handle child",e)
    setUser({
        ...user,
        ...e
    });
  }
  //Load Site Info

  const[site,setSite] = useState(null);

  useEffect(()=>{
    axios.get(`http://localhost:8081/addUserPost/${params.id}`).then((res)=>{
        setSite(res.data);
    });
  },[]);
  

  //Handle save
  //uses a counter to render pages 
  //(thought this would be a cheeky way of sending a user to db when done without having to think about page reloads)
  //downside is each user page component stores a peice of a user which is kind of redundant 
  let [count,setCount]=useState(0);

  if(count<0){
    setCount(0);
  } else if(count>7){
    setCount(7)
  }


const handeSave = async e =>{
    try{
        await axios.post(`http://localhost:8081/addUserPost/${params.id}`,user);
    }catch(err){
        console.log(err)
    }
}

//could return the whole render but its the same logic and I could keep Title vaccine site static.
  return (
    <div>
        <h1>Data from Child: {JSON.stringify(user)}</h1>
        <h2>Page Counter : {count}</h2>

        <h1>Site Info : {site && site[0].siteName}</h1>

        {count === 0 &&
            <Routes>
                <Route index element={<WelcomeToEasy
                sendUserToParent={handleUserFromChild}/>}/>
            </Routes>
        }
        {count === 1 &&
            <Routes>
                <Route index element={<FillInfo/>}/>
            </Routes>
        }
        {count === 2 &&
            <Routes>
                <Route index element={<FillInfo/>}/>
            </Routes>
        }
        {count === 3 &&
            <Routes>
                <Route index element={<FillInfo/>}/>
            </Routes>
        }
        {count === 4 &&
            <Routes>
                <Route index element={<FillInfo/>}/>
            </Routes>
        }
        {count === 5 &&
            <Routes>
                <Route index element={<FillInfo/>}/>
            </Routes>
        }
        {count === 6 &&
            <Routes>
                <Route index element={<FillInfo/>}/>
            </Routes>
        }

        
        
        <button onClick={()=>setCount(count-1)}>back</button>
        {count<7 &&<button onClick={()=>setCount(count+1)}>Next</button>}
        {count>=7 && <button onClick={handeSave}>Save</button>}
    </div>
  );
}

export default UserMain

