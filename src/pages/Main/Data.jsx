import React, { useEffect, useState } from "react";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material"
import { Box, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import columns from './columns.json';
import axios from "axios";
import { useNavigate } from "react-router-dom";
// 환자 데이터 컴포넌트
const Data = () => {

    /** 다크모드 */
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const navigate = useNavigate();
    /** 환자 리스트 */
    const [lists, setList] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8088/boot/getPatient");
                setList(response.data.patientList);
                console.log("lists", response.data.patientList);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    // lists 값이 null인 경우 로딩 상태를 표시하거나 다른 방식으로 처리
    if (lists === null) {
        return <div>Loading...</div>;
    }
    // 인덱스 1부터 시작
    const listsWithId = lists.map((list, index) => ({
        ...list,
        id: index + 1,
    }));

    const columnslist = [
        ...columns.columns,
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
                    // onRowClick={}
                    >
                        <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                            {sepsisslevel === "None" ? "" : sepsisslevel}
                        </Typography>
                    </Box>
                );
            },
        }
    ]

    const handleRowClick = (params) => {
        const num = params.row.patinum;
        navigate(`/main/detail/${num}`);
    };

    return (
        <DataGrid
            rows={listsWithId}                       /** 환자 데이터 */
            columns={columnslist}                /** 컬럼명 */
            components={{ Toolbar: GridToolbar }}    /** 필터 기능 (다운로드, 크기 조절) */
            onRowClick={handleRowClick} // 각 행 클릭 시 핸들러 호출
        >
        </DataGrid>
    )
}

export default Data