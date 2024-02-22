import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { AdminContext, ColorModeContext, tokens } from "../../theme";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ClearIcon from '@mui/icons-material/Clear';
import AddStaff from "./AddStaff";
import EditStaff from "./EditStaff";
import Design from "./DesignTable";
import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";

const AdminData = () => {
    const {
        memberData,
        openModal, closeModal,
        isModalOpen, isAddModalOpen, setIsAddModalOpen,
        showConfirmation, setShowConfirmation, fetchData
    } = useContext(AdminContext);
    /** 다크모드 */
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [selectedMemberNum, setSelectedMemberNum] = useState(null);

    // 의료진 수정할 때 사용
    const [selectedMemberId, setSelectedMemberId] = useState(null);
    const [selectedMemberName, setSelectedMemberName] = useState(null);
    const [selectedMemberIds, setSelectedMemberIds] = useState(null);
    const [selectedMemberPK, setSelectedMemberPK] = useState(null);


    const navigate = useNavigate();

    const handleClearIconClick = (membernum) => {
        // console.log("선택된 행의 memverNum:", membernum);
        setSelectedMemberNum(membernum);
        setShowConfirmation(true);
    };

    const handleEditIconClick = (member) => {
        setIsAddModalOpen(true);

        // console.log("선택된 행의 memverNum:", member);
        setSelectedMemberId(member.id);
        setSelectedMemberName(member.name);
        setSelectedMemberIds(member.ids);
        setSelectedMemberPK(member.membernum);
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
        {
            field: "ids",
            headerName: "번호",
            headerAlign: "center",
            align :"center",
            flex : 0.6
        },
        {
            field: "id",
            headerName: "아이디",
            flex: 1
        },
        {
            field: "name",
            headerName: "이름",
            flex: 1
        },
        {
            field: "memberrank",
            headerName: "직급",
            flex: 0.8
        },
        {
            field: "loginTime",
            headerName: "로그인 시간",
            flex: 1,
            headerAlign: "center",
            align :"center"
        },
        {
            field: "logoutTime",
            headerName: "로그아웃 시간",
            flex: 1,
            headerAlign: "center",
            align :"center"
        },
        {
            field: "tell",
            headerName: "연락처",
            flex: 1,
            headerAlign: "center",
            align :"center"
        },
        {
            field: "date",
            headerName: "날짜",
            flex: 1,
            headerAlign: "center",
            align :"center"
        },
        {
            field: "update",
            headerName: "수정",
            flex: 0.5,
            headerAlign: "center",
            align :"center",
            renderCell: (params) => {
                return (
                    <EditOutlinedIcon onClick={() => handleEditIconClick(params.row)} />
                );
            }
        },
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
            <Box m="20px">

                <button onClick={
                    openModal
                }>의료진 추가</button>

                <Box
                    m="25px 0 0 0"
                    height="80vh"

                    borderRadius="30px"
                    boxShadow="0px 2px 4px rgba(0, 0, 0, 0.2);"
                    sx={{
                        "& .MuiDataGrid-root": {
                            border: "none",
                        },
                        "& .MuiDataGrid-cell": {
                            borderBottom: "none",
                            color : colors.grey[100]
                        },
                        "& .name-column--cell": {
                            color: colors.greenAccent[300],
                        },
                        "& .MuiDataGrid-columnHeaders": {
                            backgroundColor: colors.blueAccent[700],
                            borderBottom: "none",
                            borderTopLeftRadius: "30px",
                            borderTopRightRadius: "30px",
                            fontSize: "16px",
                        },
                        "& .MuiDataGrid-virtualScroller": {
                            backgroundColor: colors.primary[400],
                        },
                        "& .MuiDataGrid-footerContainer": {
                            borderTop: "none",
                            backgroundColor: colors.blueAccent[700],
                            borderBottomLeftRadius: "30px",
                            borderBottomRightRadius: "30px",
                        },
                        "& .MuiCheckbox-root": {
                            color: `${colors.greenAccent[200]} !important`,
                        },
                        "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                            color: `${colors.grey[100]} !important`,
                        },
                    }}
                >
                    <DataGrid
                        rows={memberData}
                        columns={columnslist}
                        components={{ Toolbar: GridToolbar }}
                        autoPageSize={10}
                    />
                </Box>

                {showConfirmation && (
                    <div className="modal">
                        <div className="modal-content" style={{
                            position: "fixed",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            borderRadius: "3%",
                            // backgroundColor: ,
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

                <AddStaff closeModal={closeModal} isOpen={isModalOpen} />
                <EditStaff closeModal={closeModal} isOpen={isAddModalOpen} memberData={memberData}
                    selectedMemberName={selectedMemberName} selectedMemberId={selectedMemberId}
                    selectedMemberIds={selectedMemberIds} selectedMemberPK={selectedMemberPK} />
            </Box>
        </div>
    );
};

export default AdminData;
