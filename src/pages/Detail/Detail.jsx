import React, { useEffect, useState } from 'react'
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DetailHeader from './DetailHeader'
// import data from "./jsondata.json";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Graphic from "./Graphic"

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

  console.log(data);
  return (
    <Box m="20px">
      <DetailHeader />
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >

        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          borderRadius="30px"
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
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0" >
            {/* <LineChart isDashboard={true} /> */}
          
          </Box>
        </Box>
        <Box
          gridColumn="span 2"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              2024-02-02
            </Typography>
          </Box>
          <Box
            overflow="auto">

            {/* 호준이 줄거 */}
            {mockTransactions.map((transaction, i) => (
              <Box
                // key={`${transaction.txId}-${i}`} key 값
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderBottom={`4px solid ${colors.primary[500]}`}
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
                <Box color={colors.grey[100]}>정상</Box>
                <Button
                  sx={{
                    backgroundColor: colors.blueAccent[700],
                    color: colors.grey[100],
                    fontSize: "14px",
                    fontWeight: "bold",
                    padding: "10px 20px",
                  }}
                >

                  <Box
                    backgroundColor={colors.greenAccent[500]}
                    p="5px 10px"
                    borderRadius="4px"
                  >

                    보기
                  </Box>
                </Button>
              </Box>
            ))}

          </Box>
        </Box>

      </Box>
    </Box>
  )
}

export default Detail