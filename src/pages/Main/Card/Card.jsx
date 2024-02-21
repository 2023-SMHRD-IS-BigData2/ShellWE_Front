import React, { useContext, useEffect } from "react";
import { Box, useTheme } from "@mui/material";
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import { ColorModeContext, DashboardContext, tokens } from "../../../theme";
import ScrnPatient from './ScrnPatient';
import AllPatient from "./AllPatient";
import TodayPatient from "./TodayPatient";
import Logined from './Logined'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const List = () => {

    const { Allpatient, Screening, todayScreening, percent } = useContext(DashboardContext);
    /** 다크모드 */
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    // const {colors} = useContext(ColorModeContext);

    const notify = () => {
        if (todayScreening > 0) {
            toast(`스크리닝 환자가 ${todayScreening}명 추가 되었습니다`,
                { autoClose: 3000 }
            );
        }
    }

    // toast 컴포넌트
    useEffect(() => {
        const interval = setInterval(() => {
            notify();

        },
            10000
        ); // 한 시간(밀리초 단위)
        // 컴포넌트가 언마운트 될 때 타이머를 정리합니다.
        return () => clearInterval(interval);
    }, []); // []를 전달하여 한 번만 실행되도록 설정합니다.

    return (
        <>
            <div>
                <ToastContainer />

                <Box
                    display="grid"
                    gridTemplateColumns="repeat(12, 1fr)"
                    gridAutoRows="140px"
                    gap="20px"

                >
                    <Box
                        gridColumn="span 3"
                        backgroundColor={colors.primary[999]}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        borderRadius="30px"
                    >
                        <Logined
                            title={"사용자"}         // 값
                            icon={                    //  아이콘
                                <PersonOutlineOutlinedIcon
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
                        borderRadius="30px"
                    >
                        <AllPatient
                            title={Allpatient}         // 값
                            subtitle="ALL"        // 제목
                            icon={                    //  아이콘
                                <GroupsOutlinedIcon
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
                        justifyContent="space-between"
                        borderRadius="30px"
                    >
                        <ScrnPatient
                            title={Screening}         // 값
                            subtitle="SCREENING"        // 제목
                            progress={Screening / Allpatient}          // 그래프
                            increase={percent + "%"}           // 퍼센트
                        />

                    </Box>


                    <Box
                        gridColumn="span 3"
                        backgroundColor={colors.primary[400]}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        borderRadius="30px"
                    >
                        <TodayPatient
                            title={todayScreening}                // 값
                            subtitle="NEW"        // 제목
                            icon={
                                <NewReleasesIcon
                                    sx={{ color: colors.redAccent[500], fontSize: "26px" }}
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
