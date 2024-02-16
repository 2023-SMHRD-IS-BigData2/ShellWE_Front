import React, { useContext, useState } from "react";
import { DashboardContext, tokens } from "../../theme";
import { useTheme } from "@mui/material"
import { Box, Typography, IconButton, Button, Select, MenuItem } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import CommentModal from "../DesktopOne/CommentModal";
import InputBase from "@mui/material/InputBase";
import SendIcon from '@mui/icons-material/Send';
import MailOutlineIcon from '@mui/icons-material/MailOutline';


// 환자 데이터 컴포넌트
const Data = () => {
    const { lists, comments, isModalOpen, closeModal, openModal, setInputValue, inputValue, handleSubmit, handleOptionChange, setSepsisState } = useContext(DashboardContext);
    const [selectedSepsissLevel, setSelectedSepsissLevel] = useState("None");

    /** 다크모드 */
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [hoveredRowId, setHoveredRowId] = useState(null);

    // 새로운 상태 추가: 모달이 열렸는지 나타내는 상태
    const [isStatusModalOpen, setStatusModalOpen] = useState(false);

    // handleModalOpen 함수 정의
    const handleModalOpen = () => {
        setStatusModalOpen(true); // 모달을 열기 위해 상태 업데이트
    };

    // handleModalClose 함수 정의
    const handleModalClose = () => {
        setStatusModalOpen(false); // 모달을 닫기 위해 상태 업데이트
    };



    // lists 값이 null인 경우 로딩 상태를 표시하거나 다른 방식으로 처리
    if (lists === null) {
        return <div>Loading...</div>;
    }
    // 인덱스 1부터 시작
    const listsWithId = lists.map((list, index) => ({
        ...list,
        id: index + 1,
    }));

    // 환자 테이블 컬럼
    const columnslist = [
        {
            field: "patinum",
            headerAlign: "center",
            align: "center",
            headerName: "순번"
        },
        {
            field: "name",
            headerName: "환자명",
            flex: 1,
            headerAlign: "center",
            align: "center",
            renderCell: ({ row }) => {
                return (
                    <Box
                        onMouseEnter={() => setHoveredRowId(row.id)}
                        onMouseLeave={() => setHoveredRowId(null)}
                        width="100%"
                        m="0 auto"
                        p="5px"
                        display="flex"
                        justifyContent="center"
                        backgroundColor={
                            hoveredRowId === row.id
                                ? colors.blueAccent[400]
                                : colors.transparent
                        }
                        borderRadius="4px"
                    >
                        <Link
                            key={row.id}
                            to={`/main/detail/${row.patinum}`}
                            style={{
                                textDecoration: 'none',
                                color: colors.primary[100]
                            }}
                        >
                            {row.name}
                        </Link>
                    </Box>
                )
            },
        },
        {
            field: "age",
            headerName: "나이",
            cellClassName: "age-column--cell",
            type: "number",
            headerAlign: "center",
            align: "center",
            flex: 1
        },
        {
            field: "bloodtype",
            headerName: "혈액형",
            headerAlign: "center",
            align: "center",
            flex: 1
        },
        {
            field: "gender",
            headerName: "성별",
            headerAlign: "center",
            align: "center",
            flex: 1
        },
        {
            field: "ward",
            headerName: "병동",
            headerAlign: "center",
            align: "center",
            flex: 1
        },
        {
            field: "hpdate",
            headerName: "입원일자",
            headerAlign: "center",
            align: "center",
            flex: 1.6
        },
        {
            field: "physician",
            headerName: "담당 의료진",
            headerAlign: "left",
            align: "left",
            flex: 0.8
        },
        {
            field: "sepsisscore",
            headerName: "SMART",
            flex: 1,
            headerAlign: "center",
            align: "center"
        },
        {
            field: "sepsisslevel",
            headerName: "패혈증 상태",
            flex: 1,
            headerAlign: "center",
            align: "center",
            renderCell: ({ row: { sepsisslevel, patinum } }) => {
                return (
                    <Box
                        m="0 auto"
                        p="5px"
                        display="flex"
                        justifyContent="center"
                        // backgroundColor={
                        // sepsisslevel === "Screening"
                        //     ? colors.redAccent[600]
                        //     : sepsisslevel === "Observing"
                        //         ? colors.greenAccent[700]
                        //         : "none"
                        // }
                        borderRadius="4px"

                    >
                        <Select
                            value={sepsisslevel}
                            onChange={(e) => {handleOptionChange(e.target.value, patinum)
                                setSepsisState(e)}}
                            border={0}
                            sx={{
                                paddingLeft: "70px",
                                paddingRight: "70px",
                                border: 'none',
                                backgroundColor: sepsisslevel === "Screening"
                                    ? colors.redAccent[600]
                                    : sepsisslevel === "Observing"
                                        ? colors.greenAccent[700]
                                        : "none",
                            }}
                        >
                            <MenuItem value="Screening">Screening</MenuItem>
                            <MenuItem value="Observing">Observing</MenuItem>
                            <MenuItem value="None">None</MenuItem>
                        </Select>
                    </Box>
                );
            },
        },
        {
            field: "comment",
            headerName: "코멘트",
            flex: 0.5,
            headerAlign: "center",
            align: "center",
            renderCell: (e) => {
                return (
                    <Box onClick={() => { openModal(e.row.id) }}>
                        <MailOutlineIcon />
                    </Box>
                );
            }
        }
    ];
    const commentColumns = [
        {
            field: "id",
            headerName: "번호"
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
    ]
    // patiIndex 정의
    //const [patiIndex, setPatiIndex] = useState(1);


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
        <Box
            m="20px"
            borderRadius="30px">
            <Box
                m="25px 0 0 0"
                height="70vh"
                borderRadius="30px"
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
                        backgroundColor: colors.blueAccent[700],
                        borderBottom: "none",
                        borderTopLeftRadius: "30px",
                        borderTopRightRadius: "30px"
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400],
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.blueAccent[700],
                        borderBottomLeftRadius: "30px",
                        borderBottomRightRadius: "30px"
                    },
                    "& .MuiCheckbox-root": {
                        color: `${colors.greenAccent[200]} !important`,
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color: `${colors.grey[100]} !important`,
                    },
                }}>
                <DataGrid
                    rows={listsWithId}                       /** 환자 데이터 */
                    columns={columnslist}                /** 컬럼명 */
                    components={{ Toolbar: GridToolbar }}    /** 필터 기능 (다운로드, 크기 조절) */
                    autoPageSize={10}
                />
            </Box>

            {/** 코멘트 모달 */}
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
                            autoPageSize={0}
                            pageSizeOptions={[0]}
                            pagination={false}
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
        </Box>
    )
}

export default Data