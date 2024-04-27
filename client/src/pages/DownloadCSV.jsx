import axios from 'axios';
import React, { useEffect, useState } from 'react'

const DownloadCSV = () => {

    let data = JSON.parse(localStorage.getItem("tech"));
    const[sites,setSites] = useState([])
    //const[result,setResult] = useState(); 


    useEffect(()=>{
        const fetchAllSites = async ()=>{
          try{
            const res = await axios.get(`http://localhost:8081/sites/${data[0].company_idCompany}`);
            setSites(res.data);
          }catch(err){
            console.log(err)
          }
        }
        fetchAllSites()
    },[]);

    const handleDownload = async (idSite) => {
        try{
            await axios.get(`http://localhost:8081/downloadCSV/${idSite}`);
            window.open(`http://localhost:8081/downloadCSV/${idSite}`);
        }catch(err){
            console.log(err)
        }
    
    }


    return (
    <div>
        <div className="Sites-DownloadCSV">
            <h1>Sites</h1>
            {sites.map(site=>(
              <div className="site" key={site.idSite}>
                <h3>{site.siteName}</h3>
                <button className="downloadCSV" onClick={()=>handleDownload(site.idSite)}>download</button>
            </div>
            ))}
        </div>
    </div>
    );
}

export default DownloadCSV