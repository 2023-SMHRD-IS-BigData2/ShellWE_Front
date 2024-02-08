import React from 'react';
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
// import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import StatBox from './StatBox';


const App = () => {

  // 더미 데이터
  const cardData = [
    { id: 1, title: '카드 1', content: '이것은 첫 번째 카드입니다.' },
    { id: 2, title: '카드 2', content: '이것은 두 번째 카드입니다.' },
    { id: 3, title: '카드 3', content: '이것은 세 번째 카드입니다.' },
  ];

  // 각각의 카드를 렌더링하는 함수형 컴포넌트
  const Card = ({ title, content }) => (
    <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', margin: '10px' }}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );

  // 카드 목록을 렌더링하는 함수형 컴포넌트
  const CardList = ({ data }) => (
    <div>
      {data.map(card => (
        <Card key={card.id} title={card.title} content={card.content} />
      ))}
    </div>
  );

  // App 컴포넌트
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [

    { field: "id", headerName: "순번", },
    { field: "name", headerName: "환자명" },
    {
      field: "age",
      headerName: "나이",
      cellClassName: "age-column--cell",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {

      field: "bloodtype",
      headerName: "혈액형",
    },
    {
      field: "gender",
      headerName: "성별",
    },
    {
      field: "hpdate",
      headerName: "입원일자",
    },
    {
      field: "physician",
      headerName: "담당 의료진",
    },
    {
      field: "sepsisscore",
      headerName: "SMART",
    },
    {
      field: "sepsisslevel",
      headerName: "패혈증 상태",
    },
    {
      field: "ward",
      headerName: "병동",
    },
  ];

  return (
    <Box m="20px">
      <div>
        <h1>카드 형식의 화면</h1>
        <CardList data={cardData} />
      </div>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="34"
            subtitle="패혈증 의심환자"
            progress="0.14"
            increase="+14%"
            icon={
              <PeopleOutlinedIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
      </Box>
      <Box m="20px">
        <Box
          m="40px 0 0 0"
          height="75vh"
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
              backgroundColor: colors.blueAccent[700],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: colors.primary[400],
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: colors.blueAccent[700],
            },
            "& .MuiCheckbox-root": {
              color: `${colors.greenAccent[200]} !important`,
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `${colors.grey[100]} !important`,
            },
          }}
        >
          <DataGrid
            rows={mockDataContacts}
            columns={columns}
            components={{ Toolbar: GridToolbar }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default App;
