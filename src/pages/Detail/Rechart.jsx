import React, { useState, useContext, useEffect } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Brush } from "recharts";
import { ChartContext } from './ChartContext'
import "./chart.css";

export default function Example() {
    // state 설정
    const [selectedKeys, setSelectedKeys] = useState(["map"]); // 처음에 출력할 값
    const [filteredData, setFilteredData] = useState([]); // 달력의 기준으로 필터링된 값

    // ChartContext에서 필요한 값 가져오기
    const { handleXAxisClick, data, StartDate, EndDate } = useContext(ChartContext)

    // 데이터와 날짜 값 확인
    console.log("datas", data);
    console.log("StartDate", StartDate);
    console.log("EndDate", EndDate);

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
    const colors = {
        Smart: "#EB9DA2",
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
            stroke={key === "Smart" ? "#EB9DA2" : colors[key]}
            strokeWidth={key === "Smart" ? 6 : 3}
            fill={colors[key]}
            activeDot={{ r: 8 }}
            yAxisId={key}
            label={({ x, y, value }) => (
                <text x={x} y={y} dy={-8} fill={colors[key]} textAnchor="middle">
                    {value}
                </text>
            )}
        />
    ));

    return (
        <div style={{ display: "flex" }}>
            <div style={{ display: "flex", width: "200px", flexDirection: "column" }}>
                {/* 버튼 클릭 이벤트 처리 */}
                <button
                    onClick={() => handleButtonClick("Smart")}
                    style={{
                        background: selectedKeys.includes("Smart") ? "#EB9DA2" : "#fff",
                    }}
                >
                    Smart
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
            </div>
            <div style={{ flex: 1 }}>
                {/* 차트 컴포넌트 */}
                <ResponsiveContainer width="100%" height={360}>
                    <LineChart width="100%" height="100%" data={filteredData} margin={{ bottom: 5, right: 70, left: 80 }}>
                        <CartesianGrid strokeDasharray="3" />
                        <XAxis
                            dataKey="time"
                            onClick={(event) => {
                                handleXAxisClick(event.value);
                            }}
                        />
                        <YAxis yAxisId="Smart" dataKey="Smart" domain={[0, 100]} hide />
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
                            endIndex={Math.min(5, data.length - 1)}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
