import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";

const StatBox = ({ title, subtitle, icon }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box width="100%" m="100px">
            <Box display="flex" justifyContent="space-between" width="200px">
                <Box>
                    <Typography
                        variant="h2"
                        fontWeight="bold"
                        sx={{
                            color: colors.grey[100],
                            scale: "1.6"
                        }}
                    >
                        {icon}
                    </Typography>
                </Box>
                <Box>
                    <Typography
                        variant="h2"
                        fontWeight="bold"
                        sx={{ color: colors.grey[100] }}
                    >
                        {title}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default StatBox;
