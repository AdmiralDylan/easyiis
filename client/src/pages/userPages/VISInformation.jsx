import axios from 'axios'
import React, { useEffect, useState } from 'react'

const VISInformation = (props) => {

  const[vaccineProfiles,setVaccineProfiles] = useState([])

    async function fetchVaccineProfile(){
      const res = await axios.get(`http://localhost:8081/getvis/${props.userinfo.vaccineprofile_idVaccineProfile}`)
      setVaccineProfiles(res.data[0]);
      console.log("vaccine profile ", res.data[0])
    }

    if(vaccineProfiles.length===0){
      fetchVaccineProfile()
    }

  return (
    <div>
        <h2>
            Vaccine VIS/EUA Information
        </h2>

        <div>
            {vaccineProfiles && <iframe src={vaccineProfiles.visDocument} width="100%" height="500px" />}
        </div>
    </div>
  )
}

export default VISInformation