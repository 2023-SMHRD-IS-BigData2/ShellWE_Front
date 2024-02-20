import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
// import ProgressCircle from "./ProgressCircle";
import NewReleasesOutlinedIcon from '@mui/icons-material/NewReleasesOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import ShieldIcon from '@mui/icons-material/Shield';
import NewReleasesIcon from '@mui/icons-material/NewReleases';

const AllPatient = ({ title, subtitle, icon, progress, increase }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box width="100%" m="100px">
            <Box display="flex" justifyContent="space-between">
                <Box display="auto"
                    alignItems="center">
                    <Typography variant="h4" m="12px 0 0 0" sx={{
                        color:
                            title === 0 ? colors.greenAccent[500] :
                                colors.redAccent[500]
                    }}>
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
                <Box sx={{ scale: "1.5" }}>
                    <Typography variant="h1">
                        {title == 0 ?
                            // <ShieldIcon style={{ color: colors.greenAccent[400] }} />
                            <></>
                            :
                            <NewReleasesIcon style={{ color: colors.redAccent[500] }} />
                        }
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default AllPatient;
