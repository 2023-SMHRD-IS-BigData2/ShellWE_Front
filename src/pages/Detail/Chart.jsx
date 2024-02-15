import React, { useContext, useEffect, useState } from "react";
import { ChartContext } from './ChartContext';
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";

const Charts = () => {

  /** 다크모드 */
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { clickedXValue, makechart, denger } = useContext(ChartContext); // ChartContext로부터 clickedXValue, makechart, denger 값을 가져옵니다.
  console.log("denger", denger);
  const [updatedValue, setUpdatedValue] = useState(0); // updatedValue 상태와 값을 초기화합니다.

  useEffect(() => {
    console.log("chart클릭", clickedXValue);
    const date = clickedXValue
      ? clickedXValue.split(' ')[0]
      : ""; // clickedXValue에서 날짜 부분만 추출합니다.
    setUpdatedValue(date); // 추출한 날짜를 updatedValue 상태로 설정합니다.
  }, [clickedXValue]);

  const renderDengerStatus = () => {
    if (!denger) {
      return null; // 예외 처리: denger가 undefined 또는 null인 경우 null을 반환하도록 수정
    }
    return Object
      .entries(denger)
      .map(([key, value]) => { // 객체를 배열로 만드는 작업
        return (

          <Box
            key={key}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderRadius="20px"
            backgroundColor={colors.primary[400]}
            marginBottom="4px"
            p="15px">
            <Box>
              <Typography color={colors.greenAccent[500]} variant="h4" fontWeight="600">
                {key}
              </Typography>
            </Box>
            <Box>
              {
                value
                  ? "정상"
                  : "비정상"
              }
            </Box>
            <Box
              backgroundColor={colors.greenAccent[500]}
              p="5px 10px"
              borderRadius="4px"
              onClick={() => makechart(key)}>
              보기
            </Box>
          </Box>
        );
      });
  };

  return (
    <Box gridColumn="span 4" gridRow="span 2"
    borderRadius="30px"
            height="350px"
            marginTop="50px"
    >
      <Box
        display="flex auto"
        justifyContent="space-between"
        backgroundColor={colors.primary[400]}
        marginBottom="6px"
        colors={colors.grey[100]}
        p="15px"
        borderRadius="20px">
        <Typography
          color={colors.grey[100]}
          variant="h5"
          fontWeight="600"
          align="center">
          {updatedValue}
        </Typography>
      </Box>

      <Box overflow="auto" height="30vh">
        {/* 반복되는 부분 */}
        {renderDengerStatus()}
        {/* denger 상태에 따라 정상 또는 비정상을 표시하고, 버튼을 클릭하면 makechart 함수를 호출합니다. */}

      </Box>
    </Box>
  );
};

export default Charts;
