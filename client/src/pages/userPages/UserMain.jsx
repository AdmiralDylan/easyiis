import React, { useEffect, useState } from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import WelcomeToEasy from './WelcomeToEasy'
import FillInfo from './FillInfo'
import ChooseTime from './ChooseTime'
import ChooseVaccine from './ChooseVaccine'
import VISInformation from './VISInformation'
import Confirm from './Confirm'
import Confirmation from './Confirmation'
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
        checkedInTime:0,
        vaccineprofile_idVaccineProfile:0
    });

    //loads user with prev, and current from child
  function handleUserFromChild(e) {
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
  } else if(count>6){
    setCount(6)
  }


const handleSave = async e =>{

    try{
        await axios.post(`http://localhost:8081/addUserPost/${params.id}`,user);
    }catch(err){
        console.log(err)
    }
}

//could return the whole render but its the same logic and I could keep Title vaccine site static.
  return (
    <div>
        {(count > 0 && site) &&<h1>{site && site[0].siteName}</h1>}

        {(count === 0 && site) &&
            <Routes>
                <Route index element={<WelcomeToEasy sitedata={site[0]}/>}/>
            </Routes>
        }
        {(count === 1 && site) &&
            <Routes>
                <Route index element={<ChooseVaccine sendUserToParent={handleUserFromChild} sitedata={site[0]}/>}/>
            </Routes>
        }
        {(count === 2 && site) &&
            <Routes>
                <Route index element={<ChooseTime sendUserToParent={handleUserFromChild} sitedata={site[0]}/>}/>
            </Routes>
        }
        {(count === 3 && site) &&
            <Routes>
                <Route index element={<FillInfo sendUserToParent={handleUserFromChild} sitedata={site[0]}/>}/>
            </Routes>
        }
        {(count === 4 && site && user.vaccineprofile_idVaccineProfile>0) &&
            <Routes>
                <Route index element={<VISInformation sendUserToParent={handleUserFromChild} sitedata={site[0]} userinfo={user}/>}/>
            </Routes>
        }
        {(count === 5 && site) &&
            <Routes>
                <Route index element={<Confirm sendUserToParent={handleUserFromChild} sitedata={site[0]}/>}/>
            </Routes>
        }
        {(count === 6 && site && user) &&
            <Routes>
                <Route index element={<Confirmation sitedata={site[0]} userinfo={user}/>}/>
            </Routes>
        }

        
        
        <button onClick={()=>setCount(count-1)}>Back</button>
        {count<6 &&<button onClick={()=>setCount(count+1)}>Next</button>}
        {count>=6 && <button onClick={handleSave}>Save</button>}
    </div>
  );
}

export default UserMain

