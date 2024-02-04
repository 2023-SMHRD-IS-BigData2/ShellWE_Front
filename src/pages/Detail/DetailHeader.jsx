import { Box, Button, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import CommentModal from '../DesktopOne/CommentModal'
import { PatientContext } from '../../context/PatientContext';

const DetailHeader = () => {

    const { patient, comment } = useContext(PatientContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    /**Modal열기 */
    const openModal = () => {
        setIsModalOpen(true);
    }
    /**Modal닫기 */
    const closeModal = () => {
        setIsModalOpen(false);
    }
    console.log("comment : " + comment);
    return (
        <div>
            <table border={1}>
                <tr>
                    <td>{patient.pNum}</td>
                    <td>{patient.name}</td>
                    <td>{patient.sex}/{patient.age}</td>
                    <td><div onClick={openModal}>코멘트</div></td>
                </tr>
            </table>
            <CommentModal
                isOpen={isModalOpen} closeModal={closeModal}>
                <Box>
                    <Typography>
                        {comment.patinum} <b>{patient.name}</b>
                        <table border={1}>
                            <tr>
                                <th>내용</th>
                                <th>날짜</th>
                            </tr>

                            <tr>
                                <td>{comment.contents}</td>
                                <td>{comment.inputdate}</td>
                            </tr>

                        </table>
                    </Typography>
                </Box>
            </CommentModal>
        </div >
    )
}

export default DetailHeader