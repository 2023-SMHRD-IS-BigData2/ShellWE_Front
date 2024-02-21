import React, { useContext } from "react";
import { Box,useTheme } from "@mui/material";
import { ColorModeContext, tokens } from "../../theme";
import Data from "./Data";


const List = () => {
    const {colors} = useContext(ColorModeContext);
    /** 다크모드 */
    // const theme = useTheme();
    // const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Box
                m="25px 0 0 0"
                height="85vh"
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
                <Data />
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