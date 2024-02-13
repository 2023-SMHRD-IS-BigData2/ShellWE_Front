import React, { useContext} from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { ChartContext } from './ChartContext';

const Graph = () => {
    const { clickedXValue, data, graph } = useContext(ChartContext);
   

    // clickedXValue 값이 null인 경우에 대한 처리
    if (!clickedXValue) {
        return null;
    }

    // clickedXValue에서 "2024-01-01" 부분만 추출
    const clickedDate = clickedXValue.split(" ")[0];

    // clickedDate와 동일한 time 값을 가진 데이터만 필터링
    const filteredData = data.filter(item => item.time.includes(clickedDate));

    return (
        <LineChart width={1800} height={300} data={filteredData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis yAxisId={graph} dataKey={graph} orientation="right" />
            <Tooltip />
            <Line type="linear" dataKey={graph} stroke="red" yAxisId={graph} />
        </LineChart>
    );
};

export default Graph;
