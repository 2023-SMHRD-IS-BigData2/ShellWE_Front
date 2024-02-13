import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
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
