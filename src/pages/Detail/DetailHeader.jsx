import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom';
import { Box, IconButton, InputBase, Typography, useTheme } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SendIcon from '@mui/icons-material/Send';
import { ColorModeContext, tokens } from "../../theme";
import Modal from '../DesktopOne/Modal';

const DetailHeader = ({ title, subtitle,
    comments, setInputValue, handleSubmit, inputValue,
    isModalOpen, closeModal, openModal, num
}) => {
    const location = useLocation();
    const lists = location.state?.lists;
    console.log("환자 정보", lists);
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    // const {colors} = useContext(ColorModeContext);

    const commentColumns = [
        {
            field: "commentnum",
            headerName: "순번"
        },
        {
            field: "contents",
            headerName: "내용",
            flex: 1
        },
        {
            field: "inputdate",
            headerName: "입력시간",
            flex: 0.4
        },
        {
            field: "membername",
            headerName: "작성자"
        }
    ];
    // lists 값이 null인 경우 로딩 상태를 표시하거나 다른 방식으로 처리
    if (comments === null) {
        return <div>Loading...</div>;
    }
    // 인덱스 1부터 시작
    const commentWithId = comments.map((comments, index) => ({
        ...comments,
        id: index + 1,
    }));

    return (
        <Box width="25%">
            <Box mb="30px"
                justifyContent="space-between"
                display="flex"
                alignContent="center"

            >
                <Box display="flex" justifyContent="space-between">

                    <Typography
                        variant="h2"
                        color={colors.grey[100]}
                        fontWeight="bold"
                        sx={{ m: "0 0 5px 0" }}
                    >
                        {title}
                    </Typography>

                    <Typography variant="h5" color={colors.greenAccent[400]}
                        mt="8px" 
                        ml="18px"
                        >
                        {subtitle}
                    </Typography>
                </Box>

                <Box onClick={() => {
                    openModal(num)
                }}
                    backgroundColor={colors.greenAccent[500]}
                    p="5px 10px"
                    borderRadius="4px"
                    width="80px"
                    marginBottom="20px"
                >
                    <Box display="auto flex"
                        justifyContent="center"
                    >
                        <MailOutlineIcon />
                    </Box>
                </Box>
            </Box>
            <Modal
                isOpen={isModalOpen} closeModal={closeModal}>
                <Box m="40px">
                    {/* 환자 정보 */}
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        margin="auto"
                        width="200px"
                    >
                        <Typography variant='h4'>
                            {"순번 : " + lists.patinum}
                        </Typography>
                        <Typography variant='h4'>
                            {"이름 : " + lists.name}
                        </Typography>
                    </Box>
                    {/* 테이블 */}
                    <Box
                        m="25px 0 0 0"
                        height="45vh"
                        sx={{
                            "& .MuiDataGrid-root": {
                                border: "none",
                            },
                            "& .MuiDataGrid-cell": {
                                borderBottom: "none",
                            },
                            "& .name-column--cell": {
                                color: colors.greenAccent[300],
                            },
                            "& .MuiDataGrid-columnHeaders": {
                                backgroundColor: colors.grey[700],
                                borderBottom: "none",
                            },
                            "& .MuiDataGrid-footerContainer": {
                                borderTop: "none",
                                backgroundColor: colors.grey[700],
                            },
                        }}>
                        <DataGrid
                            rows={commentWithId}
                            columns={commentColumns}
                        />
                    </Box>
                    {/* 입력 부분 */}
                    <Box
                        m="20px"
                        display="flex"
                        backgroundColor={colors.primary[400]}
                        borderRadius="30px"
                    >
                        <InputBase sx={{ ml: 2, flex: 1 }}
                            placeholder="텍스트를 입력하시오"
                            value={inputValue}
                            onChange={(e) => { setInputValue(e.target.value) }}
                        />
                        <IconButton type="submit" onClick={handleSubmit} sx={{ p: 1 }}>
                            <SendIcon />
                        </IconButton>
                    </Box>
                </Box>
            </Modal>

        </Box >
    )
}

export default DetailHeader