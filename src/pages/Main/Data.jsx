import React, { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { createTheme, useTheme } from "@mui/material"
import { Box, IconButton, Select, MenuItem } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import InputBase from "@mui/material/InputBase";
import SendIcon from '@mui/icons-material/Send';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { ColorModeContext, DashboardContext, PatientContext, tokens } from "../../theme";
import Modal from "../DesktopOne/Modal";
import { toast, ToastContainer } from "react-toastify"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import axios from "axios";
import './font.css';



// 환자 데이터 컴포넌트
const Data = ({ setPatientNum }) => {
    const { lists, comments, isModalOpen, closeModal, openModal, setInputValue, inputValue,
        handleSubmit, handleOptionChange, setPatientEffect, handleSelectChange,
        handlePhysicianChange, } = useContext(DashboardContext);
    // const { colors } = useContext(ColorModeContext);
    const { setData } = useContext(PatientContext);
    /** 다크모드 */
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [hoveredRowId, setHoveredRowId] = useState(null);
    // useNavigate 훅을 사용하여 navigate 함수를 가져오기
    const navigate = useNavigate();

    // navigate로 디테일 페이지로 이동
    const handlePageNavigation = (platinum) => {

        axios
            .get(`http://localhost:8088/boot/getList?patinum=${platinum}`)
            .then((res) => {
                // nav(`/detail/${item.name}`, // 링크 맴핑
                //     { state: res.data }); // state 변수에 데이터 담기
                navigate(`/main/detail/${platinum}`, { state: { lists: lists[platinum] } });
                setData(res.data[0]);
                // setPatientNum(platinum); // 오류 뜸
            })
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
            headerName: "순번",
            headerClassName: "bold-header",
            flex: 0.5

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
                        onClick={() => handlePageNavigation(row.patinum)}
                    >
                        {row.name}
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
                    <Select
                        onChange={(e) => {
                            handleSelectChange(patinum, e.target.value)
                            setPatientEffect(e)
                        }} value={ward}
                        sx={{
                            paddingLeft: "100px",
                            paddingRight: "70px",
                            marginTop: "7px"
                        }}

                    >
                        <MenuItem value="physician">
                            <Box alignContent="left" width="80px">
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    병동1
                                    <div style={{ marginTop: "1px" }}>
                                        <ArrowDropDownIcon />
                                    </div>
                                </div>
                            </Box>
                        </MenuItem>
                        <MenuItem value="병동2">
                            <Box alignContent="left" width="80px">
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    병동2
                                    <div style={{ marginTop: "1px" }}>
                                        <ArrowDropDownIcon />
                                    </div>
                                </div>
                            </Box>
                        </MenuItem>
                        <MenuItem value="병동3">
                            <Box alignContent="left" width="80px">
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    병동3
                                    <div style={{ marginTop: "1px" }}>
                                        <ArrowDropDownIcon />
                                    </div>
                                </div>
                            </Box>
                        </MenuItem>
                        <MenuItem value="병동4">
                            <Box alignContent="left" width="80px">
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    병동4
                                    <div style={{ marginTop: "1px" }}>
                                        <ArrowDropDownIcon />
                                    </div>
                                </div>
                            </Box>
                        </MenuItem>
                        <MenuItem value="병동5">
                            <Box alignContent="left" width="80px">
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    병동5
                                    <div style={{ marginTop: "1px" }}>
                                        <ArrowDropDownIcon />
                                    </div>
                                </div>
                            </Box>
                        </MenuItem>
                    </Select>
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
            align: "center",
            flex: 1,
            renderCell: ({ row: { physician, patinum } }) => {
                return (
                    <Select
                        onChange={(e) => {
                            handlePhysicianChange(patinum, e.target.value)
                            // physicianValue(e)
                            setPatientEffect(e)
                        }}
                        sx={{
                            paddingLeft: "95px",
                            paddingRight: "80px",
                            marginTop: "7px"
                        }}
                        value={physician}
                        border={0}
                    >
                        <MenuItem value="Dr.Smith">
                            <Box alignContent="left" width="120px">
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    Dr.Smith
                                    <div style={{ marginTop: "1px" }}>
                                        <ArrowDropDownIcon />
                                    </div>
                                </div></Box>
                        </MenuItem>
                        <MenuItem value="Dr.Johanson">
                            <Box alignContent="left" width="120px">
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    Dr.Johanson
                                    <div style={{ marginTop: "1px" }}>
                                        <ArrowDropDownIcon />
                                    </div>
                                </div></Box>
                        </MenuItem>
                        <MenuItem value="Dr.Thomas">
                            <Box alignContent="left" width="120px">
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    Dr.Thomas
                                    <div style={{ marginTop: "1px" }}>
                                        <ArrowDropDownIcon />
                                    </div>
                                </div></Box>
                        </MenuItem>
                        <MenuItem value="Dr.Michael">
                            <Box alignContent="left" width="120px">
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    Dr.Michael
                                    <div style={{ marginTop: "1px" }}>
                                        <ArrowDropDownIcon />
                                    </div>
                                </div>
                            </Box>
                        </MenuItem>
                        <MenuItem value="Dr.Andrew">
                            <Box alignContent="left" width="120px">
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    Dr.Andrew
                                    <div style={{ marginTop: "1px" }}>
                                        <ArrowDropDownIcon />
                                    </div>
                                </div>
                            </Box>
                        </MenuItem>
                        <MenuItem value="Dr.John">
                            <Box alignContent="left" width="120px">
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    Dr.John
                                    <div style={{ marginTop: "1px" }}>
                                        <ArrowDropDownIcon />
                                    </div>
                                </div>
                            </Box>
                        </MenuItem>
                        <MenuItem value="Dr.James">
                            <Box alignContent="left" width="120px">
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    Dr.James
                                    <div style={{ marginTop: "1px" }}>
                                        <ArrowDropDownIcon />
                                    </div>
                                </div>
                            </Box>
                        </MenuItem>
                        <MenuItem value="Dr.William">
                            <Box alignContent="left" width="120px">
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    Dr.William
                                    <div style={{ marginTop: "1px" }}>
                                        <ArrowDropDownIcon />
                                    </div>
                                </div>
                            </Box>
                        </MenuItem>
                        <MenuItem value="Dr.Joseph">
                            <Box alignContent="left" width="120px">
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    Dr.Joseph
                                    <div style={{ marginTop: "1px" }}>
                                        <ArrowDropDownIcon />
                                    </div>
                                </div>
                            </Box>
                        </MenuItem>
                        <MenuItem value="Dr.David">
                            <Box alignContent="left" width="120px">

                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    Dr.David
                                    <div style={{ marginTop: "1px" }}>
                                        <ArrowDropDownIcon />
                                    </div>
                                </div>
                            </Box>
                        </MenuItem>
                        <MenuItem value="Dr.Daniel">
                            <Box alignContent="left" width="120px">

                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    Dr.Daniel
                                    <div style={{ marginTop: "1px" }}>
                                        <ArrowDropDownIcon />
                                    </div>
                                </div>
                            </Box>
                        </MenuItem>
                        <MenuItem value="Dr. Lee">
                            <Box alignContent="left" width="120px">

                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    Dr. Lee
                                    <div style={{ marginTop: "1px" }}>
                                        <ArrowDropDownIcon />
                                    </div>
                                </div>
                            </Box>
                        </MenuItem>
                        <MenuItem value="Dr. Martinez">
                            <Box alignContent="left" width="120px">

                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    Dr. Martinez
                                    <div style={{ marginTop: "1px" }}>
                                        <ArrowDropDownIcon />
                                    </div>
                                </div>
                            </Box>
                        </MenuItem>
                        <MenuItem value="Dr.Robert">
                            <Box alignContent="left" width="120px">

                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    Dr.Robert
                                    <div style={{ marginTop: "1px" }}>
                                        <ArrowDropDownIcon />
                                    </div>
                                </div>
                            </Box>
                        </MenuItem>
                    </Select>
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
                                    ? colors.blueAccent[700]
                                    : sepsisslevel === "Observing"
                                        ? ""
                                        : sepsisslevel == "In Action"
                                            ? ""  // Moccasin
                                            : sepsisslevel == "Done"
                                                ? "" // Moccasin
                                                : "None",
                                // color: "#ffffff", // 글자색을 검은색으로 변경
                            }}
                        >
                            <MenuItem value="Screening">Screening</MenuItem>
                            <MenuItem value="Observing">Observing</MenuItem>
                            <MenuItem value="In Action">In Action</MenuItem>
                            <MenuItem value="Done">Done</MenuItem>
                            <MenuItem value="None">None</MenuItem>
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
            flex: 0.8,
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
                        backgroundColor: hasArrow ? colors.primary[999] : "inherit",
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
                height="72vh"
                borderRadius="30px"
                boxShadow="0px 2px 4px rgba(0, 0, 0, 0.2);"
                // boxShadow="100px 100px 100px 100px rgba(0, 0, 0, 0.2);"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none",
                        color: colors.grey[100]
                    },
                    "& .name-column--cell": {
                        color: colors.greenAccent[300],
                        // boxShadow:"0px 2px 4px rgba(0, 0, 0, 0.2);"
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: colors.blueAccent[700],
                        borderBottom: "none",
                        borderTopLeftRadius: "30px",
                        borderTopRightRadius: "30px",
                        fontSize: "16px",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400],
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.blueAccent[700],
                        borderBottomLeftRadius: "30px",
                        borderBottomRightRadius: "30px",
                        // boxShadow:"5px 10px 4px rgba(0, 0, 0, 0.2);"
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color: `${colors.blueAccent} !important`,
                        minWidth: "10px",
                        fontSize: "15px"
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
            <Modal
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
                                backgroundColor: colors.primary[999],
                                borderBottom: "none",
                            },
                            "& .MuiDataGrid-footerContainer": {
                                borderTop: "none",
                                backgroundColor: colors.primary[999],
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
            </Modal>
        </Box>
    )
}

export default Data