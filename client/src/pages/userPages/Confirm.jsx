import React from 'react'
import SignatureBox from '../../components/features/SignatureBox'
import { Route, Routes } from 'react-router-dom'

const Confirm = () => {
  return (
    <div>
        <p>Sign below to confirm that you have read the previous VIS/EUA document</p>

        <Routes>
          <Route index element={<SignatureBox/>}/>
        </Routes>
    </div>
  )
}

export default Confirm