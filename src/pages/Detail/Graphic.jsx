import React, { PureComponent } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Brush } from "recharts";
import jsonData from "./jsondata.json"; // JSON 파일 import
import "./Graphic.css";
const data = jsonData; // jsonData를 data 변수에 할당
export default class Example extends PureComponent {
    // 생성자 메소드 시작할때의 부분 선택
    constructor(props) {
        super(props);
        this.state = {
            selectedKeys: ["Smart"], // 기본적으로 모든 기준을 선택된 상태로 설정
        };
    }
    // 배열을 체크하게 되면 새 배열을 생성해 추가 삭제하는 함수
    handleButtonClick = (value) => {
        this.setState((prevState) => {
            let selectedKeys = [...prevState.selectedKeys];
            if (selectedKeys.includes(value)) {
                selectedKeys = selectedKeys.filter((key) => key !== value);
            } else {
                selectedKeys.push(value);
            }
            return { selectedKeys };
        });
    };
    render() {
        // selectedKeys 배열의 각 항목에 대한 선(Line)을 생성하는 코드
        const { selectedKeys } = this.state;
        const colors = { Smart: "#EB9DA2", O2Sat: "#F0B884", MAP: "#E8E6A5", Temp: "#BBE8B5", EtCO2: "#ACBBE8", HR: "#C5ACE8" }; // 각 항목에 대한 색상 배열
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
                    <button
                        onClick={() => this.handleButtonClick("Smart")}
                        style={{
                            background: selectedKeys.includes("Smart") ? "#EB9DA2" : "#fff",
                        }}
                    >
                        Smart
                    </button>
                    <button
                        onClick={() => this.handleButtonClick("O2Sat")}
                        style={{
                            background: selectedKeys.includes("O2Sat") ? "#F0B884" : "#fff",
                        }}
                    >
                        O2Sat
                    </button>
                    <button
                        onClick={() => this.handleButtonClick("MAP")}
                        style={{
                            background: selectedKeys.includes("MAP") ? "#E8E6A5" : "#fff",
                        }}
                    >
                        MAP
                    </button>
                    <button
                        onClick={() => this.handleButtonClick("Temp")}
                        style={{
                            background: selectedKeys.includes("Temp") ? "#BBE8B5" : "#fff",
                        }}
                    >
                        Temp
                    </button>
                    <button
                        onClick={() => this.handleButtonClick("EtCO2")}
                        style={{
                            background: selectedKeys.includes("EtCO2") ? "#ACBBE8" : "#fff",
                        }}
                    >
                        EtCO2
                    </button>
                    <button
                        onClick={() => this.handleButtonClick("HR")}
                        style={{
                            background: selectedKeys.includes("HR") ? "#C5ACE8" : "#fff",
                        }}
                    >
                        HR
                    </button>
                </div>
                <div style={{ flex: 1 }} >
                    {/* 차트의 전체적인 크기 설정 */}
                    <ResponsiveContainer width="100%" height={360}>
                        <LineChart width="100%" height="100%" data={data} margin={{bottom:5, right: 30, left: 20 }}>
                            <CartesianGrid strokeDasharray="3" />
                            {/* 각각의 Y축 설정 */}
                            <XAxis dataKey="name" />
                            <YAxis yAxisId="Smart" dataKey="Smart" domain={[0, 100]} hide />
                            <YAxis yAxisId="O2Sat" dataKey="O2Sat" domain={[0, 110]} hide />
                            <YAxis yAxisId="MAP" dataKey="MAP" domain={[0, 100]} hide />
                            <YAxis yAxisId="Temp" dataKey="Temp" domain={[0, 160]} hide />
                            <YAxis yAxisId="EtCO2" dataKey="EtCO2" domain={[0, 160]} hide />
                            <YAxis yAxisId="HR" dataKey="HR" domain={[0, 100]} hide />
                            <Tooltip />
                            {lines}
                            <Brush
                                dataKey="name" // 이름기준?
                                height={21} // 높이 설정
                                stroke="#EB9DA2" //색깔 설정
                                startIndex={0} //어디서부터 시작할지
                                endIndex={Math.min(8, data.length - 1)} // 보여줄 데이터 범위 설정 
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div >
        );
    }
}
