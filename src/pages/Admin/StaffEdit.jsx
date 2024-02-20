import React, { useState } from "react";
import AddModal from './Modal/AddModal'
import { tokens } from "../../theme";
import { useTheme } from "@mui/material"
import axios from "axios";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Box, Typography } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import { RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { useLocation } from "react-router-dom";


const StaffEdit = ({ closeModal, isOpen, selectedMemberName, selectedMemberId , selectedMemberPK, selectedMemberIds}) => {
    /** 다크모드 */
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const [rank, setrank] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    // const [id, setId] = useState("");
    

    const handleSubmit = (e) => {
        e.preventDefault();

        // 입력된 정보를 객체로 생성
        const updatedMember = {
            id: selectedMemberId,
            pw: password,
            name: name ? name : selectedMemberName,
            memberrank: rank,
            tell: contactNumber,
            ids : selectedMemberIds,
            membernum : selectedMemberPK
        };

        // POST 요청 보내기
        axios
            .put(`http://localhost:8088/boot/updateMember`,updatedMember)
            .then((response) => {
                // 요청이 성공한 경우 처리할 로직 작성
                console.log(response.data); // 서버에서 받은 응답 데이터 출력
                closeModal(); // 등록 완료 후 모달 닫기
            })
            .catch((error) => {
                console.error(error);
                // alert("아이디 중복입니다")
            });
    };

    const changeName = (name) => {
        setName(name);
    }

    // 입력된 값을 로그로 출력하는 함수
    const logFormData = () => {
        console.log("id:", selectedMemberId);
        console.log("password:", password);
        console.log("name:", name ? name : selectedMemberName);
        console.log("rank:", rank);
        console.log("contactNumber:", contactNumber);
        console.log("ids:", selectedMemberIds);
        console.log("membernum:", selectedMemberPK);
    };

    const handleRankChange = (e) => {
        setrank(e.target.value);
    };

    return (
        <div>
            <AddModal isOpen={isOpen} closeModal={closeModal}>
                <Box m="40px">
                    <Box
                        // m="20px"
                        display="flex" margin="auto" justifyContent="center"
                    >

                        <form onSubmit={handleSubmit}>

                            <TableContainer
                                component={Paper}
                                style={{
                                    width: "600px",
                                    borderRadius: "20px"
                                }}>
                                <Table >
                                    <TableHead >
                                        <TableRow
                                        >
                                            <TableCell colSpan={2}>
                                                <Typography variant="h3" color={colors.greenAccent[500]} style={{ margin: "auto", display: "flex", justifyContent: "center" }}>
                                                    의료진 수정
                                                </Typography>
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>아이디</TableCell>
                                            <TableCell>
                                                <InputBase type="text" sx={{ ml: 2, flex: 1 }} 
                                                placeholder={selectedMemberId} 
                                                value={selectedMemberId} 
                                                // onChange={(e) => setId(e.target.value)}  
                                                readOnly />
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>비밀번호</TableCell>
                                            <TableCell>
                                                <InputBase
                                                    type="password"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    sx={{ ml: 2, flex: 1 }} placeholder="비밀번호 입력" />
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>이름</TableCell>
                                            <TableCell>
                                                <InputBase 
                                                type="text" 
                                                value={selectedMemberName} 
                                                onChange={(e) => changeName(e.target.value)} 
                                                sx={{ ml: 2, flex: 1 }} 
                                                placeholder={selectedMemberName} 
                                                />
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>직급</TableCell>
                                            <TableCell>
                                                <RadioGroup value={rank} 
                                                onChange={handleRankChange}>
                                                    <div style={{ display: 'flex', alignItems: 'center', height: "30px" }}>
                                                        <FormControlLabel
                                                            value="doctor"
                                                            control={<Radio style={{ color: colors.grey[400], }} />}
                                                            label="의사"
                                                            style={{ marginRight: '30px' }}
                                                            />
                                                        <FormControlLabel
                                                            value="nurse"
                                                            control={<Radio style={{ color: colors.grey[400] }} />}
                                                            label="간호사"
                                                        />
                                                    </div>
                                                </RadioGroup>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>연락처</TableCell>
                                            <TableCell>
                                                <InputBase
                                                    type="text"
                                                    value={contactNumber}
                                                    sx={{ ml: 2, flex: 1 }}
                                                    onChange={(e) => setContactNumber(e.target.value)}
                                                    placeholder="연락처 입력" 
                                                    />
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell colSpan={2}>
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        justifyContent: "center",
                                                        margin: "auto",
                                                        width: "60%",
                                                    }}>
                                                    <button
                                                        style={{
                                                            backgroundColor: colors.greenAccent[500]
                                                        }}
                                                        type="submit" onClick={logFormData}>
                                                        변경
                                                    </button>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>

                        </form>

                    </Box>
                </Box>
            </AddModal>
        </div>
    )
}

export default StaffEdit