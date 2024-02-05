import React  from 'react'
import PatientList from '../Main/PatientList'
import Column from './Column'
import Graphic from './Graphic'
import Chart from './Chart'
import DetailHeader from './DetailHeader'
import data from "./jsondata.json";


const Detail = () => {
  
  return (
    <div>
      <DetailHeader />
      <PatientList />
      <Column />
      <Graphic data={data} />
      <Chart />
    </div>
  )
}

export default Detail