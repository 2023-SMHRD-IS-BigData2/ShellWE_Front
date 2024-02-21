import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";

const AllPatient = ({ title, subtitle, icon }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box width="100%" m="0 80px 0 80px">
            <Box display="flex" justifyContent="space-between">
                <Box display="auto"
                    alignItems="center"
                    mt="5px">
                    <Typography variant="h2" fontWeight="bold" sx={{
                        color:
                            title === 0 ? colors.greenAccent[500] :
                                colors.redAccent[500]
                    }}>
                        {subtitle}
                    </Typography>
                </Box>
                <Box display="auto"
                    alignItems="center">
                    <Typography
                        variant="h1"
                        fontWeight="bold"
                        sx={{ color: colors.grey[100] }}
                    >
                        {title}
                    </Typography>
                </Box>
                <Box display="auto"
                    alignItems="center">
                    <Typography variant="h1" sx={{ scale: "1.5" }}>
                        {title == 0 ?
                            <></>
                            :
                            icon
                        }
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default AllPatient;
