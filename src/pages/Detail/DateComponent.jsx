import React, { useState,useContext } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ChartContext } from './ChartContext'

const DateComponent = () => {
  const {setSDate,setEDate} = useContext(ChartContext)

  const [startDate, setStartDate] = useState(new Date()); // 시작 날짜 상태와 상태를 업데이트하는 함수
  const [endDate, setEndDate] = useState(null); // 끝 날짜 상태와 상태를 업데이트하는 함수

  const onChange = (dates) => {
    const [start, end] = dates; // 선택된 날짜 배열에서 시작 날짜와 끝 날짜 추출
    setStartDate(start); // 시작 날짜 상태 업데이트
    setEndDate(end); // 끝 날짜 상태 업데이트

    if (start) {
      const formattedStartDate = start.toISOString().split('T')[0]; // 시작 날짜를 ISO 8601 형식으로 변환하여 날짜 부분만 추출
      setSDate(formattedStartDate); // 포맷된 시작 날짜 출력
    } else {
      setSDate(start); // 시작 날짜가 없는 경우 출력
    }

    if (end) {
      const formattedEndDate = end.toISOString().split('T')[0]; // 끝 날짜를 ISO 8601 형식으로 변환하여 날짜 부분만 추출
      setEDate(formattedEndDate); // 포맷된 끝 날짜 출력
    } else {
      setEDate(end); // 끝 날짜가 없는 경우 출력
    }
  };

  return (
    <DatePicker // 달력
      selected={startDate} // 선택된 시작 날짜
      onChange={onChange} // 날짜가 선택되었을 때 실행되는 콜백 함수
      startDate={startDate} // 시작 날짜
      endDate={endDate} // 끝 날짜
      selectsRange // 범위 선택 활성화
      inline // 인라인 형태로 DatePicker 표시
    />
  );
};

export default DateComponent;
