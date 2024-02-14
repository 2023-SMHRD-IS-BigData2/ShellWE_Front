import { Box, Typography, useTheme } from '@mui/material'
import React, { useState } from 'react'
import CommentModal from '../DesktopOne/CommentModal'
// import { PatientContext } from '../../context/PatientContext';
import { tokens } from "../../theme";

const DetailHeader = ({title,subtitle}) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    /**Modal열기 */
    const openModal = () => {
        setIsModalOpen(true);
    }
    /**Modal닫기 */
    const closeModal = () => {
        setIsModalOpen(false);
    }
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    // console.log("comment : " + comment);
    return (
        <Box>
            <Box mb="30px">
                <Typography
                    variant="h2"
                    color={colors.grey[100]}
                    fontWeight="bold"
                    sx={{ m: "0 0 5px 0" }}
                >
                    {title}
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[400]}>
                    {subtitle}
                </Typography>
            </Box>
            <CommentModal
                isOpen={isModalOpen} closeModal={closeModal}>
                <Box>
                    <Typography>
                        {/* {comment.patinum} <b>{patient.name}</b> */}
                        <table border={1}>
                            <tr>
                                <th>내용</th>
                                <th>날짜</th>
                            </tr>

                            <tr>
                                {/* <td>{comment.contents}</td>
                                <td>{comment.inputdate}</td> */}
                            </tr>

                        </table>
                    </Typography>
                </Box>
            </CommentModal>
        </Box >
    )
}

export default DetailHeader