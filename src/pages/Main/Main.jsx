import React from 'react'
import PatientList from './PatientList'
import Graphic from '../Detail/Graphic'
import Comment from './Comment'
import Column from '../Detail/Column'

const Main = () => {
    return (
        <div>
            <PatientList />
            <Graphic />
            <Comment />
            <Column />
        </div>
    )
}

export default Main