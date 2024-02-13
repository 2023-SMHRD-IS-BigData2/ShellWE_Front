import React, { useEffect, useState } from 'react';
import { Box, Typography } from "@mui/material";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import StatBox from './StatBox';
import Data from './Data';
import { Button } from '@mui/base';
import CommentModal from '../DesktopOne/CommentModal';
import columns from './commentColumns.json';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

// 대쉬보드
const App = () => {
    /** 환자 리스트 */
    const [lists, setList] = useState(null);
    const [Allpatient, setAllpatient] = useState(null)
    const [todayScreening, settodayScreening] = useState(null)
    const [Screening, setScreening] = useState(null)


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8088/boot/getPatient");
                setList(response.data.patientList);
                setAllpatient(response.data.Allpatient)
                settodayScreening(response.data.todayScreening)
                setScreening(response.data.Screening)
                console.log("lists", response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    const [comments, setComment] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8088/boot/getComment?patinum=3");
                setComment(response.data.comments);
                console.log("comment", response.data.comments);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    const [isModalOpen, setIsModalOpen] = useState(false);
    /**Modal열기 */
    const openModal = () => {
        setIsModalOpen(true);
    }
    /**Modal닫기 */
    const closeModal = () => {
        setIsModalOpen(false);
    }

    /** 다크모드 */
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


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
        <Box m="20px">
            <Box
                display="grid"
                gridTemplateColumns="repeat(12, 1fr)"
                gridAutoRows="140px"
                gap="20px"
            >
                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <StatBox
                        title={Allpatient}         // 값
                        subtitle="전체환자"        // 제목
                        progress="0.14"           // 그래프
                        increase="+14%"           // 퍼센트
                        icon={                    //  아이콘
                            <PeopleOutlinedIcon
                                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                            />
                        }
                    />
                </Box>
                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <StatBox
                        title={Screening}                // 값
                        subtitle="Screening 환자"        // 제목
                        progress="0.14"           // 그래프
                        increase="+14%"           // 퍼센트
                        icon={                    //  아이콘
                            <PeopleOutlinedIcon
                                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                            />
                        }
                    />
                </Box>
                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <StatBox
                        title={todayScreening}                // 값
                        subtitle="오늘발생 환자"        // 제목
                        progress="0.34"           // 그래프
                        increase="+14%"           // 퍼센트
                        icon={                    //  아이콘
                            <PeopleOutlinedIcon
                                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                            />
                        }
                    />
                </Box>
            </Box>
            <Box
                m="25px 0 0 0"
                height="70vh"
                width="160vh"
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
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400],
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.blueAccent[700],
                    },
                    "& .MuiCheckbox-root": {
                        color: `${colors.greenAccent[200]} !important`,
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color: `${colors.grey[100]} !important`,
                    },
                }}
            >
                <Data lists={lists} />
            </Box>
            <Box>
                <Button onClick={openModal}>코멘트</Button>
            </Box>
            <CommentModal
                isOpen={isModalOpen} closeModal={closeModal}>
                <Box m="40px">
                    <Box
                        m="25px 0 0 0"
                        height="70vh"
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
                            // "& .MuiDataGrid-virtualScroller": {
                            //     backgroundColor: colors.primary[400],
                            // },
                            "& .MuiDataGrid-footerContainer": {
                                borderTop: "none",
                                backgroundColor: colors.grey[700],
                            },
                            // "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                            //     color: `${colors.grey[100]} !important`,
                            // },
                        }}>
                        <DataGrid
                            rows={commentWithId}
                            columns={columns.columns}
                        // components={{ Toolbar: GridToolbar }}    
                        />
                    </Box>
                </Box>
            </CommentModal >
        </Box >
    );
};


export default App;