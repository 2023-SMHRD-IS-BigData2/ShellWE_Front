import React, { useContext } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Brush } from 'recharts';
import { Box, Typography, useTheme } from "@mui/material";
import { tokens, ChartContext, ColorModeContext } from "../../theme";

const CustomizedLabel = ({ x, y, value }) => {
    /** 다크모드 */
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    // const {colors} = useContext(ColorModeContext);

    return (
        <text x={x + 8} y={y} dy={-10} fontSize={12} textAnchor="middle" fill={colors.redAccent[100]}>{value}</text>
    );
};

const Graph = () => {

    /** 다크모드 */
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    // const {colors} = useContext(ColorModeContext);
    const { clickedXValue, data, graph, subtitle } = useContext(ChartContext);

    // clickedXValue 값이 null인 경우에 대한 처리
    if (!clickedXValue) {
        return <Box
            gridColumn="span 8"
            gridRow="span 2"
            backgroundColor={colors.primary[400]}
            borderRadius="20px"
            height="350px"
            width="135vh"
            marginTop="50px"
        >
        </Box>
            ;
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
            borderRadius="20px"
            height="350px"
            width="135vh"
            marginTop="70px"
        >
            <Box
                mt="25px"
                p="0 30px"
                mb="20px"
            >
                <Box
                    display="flex"
                    justifyContent="space-between"
                    width="150px">
                    <Typography
                        variant="h4"
                        fontWeight="600"
                        color={colors.grey[100]}
                    >
                        {subtitle ? subtitle : ""}{/* 패혈증 수치 */}
                    </Typography>
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        color={colors.greenAccent[500]}
                    >
                        {data[data.length - 1][subtitle]}
                    </Typography>
                </Box>
            </Box>
            <Box height="250px" m="-20px 0 0 0" >
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart width="100%" height={300} data={filteredData}
                        margin={{ top: 20, bottom: 40, right: 20, left: 35 }}>
                        <CartesianGrid vertical={false} strokeOpacity={0.3} />
                        <XAxis dataKey="time" tickFormatter={(value) => value.slice(0, 16)} />
                        <YAxis yAxisId={graph} dataKey={graph} orientation="left"/>
                        <Line type="linear" dataKey={graph} stroke={colors.redAccent[700]} yAxisId={graph} />
                        <Brush
                            dataKey="time"
                            height={21}
                            stroke="#EB9DA2"
                            startIndex={0}
                            endIndex={Math.min(5, data.length - 1)}
                            opacity="0.2"
                            fillOpacity={0.2}
                        />
                        <Line
                            type="linear"
                            dataKey={graph}
                            stroke="red"
                            yAxisId={graph}
                            label={<CustomizedLabel />}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </Box>
        </Box>
    );
};

export default Graph;
