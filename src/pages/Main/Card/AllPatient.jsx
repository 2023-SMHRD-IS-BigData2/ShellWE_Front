import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
// import ProgressCircle from "./ProgressCircle";

const AllPatient = ({ title, subtitle, icon, progress, increase }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box width="100%" m="100px">
            <Box display="flex" justifyContent="space-between">
                <Box display="auto"
                    alignItems="center">
                    <Typography variant="h4" m="12px 0 0 0" sx={{ color: colors.greenAccent[500] }}>
                        {subtitle}
                    </Typography>
                </Box>
                <Box>
                    {/* {icon} */}
                    <Typography
                        variant="h1"
                        fontWeight="bold"
                        sx={{ color: colors.grey[100] }}
                    >
                        {title}
                    </Typography>
                </Box>
                {/* <Box>
                    <ProgressCircle progress={progress} />
                    <Typography
                        variant="h5"
                        fontStyle="italic"
                        sx={{ color: colors.greenAccent[600] }}
                    >
                        {increase}
                    </Typography>
                </Box> */}
            </Box>
            {/* <Box display="flex" justifyContent="space-between" mt="2px">
                <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
                </Typography>
                <Typography
                    variant="h5"
                    fontStyle="italic"
                    sx={{ color: colors.greenAccent[600] }}
                >
                    {increase}
                </Typography>
            </Box> */}
        </Box>
    );
};

export default AllPatient;