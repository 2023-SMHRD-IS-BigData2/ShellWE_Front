import React, { useEffect, useState } from "react";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material"
import { Box, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import columns from './columns.json';
import axios from "axios";
import { Link } from "react-router-dom";
import { Modal, Button } from "@mui/material";

// 환자 데이터 컴포넌트
const Data = () => {

    /** 다크모드 */
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    /** 환자 리스트 */
    const [lists, setList] = useState(null);

    // 모달 상태 관리
    const [openModal, setOpenModal] = useState(false); // 모달 창 열림 상태
    // 모달의 패혈증 상태 선택
    const [selectedSepsissLevel, setSelectedSepsissLevel] = useState("");
     // 모달의 환자 고유번호 선택
     const [selectedPatinum, setSelectedPatinum] = useState("");
    
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

    useEffect(() => {
        // 선택된 패혈증 상태가 변경될 때마다 호출됩니다.
        if (selectedSepsissLevel && selectedPatinum) {
            // API 호출 등의 작업 수행
            axios.get(`http://localhost:8088/boot/changeStatus?sepsisslevel=${selectedSepsissLevel}&patinum=${selectedPatinum}`)
                .then(response => {
                    console.log("API 호출 결과:", response.data);
                    // 여기서 필요한 추가 작업 수행
                })
                .catch(error => {
                    console.log("API 호출 중 오류 발생:", error);
                    // 에러 처리 로직 추가
                });
        }
    }, [selectedSepsissLevel, selectedPatinum]);

    // lists 값이 null인 경우 로딩 상태를 표시하거나 다른 방식으로 처리
    if (lists === null) {
        return <div>Loading...</div>;
    }
    // 인덱스 1부터 시작
    const listsWithId = lists.map((list, index) => ({
        ...list,
        id: index + 1,
    }));

    // 모달 열기/닫기 함수
    const handleModalOpen = (sepsisslevel) => {
        setSelectedSepsissLevel(sepsisslevel); // 모달에서 사용할 패혈증 상태 값 설정
        setOpenModal(true); // 모달 열기
    };

    const handleModalClose = () => {
        setOpenModal(false);
    };

     // 모달 내에서 선택된 패혈증 상태에 따라 처리할 함수
     const handleChangeStatus = () => {
        // 선택된 패혈증 상태에 따라 API 호출 등의 작업 수행
        // 예: axios.get(`http://localhost:8088/boot/changeStatus?sepsisslevel=${selectedSepsissLevel}&patinum=${selectedPatinum}`);
        console.log(`Change status for sepsiss level: ${selectedSepsissLevel}`);
        // 모달 닫기
        handleModalClose();
    };

    const columnslist = [
        {
            field: "Name",
            headerName: "환자명",
            flex: 1,
            renderCell: ({ row }) => (
                <Link key={row.id} to={`/main/detail/${row.patinum}`} style={{ textDecoration: 'none', color: 'White' }}>
                    {row.name}
                </Link>
            ),
        },
        ...columns.columns.filter((column) => column.field !== "name"),
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
                        onClick={() => {
                            // "Screening" 또는 "Observing" 상태의 열 클릭 시 모달 열기
                            if (sepsisslevel === "Screening" || sepsisslevel === "Observing") {
                                handleModalOpen();
                            }
                        }}
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
        <>
            <DataGrid
                rows={listsWithId}                       /** 환자 데이터 */
                columns={columnslist}                /** 컬럼명 */
                components={{ Toolbar: GridToolbar }}    /** 필터 기능 (다운로드, 크기 조절) */
                onRowClick={(row) => handleModalOpen(row.sepsisslevel, row.patinum)}
            />
            {/* 모달 */}
            <Modal
                open={openModal}
                onClose={handleModalClose}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                }}>
                    <Typography id="modal-title" variant="h6" component="h2">
                        패혈증 상태를 선택해주세요
                    </Typography>
                    <Typography id="modal-description" sx={{ mt: 2 }}>
                        <select value={selectedSepsissLevel} onChange={(e) => setSelectedSepsissLevel(e.target.value)}>
                            <option value="Screening">Screening</option>
                            <option value="Observing">Observing</option>
                            <option value="None">None</option>
                        </select>
                    </Typography>
                    <Button onClick={handleModalClose}>닫기</Button>
                </Box>

            </Modal>
        </>
    )
}

export default Data