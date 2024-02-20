import React, { useContext, useState } from "react";
import { DashboardContext, tokens } from "../../theme";
import { createTheme, useTheme } from "@mui/material"
import { Box, Typography, IconButton, Button, Select, MenuItem } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useNavigate } from 'react-router-dom';
import CommentModal from "../DesktopOne/CommentModal";
import InputBase from "@mui/material/InputBase";
import SendIcon from '@mui/icons-material/Send';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { toast, ToastContainer } from "react-toastify"


// 환자 데이터 컴포넌트
const Data = () => {
    const { lists, comments, isModalOpen, closeModal, openModal, setInputValue, inputValue, handleSubmit, handleOptionChange, setPatientEffect, handleSelectChange,
        handlePhysicianChange } = useContext(DashboardContext);

    /** 다크모드 */
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [hoveredRowId, setHoveredRowId] = useState(null);
    // useNavigate 훅을 사용하여 navigate 함수를 가져오기
    const navigate = useNavigate();

    // navigate로 디테일 페이지로 이동
    const handlePageNavigation = (platinum) => {
        navigate(`/main/detail/${platinum}`, { state: { lists: lists[platinum - 1] } });
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
    // toast 컴포넌트
     const notify = () => toast("Toastify Alert!")
  
   // 버튼 클릭시 notify 함수 실행하기
   // 알람 실행시 표시될 컨테이너 넣어주기
//    return <div>
//      <button onClick={notify}></button>
//      <ToastContainer/>
//    </div>

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
                        <b
                            onClick={() => handlePageNavigation(row.id)}
                            style={{
                                textDecoration: 'none',
                                color: colors.primary[100]
                            }}
                        >
                            {row.name}
                        </b>
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
            flex: 1,
            renderCell: ({ row: { ward, patinum } }) => {
                return (
                    <Box
                        m="0 auto"
                        p="5px"
                        display="flex"
                        justifyContent="center"
                        borderRadius="4px"
                    >
                        <Select
                            onChange={(e) => {
                                handleSelectChange(patinum, e.target.value)
                                setPatientEffect(e)
                            }} value={ward}
                            border={0}
                        >
                            <MenuItem value="physician">병동1</MenuItem>
                            <MenuItem value="병동2">병동2</MenuItem>
                            <MenuItem value="병동3">병동3</MenuItem>
                            <MenuItem value="병동4">병동4</MenuItem>
                            <MenuItem value="병동5">병동5</MenuItem>
                        </Select>
                    </Box>
                )
            }
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
            flex: 0.8,
            renderCell: ({ row: { physician, patinum } }) => {
                return (
                    <box
                        m="0 auto"
                        p="5px"
                        display="flex"
                        justifyContent="center"
                        borderRadius="4px"
                    >
                        <Select
                            onChange={(e) => {
                                handlePhysicianChange(patinum, e.target.value)
                                // physicianValue(e)
                                setPatientEffect(e)
                            }}
                            value={physician}
                            border={0}
                        >
                            <MenuItem value="Dr.Smith">Dr.Smith</MenuItem>
                            <MenuItem value="Dr.Johanson">Dr.Johanson</MenuItem>
                            <MenuItem value="Dr.Thomas">Dr.Thomas</MenuItem>
                            <MenuItem value="Dr.Michael">Dr.Michael</MenuItem>
                            <MenuItem value="Dr.Andrew">Dr.Andrew</MenuItem>
                            <MenuItem value="Dr.John">Dr.John</MenuItem>
                            <MenuItem value="Dr.James">Dr.James</MenuItem>
                            <MenuItem value="Dr.William">Dr.William</MenuItem>
                            <MenuItem value="Dr.Joseph">Dr.Joseph</MenuItem>
                            <MenuItem value="Dr.David">Dr.David</MenuItem>
                            <MenuItem value="Dr.Daniel">Dr.Daniel</MenuItem>
                            <MenuItem value="Dr. Lee">Dr. Lee</MenuItem>
                            <MenuItem value="Dr. Martinez">Dr. Martinez</MenuItem>
                            <MenuItem value="Dr.Robert">Dr.Robert</MenuItem>

                        </Select>
                    </box>
                )
            }
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

                        borderRadius="4px"

                    >
                        <Select
                            value={sepsisslevel === "None" ? "" : sepsisslevel}
                            onChange={(e) => {
                                handleOptionChange(e.target.value, patinum)
                                setPatientEffect(e)
                            }}
                            border={0}
                            sx={{
                                paddingLeft: "95px",
                                paddingRight: "80px",
                                border: 'none',
                                backgroundColor: sepsisslevel === "Screening"
                                    ? colors.redAccent[500]
                                    : sepsisslevel === "Observing"
                                        ? colors.greenAccent[500]
                                        : sepsisslevel == "in action"
                                            ? colors.grey[200] // Moccasin
                                            : sepsisslevel == "Done"
                                                ? colors.blueAccent[300] // Moccasin
                                                : "none",
                                color: sepsisslevel === "in action" ? "black" : "inherit", // 배경색이 검은색일 때 텍스트 색상 변경
                            }}
                        >
                            <MenuItem value="Screening">Screening</MenuItem>
                            <MenuItem value="Observing">Observing</MenuItem>
                            <MenuItem value="None">None</MenuItem>
                            <MenuItem value="Done">Done</MenuItem>
                            <MenuItem value="in action">in action</MenuItem>
                            {/* Screening
                            Screening (빨강)
                            Observing (초록)
                            In-action (하얀색)
                            Done (파랑) // Done으로 설정 시 몇 시간 뒤에 None으로 자동 변경
                            None // 체크박스에는 없음 */}
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
            flex: 1,
            renderCell: (params) => {
                const content = params.value;
                const hasArrow = content.includes("->");

                return (
                    <div style={{
                        backgroundColor: hasArrow ? colors.greenAccent[700] : "inherit",
                        width: "60%",
                        display: hasArrow ? "flex" : "",
                        justifyContent: hasArrow ? "center" : "none",
                        height: "60%",
                        borderRadius: "12px"
                    }}>
                        <Box display={hasArrow ? "flex" : ""}
                            justifyContent={hasArrow ? "center" : "left"}
                            margin="auto">
                            {content}

                        </Box>
                    </div>
                );
            }
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

    const tableTheme = createTheme({
        components: {
            MuiDataGrid: {
                styleOverrides: {
                    root: {
                        border: '5px solid red', // 선 색상을 변경할 스타일 속성
                        backgroundColor: "black"
                    },
                },
            },
        },
    });

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
                        borderBottomRightRadius: "30px",
                        color: colors.blueAccent[300],
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color: `${colors.grey[100]} !important`,
                        minWidth: "10px"

                    },


                }}>
                <DataGrid
                    rows={listsWithId}                       /** 환자 데이터 */
                    columns={columnslist}                /** 컬럼명 */
                    components={{ Toolbar: GridToolbar }}    /** 필터 기능 (다운로드, 크기 조절) */
                    autoPageSize={10}
                    componentsProps={{ // 테마를 컴포넌트에 적용
                        MuiDataGrid: {
                            tableTheme,
                        },
                    }}
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