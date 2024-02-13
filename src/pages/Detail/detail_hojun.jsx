import React, { useState, useEffect } from "react";
import Rechart from "./Rechart";
import Chart from "./Chart";
import Graph from "./graph";
import Date from "./DateComponent";
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { ChartContext } from "./ChartContext";


// 연동 및 데이터 집어넣기
const App = () => {
  let { num } = useParams() //메인에서 디테일 번호 전하는 파람
  console.log('useParams', num);

  const [data, setData] = useState(null); //스프링에서 받아온 값
  const [clickedXValue, setclickedXValue] = useState(null) // X축 클릭한 값
  const [denger, setdenger] = useState(null) // dengercolumn 가져온 값
  const [graph, setgraph] = useState(null) // 새로운 차트 만드는 키 값
  const [dateModal, setdateModal] = useState(false); // 달력이 열렸나 안렸나 확인
  const [StartDate, setSDate] = useState(null); // 달력의 시작값
  const [EndDate, setEDate] = useState(null); // 달력의 끝값

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


  // 디테일 페이지가 열렸을때 마지막 값이 출력
  useEffect(() => {
    if (data && data.length > 0) {
      setclickedXValue(EndDate);
    }
  }, [data,EndDate]);


  // 날짜 선택하면 그 날짜에 대한 값의 기준의 맞는 값들 넘어오는 useEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8088/boot/dengerColumns?patinum=${num}&date=${clickedXValue.split(' ')[0]}`);
        console.log(response.data.dengercolumn);
        setdenger(response.data.dengercolumn);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [clickedXValue, num]);

  // 처음에 시작하면 time의 맨 마지막값만 볼 수 있게 맨 끝값으로 설정
  useEffect(() => {
    if (data !== null && data.length > 0) {
      const lastData = data[data.length - 1];
      setSDate(lastData.time.split(' ')[0]);
      setEDate(lastData.time.split(' ')[0]);
    }
  }, [data]);

  // 값이 안나왔을때의 표시
  if (data === null) {
    return <div>Loading...</div>;
  }

  // 날짜의 대한 값 출력하기
  const handleXAxisClick = (value) => {
    setclickedXValue(value)
  };

  // 차트생성 버튼 클릭
  const makechart = (make) => {
    console.log("버튼 클릭");
    console.log("선택된 key 값:", make);
    setgraph(make);
  };

  // 열렸나 닫혔나 확인값
  const dateopen = () => {
    setdateModal(!dateModal);
  };


  return (
    <div>
      <div>
        <ChartContext.Provider value={{ clickedXValue, handleXAxisClick, makechart, data, denger, graph, setSDate, setEDate, StartDate,EndDate }}>
          <button onClick={dateopen}>달력</button>
          {dateModal && (
            <Date />
          )}
          <Rechart />
          <Chart />
          <Graph />
        </ChartContext.Provider>
      </div>
    </div>
  );
}

export default App;