import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
// import { mockDataContacts } from "../../data/mockData";
// import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import columns from './columns.json';
import axios from "axios";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [lists, setList] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8088/boot/getPatient");
        setList(response.data[0]);
        console.log("lists", response.data[0]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  // lists 값이 null인 경우 로딩 상태를 표시하거나 다른 방식으로 처리
  if (lists === null) {
    return <div>Loading...</div>;
  }

  const listsWithId = lists.map((list, index) => ({
    ...list,
    id: index + 1,
  }));

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
<<<<<<< HEAD
          rows={lists}
=======
          rows={listsWithId}
>>>>>>> a119b36603888946d0725a5774aa170af41b04a1
          columns={columns.columns}
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
