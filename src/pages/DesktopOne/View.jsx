import React, { useContext, useEffect } from 'react'
import Detail from '../Detail/Detail'
import Main from '../Main/Main'
import Admin from '../Admin/Admin'
import { Route, Routes } from "react-router-dom";
import axios from 'axios'
import { PatientContext } from '../../context/PatientContext'

const View = () => {
 const {setPatient, setComment} = useContext(PatientContext);
  useEffect(()=>{
    axios.get('http://localhost:3000/PatientList.json')
    .then(res => setPatient(res.data.List[0]))
  },[])
  useEffect(()=>{
    axios.get('http://localhost:3000/Comment.json')
    .then(res => setComment(res.data.List[0]))
  },[])
    
  return (
    <div>
      <Routes>
        <Route path='/detail' element={ <Detail />} />
        <Route path='/main' element={ <Main />} />
        <Route path='/admin' element={ <Admin />} />
      </Routes>
      
      
      
    </div>
  )
}

export default View