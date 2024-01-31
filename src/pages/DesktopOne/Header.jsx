import axios from 'axios'
import React, { useContext } from 'react'
import { PatientContext } from '../../context/PatientContext'

const Header = () => {
  const {patient, comment} = useContext(PatientContext);
  console.log(patient);
  return (
    <div>
      Header
      <hr />
      이름 : <br />
      {patient.name}
      <hr />
      내용 : <br />
      {comment.content}
      <hr />
    </div>
  )
}

export default Header