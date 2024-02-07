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

    { field: "id", headerName: "patinum", },
    { field: "name", headerName: "name" },
    {
      field: "age",
      headerName: "age",
      cellClassName: "age-column--cell",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {

      field: "bloodtype",
      headerName: "bloodtype ",
    },
    {
      field: "gender",
      headerName: "gender",
    },
    {
      field: "hpdate",
      headerName: "hpdate",
    },
    {
      field: "physician",
      headerName: "physician",
    },
    {
      field: "sepsisscore",
      headerName: "sepsisscore",
    },
    {
      field: "sepsisslevel",
      headerName: "sepsisslevel",
    },
    {
      field: "ward",
      headerName: "ward",
    },
  ];

  return (
    <Box m="20px">
      {/* <Header
        title="CONTACTS"
        subtitle="List of Contacts for Future Reference"
      /> */}
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
  );
};

export default Contacts;
