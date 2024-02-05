import React from 'react'
import PatientList from './PatientList'
import Graphic from '../Detail/Graphic'
import Comment from './Comment'

const Main = () => {
    return (
        <div>
            <PatientList />
            <Graphic />
            <Comment />
        </div>
    )
}

export default Main