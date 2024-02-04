import React, { useContext } from 'react'
import { PatientContext } from '../../context/PatientContext'

const Header = () => {

    const {patient} = useContext(PatientContext);
    return (
        <div>
            <table>
                <tr>
                    <td>{patient.pNum}</td>
                    <td>{patient.name}</td>
                    <td>{patient.sex}{patient.age}</td>
                    <td>코멘트</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
        </div>
    )
}

export default Header