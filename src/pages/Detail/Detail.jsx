import React  from 'react'
import Graphic from './Graphic'
import Chart from './Chart'
import DetailHeader from './DetailHeader'
import data from "./jsondata.json";


const Detail = () => {
  
  return (
    <div>
      <DetailHeader />
      <Graphic data={data} />
      <Chart />
    </div>
  )
}

export default Detail