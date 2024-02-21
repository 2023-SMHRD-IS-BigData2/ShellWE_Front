import React, { useContext, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { DashboardContext, tokens } from "../../theme";
import { useTheme } from "@mui/material";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import StatBox from './StatBox';
import ProgressCircle from "./ProgressCircle";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";






const List = () => {

    const { Allpatient, Screening, todayScreening, percent } = useContext(DashboardContext);
    /** 다크모드 */
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


    const notify = () => {
        if (1 > 0) {
            toast(`스크리닝 환자가 ${todayScreening}명 추가 되었습니다`,
                { autoClose: 3000 } //3초
            );
        }
    }

    // toast 컴포넌트
    useEffect(() => {
        const interval = setInterval(() => {
            notify();

        }, 
        3600000
        ); // 한 시간(밀리초 단위)
        // 컴포넌트가 언마운트 될 때 타이머를 정리합니다.
        return () => clearInterval(interval);
    }, []); // []를 전달하여 한 번만 실행되도록 설정합니다.

    return (
        <>
            <div>
            <ToastContainer
                    position="top-right"
                    autoClose={30000}
                    hideProgressBar={false}
                    newestOnTop={true}
                    closeOnClick={true}
                    pauseOnHover={true}
                    draggable={true}
                    progressStyle={{ background: "#3e4396" }}
                    bodyStyle={{
                        fontFamily: "Arial, sans-serif",
                        fontSize: "14px",
                        fontWeight: "bold",
                        color: "#000000",
                        backgroundColor: "#ffffff",
                    }}
                />

                <Box
                    display="grid"
                    gridTemplateColumns="repeat(12, 1fr)"
                    gridAutoRows="140px"
                    gap="20px"
                >
                    <Box
                        gridColumn="span 4"
                        backgroundColor={colors.primary[400]}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        borderRadius="30px"
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
                        gridColumn="span 4"
                        backgroundColor={colors.primary[400]}
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        borderRadius="30px"
                    >
                        <StatBox
                            title={Screening}         // 값
                            subtitle="Screening 환자"        // 제목
                            progress={Screening / Allpatient}          // 그래프
                            increase={percent + "%"}           // 퍼센트
                            icon={                    //  아이콘
                                <PeopleOutlinedIcon
                                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                                />
                            }
                        />

                    </Box>


                    <Box
                        gridColumn="span 4"
                        backgroundColor={colors.primary[400]}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        borderRadius="30px"
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
            </div>
        </>
    );
};

const ContactsWrapper = () => (
    <Box>
        <List />
    </Box>
);

export default List;
