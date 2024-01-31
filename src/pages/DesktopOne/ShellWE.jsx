import React, { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import View from './View';
import Login from '../Login/Login'
import { PatientContext } from '../../context/PatientContext';

const ShellWE = () => {

  /**환자 데이터*/
  const [patient, setPatient] = useState([]);

  const [comment, setComment] = useState([]);

  return (
      <PatientContext.Provider value={{setPatient, patient, comment, setComment}}>
    <div>

        <h1>ShellWE</h1>
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/*' element={<View patient={patient} setPatient={setPatient}/>} />
        </Routes>
            

    </div>
      </PatientContext.Provider>
  )
}

export default ShellWE