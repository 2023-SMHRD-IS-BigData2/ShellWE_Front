
// import { Box, Typography } from "@mui/material";
// import { useTheme } from "@mui/material"
// const theme = useTheme();
// const colors = tokens(theme.palette.mode);

const columnslistTest = [
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
        cellClassName: "age-column--cell",
        type: "number",
        headerAlign: "left",
        align: "left",
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
        flex: 1,
        // renderCell: ({ row: { sepsisslevel } }) => {
        //     return (
        //         <Box
        //             width="100%"
        //             m="0 auto"
        //             p="5px"
        //             display="flex"
        //             justifyContent="center"
        //             backgroundColor={
        //                 sepsisslevel === "Screening"
        //                     ? colors.redAccent[600]
        //                     : sepsisslevel === "Observing"
        //                         ? colors.greenAccent[700]
        //                         : "none"
        //             }
        //             borderRadius="4px"
        //         // onRowClick={}
        //         >
        //             <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
        //                 {sepsisslevel === "None" ? "" : sepsisslevel}
        //             </Typography>
        //         </Box>
        //     );
        // },
    },
    {
        field: "comment",
        headerName: "코멘트",
        flex: 1,
        // renderCell: () => {
        //     return (
        //         <Box onRowClick>버튼</Box>
        //     );
        // }
    }
];