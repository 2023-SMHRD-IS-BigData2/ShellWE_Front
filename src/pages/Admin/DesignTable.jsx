import React, { useContext } from "react";
import { Box, useTheme } from "@mui/material";
import { ColorModeContext, tokens } from "../../theme";
// import Data from "./Data";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";


const List = ({ children, columnslist, memberData }) => {
    // const {colors} = useContext(ColorModeContext);
    /** 다크모드 */
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Box
                m="25px 0 0 0"
                height="80vh"
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
                    rows={memberData}
                    columns={columnslist}
                    components={{ Toolbar: GridToolbar }}
                // autoPageSize={[10]}
                />
                {/* {children} */}
            </Box>
        </Box>
    );
};

const ContactsWrapper = () => (
    <Box>
        <List />
    </Box>
);

export default ContactsWrapper;