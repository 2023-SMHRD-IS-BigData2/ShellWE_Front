import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Box, useTheme, Typography, InputBase } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AdminContext, ColorModeContext, tokens } from "../../theme";

const FAQ = () => {

  const {
  } = useContext(AdminContext);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // const {colors} = useContext(ColorModeContext);
  const [number, setNumber] = useState();
  const [scoreEffect, setScoreEffect] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState();
  const [sepsisScore, setSepsisScore] = useState();


  const handleConfirmationConfirm = () => {
    setShowConfirmation(false);
    console.log("number", number);
    const str = number.toString();
    axios
      .post(`http://localhost:8088/boot/sepsissscoer?sepsiss=${str}`)
      .then((response) => {
        // console.log("Smart 변경", response);
        setScoreEffect(response)
      })
      .catch((error) => {
        console.error("error", error);
      });
  };

  const handleConfirmationCancel = () => {
    // console.log("취소 버튼 클릭");
    setNumber(null);
    setShowConfirmation(false);
  };

  const handleNumberClick = (changeNum) => {
    // console.log("선택된 행의 memverNum:", membernum);
    setNumber(changeNum);
    setShowConfirmation(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8088/boot/getSep");
        setSepsisScore(response.data.sepscore);
        // console.log("back sepsis", sepsisScore);
      } catch (error) {
        console.log("back sepsis", error);
      }
    };
    fetchData();
    // console.log("----Effect SMART-----");
  }, [scoreEffect]);


  return (
    <Box m="20px">
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Smart 기준 설정
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box display="flex" justifyContent="space-between" width="100px" margin="auto">
            <Typography variant="h2" color={colors.blueAccent[500]}>
              {sepsisScore}
            </Typography>
            <Box>
              <button onClick={() => { handleNumberClick(number) }}>설정</button>
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>

      {showConfirmation && (
        <div className="modal">
          <div className="modal-content" style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "30px",
            backgroundColor: colors.primary[400],
            padding: "20px",
            textAlign: "center",
            color: "black"
          }}>
            <p style={{ marginTop: "10px", color: "black" }}>SMART 기준을 변경하시겠습니까?</p>
            <Box width="300px">
              <InputBase
                type="number"
                value={number}
                sx={{ ml: 5, color: colors.blueAccent[500], scale: "1.5", width: "50px", mr: "10px" }}
                onChange={(e) =>
                  setNumber(e.target.value)
                }
                placeholder={sepsisScore}
              />
              <button style={{ margin: "10px" }} onClick={handleConfirmationConfirm}>확인</button>
              <button style={{ margin: "10px" }} onClick={handleConfirmationCancel}>취소</button>
            </Box>
          </div>
        </div>
      )}
    </Box>
  );
};

export default FAQ;
