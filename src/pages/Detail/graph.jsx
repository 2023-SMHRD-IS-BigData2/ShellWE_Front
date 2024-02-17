import React, { useContext , useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChartContext } from './ChartContext';
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";

const Graph = () => {

    /** 다크모드 */
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const { clickedXValue, data, graph, subtitle } = useContext(ChartContext);

    // clickedXValue 값이 null인 경우에 대한 처리
    if (!clickedXValue) {
        return null;
    }

    // clickedXValue에서 "2024-01-01" 부분만 추출
    const clickedDate = clickedXValue.split(" ")[0];

    // clickedDate와 동일한 time 값을 가진 데이터만 필터링
    const filteredData = data.filter(item => item.time.includes(clickedDate));

    return (
        <Box
            gridColumn="span 8"
            gridRow="span 2"
            backgroundColor={colors.primary[400]}
            borderRadius="30px"
            height="350px"
            width="135vh"
            marginTop="50px"
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
                        variant="h4"
                        fontWeight="600"
                        color={colors.grey[100]}
                    >
                        {subtitle}                           {/* 패혈증 수치 */}
                    </Typography>
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        color={colors.greenAccent[500]}
                    >
                         {data[data.length - 1][subtitle]}
                         {data[data.length - 1][subtitle]}
                    </Typography>
                </Box>
            </Box>
            <Box height="250px" m="-20px 0 0 0" >
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart width="100%" height={300} data={filteredData}
                        margin={{ top: 20, bottom: 40, right: 20, left: 80 }}>
                        <CartesianGrid vertical={false} strokeOpacity={0.3} />
                        margin={{ top: 20, bottom: 40, right: 20, left: 80 }}>
                        <CartesianGrid vertical={false} strokeOpacity={0.3} />
                        <XAxis dataKey="time" />
                        <YAxis yAxisId={graph} dataKey={graph} orientation="right" />
                        <Tooltip />
                        <Line type="linear" dataKey={graph} stroke="red" yAxisId={graph} />
                        <Brush
                            dataKey="time"
                            height={21}
                            stroke="#EB9DA2"
                            startIndex={0}
                            endIndex={Math.min(5, data.length - 1)}
                            opacity="0.2"
                            fillOpacity={0.2}
                        />
                    </LineChart>
                </ResponsiveContainer>

            </Box>
        </Box>
    );
};

export default Graph;
