import React from 'react'
import AddUser from '../components/userComponents/AddUser';
import IndexUsers from '../components/userComponents/IndexUsers';
import { Link, Route, Routes, useNavigate, useParams } from 'react-router-dom';




const SitePage = () => {


  let params = useParams();
  console.log("Site id from params from sitePage params = ",params.id);

  return (
    <div>
      <h1>Site Name</h1>
      <p>Site date</p>
      <Link to ='/sites'>back to sites</Link>

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