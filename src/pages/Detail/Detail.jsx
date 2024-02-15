import React, { useEffect, useState } from 'react'
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DetailHeader from './DetailHeader'
// import data from "./jsondata.json";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import { useParams } from 'react-router-dom'
import axios from 'axios';

const Detail = () => {
  /** 다크모드 */
  const theme = useTheme();
  /** 다크모드 */
  const colors = tokens(theme.palette.mode);

  let { num } = useParams() //메인에서 넘어온 값

  const [data, setData] = useState(null); //스프링에서 받아온 값

  // 환자 값에 따라 디테일 페이지 다르게 하기
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8088/boot/getList?patinum=${num}`);
        setData(response.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [num]);

  const test = () => {
    console.log("test");
  }

  console.log(data);
  return (
    <Box m="20px">
      <DetailHeader title="이름" subtitle="정보" />

      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
        maxWidth="2000px"
      >

        {/* 그래프 박스 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          borderRadius="30px"
          width="135vh"
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                SMART                            {/* 패혈증 수치 */}
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                68
              </Typography>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0" >
            {/* <LineChart isDashboard={true} /> */}

          </Box>
        </Box>

        {/* 버튼들 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
        >
          <Box
            display="flex auto"
            justifyContent="space-between"
            backgroundColor={colors.primary[400]}
            marginBottom="6px"
            colors={colors.grey[100]}
            p="15px"
            borderRadius="20px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600" align="center">
              2024-02-02
            </Typography>
          </Box>

          <Box
            overflow="auto"
            height="65vh">
            {/* 반복되는 부분 */}
            {mockTransactions.map((transaction, i) => (
              <Box
                // key={`${transaction.txId}-${i}`} key 값
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderRadius="20px"
                backgroundColor={colors.primary[400]}
                marginBottom="4px"
                p="15px"
              >
                <Box>
                  <Typography
                    color={colors.greenAccent[500]}
                    variant="h4"
                    fontWeight="600"
                  >
                    HR
                  </Typography>
                </Box>
                <Box>
                  정상
                </Box>
                <Box
                  backgroundColor={colors.greenAccent[500]}
                  p="5px 10px"
                  borderRadius="4px"
                  onClick={test} // 그래프 보여주기
                >
                  보기
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
        {/* 그래프 박스 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          borderRadius="30px"
          height="350px"
          width="135vh"
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                SMART                            {/* 패혈증 수치 */}
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                68
              </Typography>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0" >
            {/* <LineChart isDashboard={true} /> */}

          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Detail