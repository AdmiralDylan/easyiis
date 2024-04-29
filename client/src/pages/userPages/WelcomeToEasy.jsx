import React, { useState } from 'react'

const WelcomeToEasy = (props) => {
    
  return (
    <div>
        <h1>
            Welcome to EasyIIS
        </h1>

        <h3>{props.sitedata.siteName}</h3>

        <p>{props.sitedata.siteDescription} Start Time : {props.sitedata.operationTimeStart} Closing Time : {props.sitedata.operationTimeEnd} </p>

    </div>
  )
}

export default WelcomeToEasy