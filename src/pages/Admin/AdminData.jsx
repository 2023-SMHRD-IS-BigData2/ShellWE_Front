import { useEffect, useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import columns from './AdminColumns.json';
import axios from "axios";
import DoctorForm from "./DoctorForm";
import ClearIcon from '@mui/icons-material/Clear';


const AdminData = () => {
    const [patientData, setPatientData] = useState([]);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [selectedMemberNum, setSelectedMemberNum] = useState(null);

    // Modal 여는 변수
    const [isModalOpen, setIsModalOpen] = useState(false);
    /**Modal열기 */
    const openModal = (e) => {
        setIsModalOpen(true);
    }
    /**Modal닫기 */
    const closeModal = () => {
        setIsModalOpen(false);
    }


    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:8088/boot/admin");
            const dataWithId = response.data.members.map((item, index) => ({
                ...item,
                ids: index + 1,
            }));
            console.log("lists", dataWithId);
            setPatientData(dataWithId);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [showConfirmation, isModalOpen]);


    const handleClearIconClick = (membernum) => {
        console.log("선택된 행의 memverNum:", membernum);
        setSelectedMemberNum(membernum);
        setShowConfirmation(true);
    };

    const handleConfirmationConfirm = async () => {
        console.log("확인 버튼 클릭");
        setShowConfirmation(false);

        try {
            await axios.post(`http://localhost:8088/boot/deleteMember?membernum=${selectedMemberNum}`);
            console.log("삭제완료");
        } catch (error) {
            alert("관리자는 삭제가 불가능합니다");
        }
    };

    const handleConfirmationCancel = () => {
        console.log("취소 버튼 클릭");
        setShowConfirmation(false);
        setSelectedMemberNum(null);
    };

    const columnslist = [
        ...columns.columns,
        {
            field: "delete",
            headerName: "회원탈퇴",
            flex: 0.5,
            headerAlign: "center",
            align: "center",
            renderCell: (params) => {
                return (
                    <ClearIcon onClick={() => handleClearIconClick(params.row.membernum)} />
                );
            }
        }
    ];

    return (
        <div>
            <button onClick={
                openModal
            }>의료진 추가</button>

            <DataGrid rows={patientData} columns={columnslist} components={{ Toolbar: GridToolbar }} />

            {showConfirmation && (
                <div className="modal">
                    <div className="modal-content" style={{
                        position: "fixed",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        borderRadius: "3%",
                        backgroundColor: "lightgray",
                        padding: "20px",
                        textAlign: "center",
                        color: "black"
                    }}>
                        <p style={{ marginTop: "10px", color: "black" }}>정말로 회원을 삭제하시겠습니까?</p>
                        <button style={{ margin: "10px" }} onClick={handleConfirmationConfirm}>확인</button>
                        <button style={{ margin: "10px" }} onClick={handleConfirmationCancel}>취소</button>
                    </div>
                </div>
            )}
            <DoctorForm closeModal={closeModal} isOpen={isModalOpen} />
        </div>
    );
};

export default AdminData;
