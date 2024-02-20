import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { DashboardContext, tokens } from "../../../theme";
import { useTheme } from "@mui/material";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import StatBox from './StatBox';
// import ProgressCircle from "../ProgressCircle";
import AllPatient from "./AllPatient";
import TodayPatient from "./TodayPatient";

const List = () => {

    const { Allpatient, Screening, todayScreening, percent } = useContext(DashboardContext);
    /** 다크모드 */
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <>
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
                    <AllPatient
                        title={Allpatient}         // 값
                        subtitle="전체환자"        // 제목
                        // progress="0.14"           // 그래프
                        // increase="+14%"           // 퍼센트
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
                    <TodayPatient
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
        </>
    );
};

const ContactsWrapper = () => (
    <Box>
        <List />
    </Box>
);

export default List;
