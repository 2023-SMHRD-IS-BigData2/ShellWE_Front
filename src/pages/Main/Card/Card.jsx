import React, { useContext, useEffect } from "react";
import { Box, useTheme } from "@mui/material";
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import { ColorModeContext, DashboardContext, tokens } from "../../../theme";
import ScrnPatient from './ScrnPatient';
import AllPatient from "./AllPatient";
import Logined from './Logined';
import Smart from './Smart';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const List = ({ id }) => {

    const { Allpatient, Screening, percent, smart } = useContext(DashboardContext);
    /** 다크모드 */
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    // const {colors} = useContext(ColorModeContext);


    return (
        <>
            <div>
                <Box
                    display="grid"
                    gridTemplateColumns="repeat(12, 1fr)"
                    gridAutoRows="140px"
                    gap="20px"

                >
                    <Box
                        gridColumn="span 3"
                        backgroundColor={colors.primary[999]}
                        boxShadow="0px 2px 4px rgba(0, 0, 0, 0.2);"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        borderRadius="30px"
                    >
                        <Logined
                            title={id}         // 값
                            icon={                    //  아이콘
                                <PersonOutlineOutlinedIcon
                                    sx={{ color: colors.grey[100], fontSize: "26px" }}
                                />
                            }
                        />
                    </Box>
                    <Box
                        gridColumn="span 3"
                        backgroundColor={colors.primary[400]}
                        boxShadow="0px 2px 4px rgba(0, 0, 0, 0.2);"
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
                        // boxShadow="-2px 0px 8px rgba(0.2, 0.3, 0.5, 0.2);"
                        borderColor="grey"
                        boxShadow="0px 2px 4px rgba(0, 0, 0, 0.2);"
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
                        boxShadow="0px 2px 4px rgba(0, 0, 0, 0.2);"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        borderRadius="30px"
                    >
                        <Smart
                            title={smart}                // 값
                            subtitle="SMART"        // 제목
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
