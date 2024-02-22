import { Box, Typography, useTheme } from "@mui/material";
import { ColorModeContext, tokens } from "../../../theme";
import ProgressCircle from "./ProgressCircle";
import { useContext } from "react";

const StatBox = ({ title, subtitle,  progress, increase }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    // const {colors} = useContext(ColorModeContext);

    return (
        <Box width="100%" m="40px">
            <Box display="flex" justifyContent="space-between">
                <Box display="auto"
                    alignItems="center">
                    <Typography variant="h2" fontWeight="bold" m="6px 0 0 0" sx={{ color: colors.greenAccent[500] }}>
                        {subtitle}
                    </Typography>
                </Box>
                <Box>
                    <Typography
                        variant="h1"
                        fontWeight="bold"
                        m="0 10px 0 10px"
                        sx={{ color: colors.grey[100] }}
                    >
                        {title}
                    </Typography>
                </Box>
                <Box
                    position='relative'
                    display='flex'
                    alignItems='center'
                >
                    <Box sx={{
                        scale: "1.5"
                    }}>
                        <ProgressCircle progress={progress} />
                    </Box>

                    <Typography
                        variant="h5"
                        fontStyle="italic"
                        sx={{ color: colors.greenAccent[600] }}
                        position='absolute'
                        top='25%'
                        left='11%'
                        transform='translate(-50%, -50%)'
                    >
                        {increase}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default StatBox;
