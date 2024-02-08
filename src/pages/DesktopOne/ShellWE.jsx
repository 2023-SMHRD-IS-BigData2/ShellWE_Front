import React, { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import View from './View';
import Login from '../Login/Login'
import { PatientContext } from '../../context/PatientContext';
import Admin from '../Admin/Admin';

const ShellWE = () => {

  /**환자 데이터*/
  const [patient, setPatient] = useState([]);

  const [comment, setComment] = useState([]);

  return (
    <PatientContext.Provider value={{ setPatient, patient, comment, setComment }}>
      <div className='app'>
        <Routes>
          {/* 로그인 페이지 */}
          <Route path='/' element={<Login />} />
          {/* 로그인 된 페이지 */}
          <Route path='/main/*' element={<View />}/>
          <Route path='/admin/*' element={<Admin/>}/>
          </Routes>
      </div>
    </PatientContext.Provider>
  )
}

export default ShellWE