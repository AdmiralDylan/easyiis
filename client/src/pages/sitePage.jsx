import React from 'react'
import AddUser from '../components/userComponents/AddUser';
import IndexUsers from '../components/userComponents/IndexUsers';
import { Route, Routes, useNavigate, useParams } from 'react-router-dom';




const SitePage = () => {

  const params = useParams();
  const siteId = params.id;

  console.log("Site id from params from sitePage = ",siteId);

  return (
    <div>
      <h1>Site Name</h1>
      <p>Site date</p>
      
      <div>
        <p>search users</p>
        
      </div>

      <div>
        <Routes>
          <Route index element={<AddUser value={siteId}/>}/>
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