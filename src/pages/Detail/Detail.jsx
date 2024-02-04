import React from 'react'
import PatientList from '../Main/PatientList'
import Column from './Column'
import Graphic from './Graphic'
import Chart from './Chart'
import DetailHeader from './DetailHeader'


const Detail = () => {
  return (
    <div>
        <DetailHeader/>
        <PatientList/>
        <Column/>
        <Graphic/>
        <Chart/>
    </div>
  )
}

export default Detail