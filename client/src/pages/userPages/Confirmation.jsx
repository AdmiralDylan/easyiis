import React from 'react'

const Confirmation = (props) => {
  console.log("confirmation " + props.userinfo)
  return (
    <div>
        <p>
            Your appointment is scheduled for {props.userinfo.checkedInTime} at {props.sitedata.siteName} at this address : {props.sitedata.siteAddress}
        </p>
    </div>
  )
}

export default Confirmation