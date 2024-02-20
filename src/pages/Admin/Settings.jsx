import React, { useContext, useState } from "react";
import { Box, useTheme } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import axios from "axios";
import { AdminContext, tokens } from "../../theme";
import SmartModal from './Modal/SmartModal'
import './test.css'

const FAQ = () => {

  const {
    sepsisScore, setSepsisScore, isSmartModalOpen, setIsSmartModalOpen, closeModal
  } = useContext(AdminContext);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // const [selectedNumber, setSelectedNumber] = useState(null);

  const openModal = () => {
    setIsSmartModalOpen(true);
  };

  const handleNumberClick = async (number) => {
    // setSelectedNumber(number);
    setSepsisScore(number);
    try {
      await axios.post(`http://localhost:8088/boot/sepsissscoer?sepsiss=${number}`);
      console.log("SMART 기준 성공");
    } catch (error) {
      console.log("SMART 기준", error);
    }
  };

  const renderNumberButtons = () => {
    const numberButtons = [];
    for (let i = 1; i <= 99; i++) {
      numberButtons.push(
        <button key={i} onClick={() => handleNumberClick(i)} className="triangle-button">
          {i}
        </button>
      );
    }
    return numberButtons;
  };

  // 백 연동 기능 구현 필요

  return (
    <Box m="20px">
      {/* ================ 환경설정 한 부분 ===================================== */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Smart 기준 설정
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {/* 스마트 값 */}

          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* ====================================================== */}
      <div>
        <div className="button-container" onClick={openModal} >
          <h1>숫자 선택</h1>
        </div>

        <div>
          <p>선택된 숫자: {sepsisScore}</p>
        </div>

        <SmartModal isOpen={isSmartModalOpen} closeModal={closeModal}>
          {/* {modalOpen && ( */}
          <div style={{
            margin:"auto",
            display:"flex",
            justifyContent:"center",
            alignContent:"center",
            alignItems:"center",
            
          }} 
          // className="modal"
          >
            <div 
            className="modal-content"
            >
              <div className="modal-number-container">
                {renderNumberButtons()}
              </div>
              {/* <h2>선택된 숫자</h2> */}
              {/* <p>{selectedNumber}</p> */}
              {/* <button onClick={closeModal}>닫기</button> */}
            </div>
          </div>
          {/* )} */}
        </SmartModal>

      </div>
    </Box>
  );
};

export default FAQ;
