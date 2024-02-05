import React, { useEffect, useState } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Brush } from "recharts";

import "./Graphic.css";

export default function Example({ data }) {
    const [selectedKeys, setSelectedKeys] = useState(["Smart"]);

    
    const handleButtonClick = (value) => {
        setSelectedKeys((prevSelectedKeys) => {
            if (prevSelectedKeys.includes(value)) {
                return prevSelectedKeys.filter((key) => key !== value);
            } else {
                return [...prevSelectedKeys, value];
            }
        });
    };

    const colors = {
        Smart: "#EB9DA2",
        O2Sat: "#F0B884",
        MAP: "#E8E6A5",
        Temp: "#BBE8B5",
        EtCO2: "#ACBBE8",
        HR: "#C5ACE8",
    };

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
                    onClick={() => handleButtonClick("Smart")}
                    style={{
                        background: selectedKeys.includes("Smart") ? "#EB9DA2" : "#fff",
                    }}
                >
                    Smart
                </button>
                <button
                    onClick={() => handleButtonClick("O2Sat")}
                    style={{
                        background: selectedKeys.includes("O2Sat") ? "#F0B884" : "#fff",
                    }}
                >
                    O2Sat
                </button>
                <button
                    onClick={() => handleButtonClick("MAP")}
                    style={{
                        background: selectedKeys.includes("MAP") ? "#E8E6A5" : "#fff",
                    }}
                >
                    MAP
                </button>
                <button
                    onClick={() => handleButtonClick("Temp")}
                    style={{
                        background: selectedKeys.includes("Temp") ? "#BBE8B5" : "#fff",
                    }}
                >
                    Temp
                </button>
                <button
                    onClick={() => handleButtonClick("EtCO2")}
                    style={{
                        background: selectedKeys.includes("EtCO2") ? "#ACBBE8" : "#fff",
                    }}
                >
                    EtCO2
                </button>
                <button
                    onClick={() => handleButtonClick("HR")}
                    style={{
                        background: selectedKeys.includes("HR") ? "#C5ACE8" : "#fff",
                    }}
                >
                    HR
                </button>
            </div>
            <div style={{ flex: 1 }}>
                <ResponsiveContainer width="100%" height={360}>
                    <LineChart width="100%" height="100%" data={data} margin={{ bottom: 5, right: 70, left: 70 }}>
                        <CartesianGrid strokeDasharray="3" />
                        <XAxis
                            dataKey="time"
                        />
                        <YAxis yAxisId="Smart" dataKey="Smart" domain={[0, 100]} hide />
                        <YAxis yAxisId="O2Sat" dataKey="O2Sat" domain={[0, 100]} hide />
                        <YAxis yAxisId="MAP" dataKey="MAP" domain={[0, 100]} hide />
                        <YAxis yAxisId="Temp" dataKey="Temp" domain={[31, 90]} hide />
                        <YAxis yAxisId="EtCO2" dataKey="EtCO2" domain={[0, 80]} hide />
                        <YAxis yAxisId="HR" dataKey="HR" domain={[0, 100]} hide />
                        <Tooltip />
                        {lines}
                        <Brush
                            dataKey="time"
                            height={21}
                            stroke="#EB9DA2"
                            startIndex={0}
                            endIndex={Math.min(7, data.length - 1)}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}