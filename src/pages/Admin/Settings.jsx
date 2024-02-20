import React, { useContext, useState } from "react";
import { Box, useTheme, Typography, InputBase } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import axios from "axios";
import { AdminContext, tokens } from "../../theme";
import SmartModal from './Modal/SmartModal'
import './test.css'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

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
        <button key={i}
          style={{
            scale: "1.5",
            marginBottom: "20px",
            width: "40px"
          }}

          onClick={() => handleNumberClick(i)} className="triangle-button">
          {i}
        </button>
      );
    }
    return numberButtons;
  };
  // 스크롤 이동 거리
  const scrollDistance = 46;
  // 백 연동 기능 구현 필요
  const [scrollPosition, setScrollPosition] = useState(0);

  // 위로 스크롤
  const scrollUp = () => {
    const newPosition = scrollPosition - scrollDistance;
    setScrollPosition(newPosition < 0 ? 0 : newPosition);
  };

  // 아래로 스크롤
  const scrollDown = () => {
    const newPosition = scrollPosition + scrollDistance;
    setScrollPosition(newPosition);
  };
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
            <Typography variant="h1">
              <InputBase
                type="text"
                // value={score}
                sx={{ ml: 2, flex: 1 }}
                // onChange={(e) => setContactNumber(e.target.value)}
                placeholder={sepsisScore} />
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
          <div style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            margin: "auto",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",

          }}
          >
            <Typography variant="h1">
              <InputBase
                type="text"
                // value={score}
                sx={{ ml: 2, flex: 1 }}
                // onChange={(e) => setContactNumber(e.target.value)}
                placeholder={sepsisScore} />
            </Typography>
            <div>

            </div>

          </div>
        </SmartModal>

      </div>
    </Box>
  );
};

export default FAQ;
