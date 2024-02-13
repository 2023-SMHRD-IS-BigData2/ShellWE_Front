import React, { useEffect, useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import columns from './columns.json';
import axios from "axios";
import { useNavigate } from "react-router-dom";
// 환자 데이터 컴포넌트
const Data = () => {

    /** 환자 리스트 */
    const [lists, setList] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8088/boot/getPatient");
                setList(response.data[0]);
                console.log("lists", response.data[0]);
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

    const navigate = useNavigate();
    const handleRowClick = (params) => {
        const num = params.row.patinum;
        navigate(`/main/detail/${num}`);
    };

    return (
        <DataGrid
            rows={listsWithId}                       /** 환자 데이터 */
            columns={columns.columns}                /** 컬럼명 */
            components={{ Toolbar: GridToolbar }}    /** 필터 기능 (다운로드, 크기 조절) */
            onRowClick={handleRowClick} // 각 행 클릭 시 핸들러 호출
        >
        </DataGrid>
    )
}

export default Data