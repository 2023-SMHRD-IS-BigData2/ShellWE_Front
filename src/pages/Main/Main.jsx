import React from "react";
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
// import Header from "../../components/Header";
import { useTheme } from "@mui/material";

const Contacts = () => {
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
           // 스크롤 추가
           overflow: "auto",
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

const ContactsWrapper = () => (
  <Box>
    <Contacts />
  </Box>
);

export default ContactsWrapper;
