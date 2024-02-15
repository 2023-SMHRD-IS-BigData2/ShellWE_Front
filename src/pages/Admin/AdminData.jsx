import { useEffect, useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { mockDataContacts } from "../../data/mockData";
import columns from './AdminColumns.json';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DoctorForm from "./DoctorForm"; // 의료진 등록 폼 컴포넌트


// 환자 데이터 컴포넌트
const AdminData = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [patientData, setPatientData] = useState([]);

    useEffect(() => {
        // 환자 데이터를 가져오는 API 호출 등의 로직
        // 예시로 mockDataContacts를 사용하였습니다.
        setPatientData(mockDataContacts);
    }, []);

    const handleRowClick = (params) => {
        console.log("Clicked Row:", params.row);
    };

    const openForm = () => {
        setIsFormOpen(true);
    };

    const closeForm = () => {
        setIsFormOpen(false);
    };

    return (
        <div>
            <button onClick={openForm}>의료진 추가</button>
            {isFormOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeForm}>
                            &times;
                        </span>
                        <DoctorForm closeModal={closeForm} />
                    </div>
                </div>
            )}
            <DataGrid
                rows={patientData}
                columns={columns.columns}
                components={{ Toolbar: GridToolbar }}
                onRowClick={handleRowClick}
            />
        </div>
    );
}

export default AdminData;