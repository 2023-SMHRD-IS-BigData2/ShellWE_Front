import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import ProgressCircle from "./ProgressCircle";

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="50px">
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
        <Box
          position='relative'
          display='flex'
          alignItems='center'
        // justifyContent='center'
        // flexDirection='column'
        // transform='scale(1.4)'
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
            left='15%'
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
