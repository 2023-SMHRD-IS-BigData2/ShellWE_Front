import { Box, Typography, useTheme } from "@mui/material";
import { ColorModeContext, tokens } from "../../../theme";
import { useContext } from "react";

const AllPatient = ({ title, subtitle, icon }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    // const {colors} = useContext(ColorModeContext);


    return (
        <Box width="100%" m="0 10% 0 20%">
            <Box display="flex" justifyContent="space-between">
                <Box
                    alignItems="center" display="flex"
                >
                    <Typography variant="h2" mt="6px" sx={{ color: colors.greenAccent[500], scale: "2" }}>
                        {icon}
                    </Typography>
                </Box>
                <Box display="flex"
                    alignItems="center"
                >
                    <Typography variant="h2"
                        fontWeight="bold"
                        width="120px"
                        justifyContent="center"
                        display="flex"
                        sx={{ color: colors.greenAccent[500] }}>
                        {subtitle}
                    </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                    <Typography
                        variant="h1"
                        fontWeight="bold"
                        m="12px"
                        sx={{ color: colors.grey[100] }}
                    >
                        {title}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default AllPatient;
