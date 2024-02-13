import { Box, Typography } from "@mui/material";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material"

const Data = () => {

    /** 다크모드 */
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        {
            field: "patinum",
            headerName: "순번"
        },
        {
            field: "name",
            headerName: "환자명",
            flex: 1
        },
        {
            field: "age",
            headerName: "나이",
            "cellClassName": "age-column--cell",
            "type": "number",
            "headerAlign": "left",
            "align": "left",
            flex: 1
        },
        {
            field: "bloodtype",
            headerName: "혈액형",
            flex: 1
        },
        {
            field: "gender",
            headerName: "성별",
            flex: 1
        },
        {
            field: "ward",
            headerName: "병동",
            flex: 1
        },
        {
            field: "hpdate",
            headerName: "입원일자",
            flex: 1
        },
        {
            field: "physician",
            headerName: "담당 의료진",
            flex: 1
        },
        {
            field: "sepsisscore",
            headerName: "SMART",
            flex: 1
        },
        {
            field: "sepsisslevel",
            headerName: "패혈증 상태",
            flex: 1
        }
        // {
        //     field: "accessLevel",
        //     headerName: "Access Level",
        //     flex: 1,
        //     renderCell: ({ row: { access } }) => {
        //         return (
        //             <Box
        //                 width="60%"
        //                 m="0 auto"
        //                 p="5px"
        //                 display="flex"
        //                 justifyContent="center"
        //                 backgroundColor={
        //                     access === "admin"
        //                         ? colors.redAccent[600]
        //                         : access === "manager"
        //                             ? colors.greenAccent[700]
        //                             : colors.greenAccent[700]
        //                 }
        //                 borderRadius="4px"
        //             >
        //                 {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
        //                 {access === "manager" && <SecurityOutlinedIcon />}
        //                 {access === "user" && <LockOpenOutlinedIcon />}
        //                 <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
        //                     {access}
        //                 </Typography>
        //             </Box>
        //         );
        //     },
        // },
    ];
    return (
        <></>
    )
}
export default Data;