import React, { useContext, useEffect, useState } from "react";
import { ChartContext } from './ChartContext';

const Charts = () => {

  const { clickedXValue, makechart, denger } = useContext(ChartContext); // ChartContext로부터 clickedXValue, makechart, denger 값을 가져옵니다.
  console.log("denger", denger);
  const [updatedValue, setUpdatedValue] = useState(0); // updatedValue 상태와 값을 초기화합니다.

  useEffect(() => {
    console.log("chart클릭", clickedXValue);
    const date = clickedXValue ? clickedXValue.split(' ')[0] : ""; // clickedXValue에서 날짜 부분만 추출합니다.
    setUpdatedValue(date); // 추출한 날짜를 updatedValue 상태로 설정합니다.
  }, [clickedXValue]);

  const renderDengerStatus = () => {
    if (!denger) {
      return null; // 예외 처리: denger가 undefined 또는 null인 경우 null을 반환하도록 수정
    }
    return Object.entries(denger).map(([key, value]) => { // 객체를 배열로 만드는 작업
      return (
        <div key={key}>
          {key}: {value ? "정상" : "비정상"}
          <button onClick={() => makechart(key)}>버튼</button>
        </div>
      );
    });
  };

  return (
    <div>
       <div>클릭한 X 값: {updatedValue}</div>  {/*클릭한 X값을 출력 */}
      {renderDengerStatus()}  {/* denger 상태에 따라 정상 또는 비정상을 표시하고, 버튼을 클릭하면 makechart 함수를 호출합니다. */}
    </div>
  );
};

export default Charts;
