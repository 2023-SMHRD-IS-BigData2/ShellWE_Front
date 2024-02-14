import React, { useEffect, useState } from 'react';
import { Box } from "@mui/material";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import StatBox from './StatBox';
import Data from './Data';
import axios from 'axios';

// 대쉬보드
const App = () => {
    /** 환자 리스트 */
    const [lists, setList] = useState(null);
    const [Allpatient, setAllpatient] = useState(null)
    const [todayScreening, settodayScreening] = useState(null)
    const [Screening, setScreening] = useState(null)
    const [percent, setPercent] = useState(null)


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8088/boot/getPatient");
                setList(response.data.patientList);
                setAllpatient(response.data.Allpatient)
                settodayScreening(response.data.todayScreening)
                setScreening(response.data.Screening)
                // setPercent(Screening/Allpatient*100)
                console.log("lists", response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);
    useEffect(() => {
        setPercent(Screening / Allpatient * 100)
    }, [Allpatient, Screening])

    /** 다크모드 */
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
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
                        progress={Screening / Allpatient}           // 그래프
                        increase={percent + "%"}           // 퍼센트
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
        </Box>
    );
};


export default App;