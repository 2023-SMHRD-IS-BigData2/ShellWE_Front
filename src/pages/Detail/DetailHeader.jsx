import { Box, IconButton, InputBase, Typography, useTheme } from '@mui/material'
import React from 'react'
import { tokens } from "../../theme";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CommentModal from '../DesktopOne/CommentModal';
import { DataGrid } from '@mui/x-data-grid';
import SendIcon from '@mui/icons-material/Send';

const DetailHeader = ({ title, subtitle,
    comments, setInputValue, handleSubmit, inputValue,
    isModalOpen, closeModal, openModal, num
}) => {


    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

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
            <CommentModal
                isOpen={isModalOpen} closeModal={closeModal}>
                <Box m="40px">
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
            </CommentModal>

        </Box >
    )
}

export default DetailHeader