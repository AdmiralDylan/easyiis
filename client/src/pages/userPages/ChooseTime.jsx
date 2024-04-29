import React, { useState } from 'react'

const ChooseTime = (props) => {
  const [user,setUser] = useState({
    checkedInTime:0
  });

  const handleChange = (e) =>{
    setUser(({'checkedInTime': e.target.value}));
  };

  function handleClick() {
    props.sendUserToParent(user);
  };

  return (
    <div>
      
      <p>hours of operation {props.sitedata.operationTimeStart}-{props.sitedata.operationTimeEnd}</p>

        <div>
            <p>Choose a Time</p>
            <input type="time" placeholder='' onChange={handleChange} name="checkedInTime" />
        </div>

        

        <button onClick={handleClick}>Save</button>

    </div>
  );
};

export default ChooseTime