import React, { useState, useContext } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ChartContext } from './ChartContext'
import { Box, IconButton, InputBase, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CommentModal from '../DesktopOne/CommentModal';
import { DataGrid } from '@mui/x-data-grid';
import SendIcon from '@mui/icons-material/Send';

const DateComponent = ({ comments, setInputValue, handleSubmit, inputValue,
  isModalOpen, closeModal, openModal, num }) => {
  /**다크모드 */
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { setSDate, setEDate } = useContext(ChartContext)


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
  const commentColumns = [
    {
      field: "commentnum",
      headerName: "순번"
    },
    {
      field: "contents",
      headerName: "내용",
      flex: 1
    },
    {
      field: "inputdate",
      headerName: "입력시간",
      flex: 0.4
    },
    {
      field: "membername",
      headerName: "작성자"
    }
  ];
  // lists 값이 null인 경우 로딩 상태를 표시하거나 다른 방식으로 처리
  if (comments === null) {
    return <div>Loading...</div>;
  }
  // 인덱스 1부터 시작
  const commentWithId = comments.map((comments, index) => ({
    ...comments,
    id: index + 1,
  }));

  return (
    <Box>

      <Box
        backgroundColor={colors.primary[400]}
        gridColumn="span 4"
        gridRow="span 2"
        borderRadius="20px"
        height="350px"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center", // 수직 가운데 정렬
          alignItems: "center" // 수평 가운데 정렬
        }}
      >
        <Box onClick={() => {
          openModal(num)
        }}
          backgroundColor={colors.greenAccent[500]}
          p="5px 10px"
          borderRadius="4px"
          width="80px"
          marginBottom="20px"
        >
          <Box display="auto flex"
            justifyContent="center"
          >
            <MailOutlineIcon />
          </Box>
        </Box>
        {/* 달력 */}
        <DatePicker // 달력
          selected={startDate} // 선택된 시작 날짜
          onChange={onChange} // 날짜가 선택되었을 때 실행되는 콜백 함수
          startDate={startDate} // 시작 날짜
          endDate={endDate} // 끝 날짜
          selectsRange // 범위 선택 활성화
          inline // 인라인 형태로 DatePicker 표시
        />
      </Box>
      <CommentModal
        isOpen={isModalOpen} closeModal={closeModal}>
        <Box m="40px">
          <Box
            m="25px 0 0 0"
            height="45vh"
            sx={{
              "& .MuiDataGrid-root": {
                border: "none",
              },
              "& .MuiDataGrid-cell": {
                borderBottom: "none",
              },
              "& .name-column--cell": {
                color: colors.greenAccent[300],
              },
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: colors.grey[700],
                borderBottom: "none",
              },
              "& .MuiDataGrid-footerContainer": {
                borderTop: "none",
                backgroundColor: colors.grey[700],
              },
            }}>
            <DataGrid
              rows={commentWithId}
              columns={commentColumns}
            />
          </Box>
          <Box
            m="20px"
            display="flex"
            backgroundColor={colors.primary[400]}
            borderRadius="30px"
          >
            <InputBase sx={{ ml: 2, flex: 1 }}
              placeholder="텍스트를 입력하시오"
              value={inputValue}
              onChange={(e) => { setInputValue(e.target.value) }}
            />
            <IconButton type="submit" onClick={handleSubmit} sx={{ p: 1 }}>
              <SendIcon />
            </IconButton>
          </Box>
        </Box>
      </CommentModal>
    </Box>
  );
};

export default DateComponent;
