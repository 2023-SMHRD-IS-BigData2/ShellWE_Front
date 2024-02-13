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

        {/* 로그인, 의료진, 관리자 페이지 */}
        <Routes>
          <Route path='/' element={<Login />} />            {/* 로그인 전 */}
          <Route path='/main/*' element={<View />} />       {/* 사용자 */}
          <Route path='/admin/*' element={<Admin />} />     {/* 관리자 */}
        </Routes>

      </div>
    </PatientContext.Provider>
  )
}

export default ShellWE