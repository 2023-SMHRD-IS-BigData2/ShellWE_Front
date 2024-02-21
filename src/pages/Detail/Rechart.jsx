import React, { useState, useContext, useEffect } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Brush } from "recharts";
import { Box, Typography, useTheme } from "@mui/material";
import "./chart.css";
import { tokens, ChartContext, ColorModeContext } from "../../theme";

export default function Example() {
    /** 다크모드 */
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    // const {colors} = useContext(ColorModeContext);

    // state 설정
    const [selectedKeys, setSelectedKeys] = useState(["smart"]); // 처음에 출력할 값
    const [filteredData, setFilteredData] = useState([]); // 달력의 기준으로 필터링된 값

    // ChartContext에서 필요한 값 가져오기
    const { handleXAxisClick, data, StartDate, EndDate } = useContext(ChartContext)

    console.log("data: ",data);

    // 데이터와 날짜 값 확인
    console.log("datas", data[0].smart);
    // console.log("StartDate", StartDate);
    // console.log("EndDate", EndDate);

    // 버튼 클릭 이벤트 처리
    const handleButtonClick = (value) => {
        setSelectedKeys((prevSelectedKeys) => {
            if (prevSelectedKeys.includes(value)) {
                return prevSelectedKeys.filter((key) => key !== value);
            } else {
                return [...prevSelectedKeys, value];
            }
        });
    };

    // StartDate와 EndDate에 따라 데이터 필터링
    useEffect(() => {
        const filtered = data.filter((item) => {
            const currentDate = new Date(item.time.split(' ')[0]);
            const startDateObj = new Date(StartDate);
            const endDateObj = new Date(EndDate);
            return currentDate >= startDateObj && currentDate <= endDateObj;
        });

        setFilteredData(filtered);
    }, [StartDate, EndDate, data]);

    // 각 키에 대한 색상 설정
    const colorsChart = {
        smart: "#EB9DA2",
        o2sat: "#F0B884",
        map: "#E8E6A5",
        temp: "#BBE8B5",
        sbp: "#ACBBE8",
        hr: "#C5ACE8",
    };

    // 데이터가 없을 때 화면 출력
    if (!data || data.length === 0) {
        return <div>Loading...</div>;
    }

    // 선택된 키에 대한 라인 생성
    const lines = selectedKeys.map((key) => (
        <Line
            key={key}
            type="linear"
            dataKey={key}
            stroke={key === "smart" ? "#EB9DA2" : colorsChart[key]}
            strokeWidth={key === "smart" ? 6 : 3}
            fill={colorsChart[key]}
            activeDot={{ r: 8 }}
            yAxisId={key}
            dot={false}
            label={({ x, y, value }) => (
                <text x={x} y={y} dy={-8} fill={colorsChart[key]} textAnchor="middle">
                    {value}
                </text>
            )}
        />
    ));

    return (
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
                        variant="h3"
                        fontWeight="600"
                        color={colors.grey[100]}
                        marginTop="-30px"
                    >
                        smart                            {/* 패혈증 수치 */}
                    </Typography>
                    {/* <Typography
                        variant="h4"
                        fontWeight="bold"
                        color={colors.greenAccent[500]}
                    >
                        {""}
                    </Typography> */}
                </Box>
                {/* 버튼 */}
                <Box
                    style={{
                        display: "flex",
                        // width: "60px", 
                        // flexDirection: "row"
                    }}
                >
                    <button
                        onClick={() => handleButtonClick("smart")}
                        style={{
                            background: selectedKeys.includes("smart") ? "#EB9DA2" : "#fff",
                        }}
                    >
                        smart
                    </button>
                    <button
                        onClick={() => handleButtonClick("o2sat")}
                        style={{
                            background: selectedKeys.includes("o2sat") ? "#F0B884" : "#fff",
                        }}
                    >
                        O2sat
                    </button>
                    <button
                        onClick={() => handleButtonClick("map")}
                        style={{
                            background: selectedKeys.includes("map") ? "#E8E6A5" : "#fff",
                        }}
                    >
                        Map
                    </button>
                    <button
                        onClick={() => handleButtonClick("temp")}
                        style={{
                            background: selectedKeys.includes("temp") ? "#BBE8B5" : "#fff",
                        }}
                    >
                        Temp
                    </button>
                    <button
                        onClick={() => handleButtonClick("sbp")}
                        style={{
                            background: selectedKeys.includes("sbp") ? "#ACBBE8" : "#fff",
                        }}
                    >
                        SBP
                    </button>
                    <button
                        onClick={() => handleButtonClick("hr")}
                        style={{
                            background: selectedKeys.includes("hr") ? "#C5ACE8" : "#fff",
                        }}
                    >
                        HR
                    </button>
                </Box>
            </Box>
            <Box height="250px" m="-20px 0 0 0" >
                {/* 차트 컴포넌트 */}
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart
                        data={filteredData}
                        margin={{ top: 43, bottom: 40, right: 80, left: 80 }}
                    >
                        <CartesianGrid vertical={false} strokeOpacity={0.3} />
                        <XAxis
                            dataKey="time"
                            tickFormatter={(value) => value.slice(0, 16)}
                            onClick={(event) => {
                                handleXAxisClick(event.value);
                            }}
                        />
                        <YAxis yAxisId="smart" dataKey="smart" domain={[0, 100]} hide />
                        <YAxis yAxisId="o2sat" dataKey="o2sat" domain={[0, 100]} hide />
                        <YAxis yAxisId="map" dataKey="map" domain={[0, 100]} hide />
                        <YAxis yAxisId="temp" dataKey="temp" domain={[31, 90]} hide />
                        <YAxis yAxisId="sbp" dataKey="sbp" domain={[0, 80]} hide />
                        <YAxis yAxisId="hr" dataKey="hr" domain={[0, 100]} hide />
                        <Tooltip />
                        {lines}
                        <Brush
                            dataKey="time"
                            height={21}
                            stroke="#EB9DA2"
                            startIndex={0}
                            //endIndex={Math.min(5, data.length - 1)}
                            opacity="0.2"
                            fillOpacity={0.2}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </Box>
        </Box>
    );
}
