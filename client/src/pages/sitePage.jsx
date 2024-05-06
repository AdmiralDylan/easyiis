import React, { useState } from 'react'
import AddUser from '../components/userComponents/AddUser';
import IndexUsers from '../components/userComponents/IndexUsers';
import { Link, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import NavBar from '../components/features/NavBar';
import axios from 'axios';




const SitePage = () => {
  //load logged in tech
  let data = JSON.parse(localStorage.getItem("tech"));


  let params = useParams();
  console.log("Site id from params from sitePage params = ",params.id);

  //get the site from site id from local storage logged in tech
  const[site,setSite]=useState([]);
  async function getSite(){
    try{
      const res = await axios.get(`http://localhost:8081/getSite/${params.id}`)
      setSite(res.data[0]);
    }catch(err){
      console.log(err)
    }
  }

  //admin or tech context
  let isAdmin = data[0].isAdmin;
  let isAllowed = false;

  if(isAdmin === 1){
    isAllowed = true;
  }

  if(site.length===0){
    getSite()
  }
  

  return (
    <div>
      <Routes>
          <Route index element={<NavBar/>}/>
      </Routes>

      <h1>Site Name</h1>
      {site &&<h2>{site.siteName}</h2>}
      <p>Site date</p>
      {site&&<p>{site.operationDate}</p>}
      <Link to ='/sites'>back to sites</Link>

      {isAllowed && <Link to="/landing">back to landing</Link>}


      <div>
        <p>search users</p>
        
      </div>

      <div>
        <Routes>
          <Route index element={<AddUser data={params.id}/>}/>
        </Routes>
      </div>


        <div>
            <Routes>
                <Route index element= {<IndexUsers/>} />
            </Routes>
        </div>

    </div>
    )
}
  

export default SitePage