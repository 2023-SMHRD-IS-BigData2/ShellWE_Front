import React from "react";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material"
import { Box, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import columns from './columns.json';
import { Link } from "react-router-dom";
// 환자 데이터 컴포넌트
const Data = ({ lists }) => {

    /** 다크모드 */
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    // const navigate = useNavigate();


    // lists 값이 null인 경우 로딩 상태를 표시하거나 다른 방식으로 처리
    if (lists === null) {
        return <div>Loading...</div>;
    }
    // // 누른 기준으로 디테일 넘기기
    // const handleRowClick = (params) => {
    //     const num = params.row.patinum;
    //     navigate(`/main/detail/${num}`);
    //     console.log("gesa");
    // };

    const listsWithId = lists.map((list, index) => ({
        ...list,
        id: index + 1,
    }));



    const columnslist = [
        ...columns.columns,
        {
            field: "name",
            headerName: "이름",
            flex: 1,
            renderCell: ({ row }) => (
                <Link to={`/main/detail/${row.patinum}`}>
                    {row.name}
                </Link>
            ),
        },
        {
            field: "sepsisslevel",
            headerName: "패혈증 상태",
            flex: 1,
            renderCell: ({ row: { sepsisslevel } }) => {
                return (
                    <Box
                        width="100%"
                        m="0 auto"
                        p="5px"
                        display="flex"
                        justifyContent="center"
                        backgroundColor={
                            sepsisslevel === "Screening"
                                ? colors.redAccent[600]
                                : sepsisslevel === "Observing"
                                    ? colors.greenAccent[700]
                                    : "none"
                        }
                        borderRadius="4px"
                    >
                        <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                            {sepsisslevel === "None" ? "" : sepsisslevel}
                        </Typography>
                    </Box>
                );
            },
        },
    ];


    return (
        <DataGrid
            rows={listsWithId}                       /** 환자 데이터 */
            columns={columnslist}                /** 컬럼명 */
            components={{ Toolbar: GridToolbar }}    /** 필터 기능 (다운로드, 크기 조절) */
        >
        </DataGrid>
    )
}

export default Data