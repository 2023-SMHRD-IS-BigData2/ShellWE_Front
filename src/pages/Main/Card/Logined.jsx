import { Box, Typography, useTheme } from "@mui/material";
import { ColorModeContext, tokens } from "../../../theme";
import { useContext } from "react";

const StatBox = ({ title, subtitle, icon }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    // const {colors} = useContext(ColorModeContext);
    return (
        <Box width="100%" m="100px">
            <Box display="flex" justifyContent="space-between" width="130px" mr="150px">
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
                        // fontWeight="bold"
                        sx={{ color: colors.grey[100] }}
                    >
                        {title}
                    </Typography>
                </Box>
            </Box>
            <Box
                position="fixed" top="13%" left="27%"
            >
                <Typography sx={{ color: colors.grey[200] }} variant="h5">
                    님 환영합니다
                </Typography>
            </Box>
        </Box>
    );
};

export default StatBox;
