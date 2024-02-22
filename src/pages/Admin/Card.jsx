import { Box, Typography, useTheme } from "@mui/material";
import { ColorModeContext, tokens } from "../../theme";
import { useContext } from "react";
import PersonAddRoundedIcon from '@mui/icons-material/PersonAddRounded';

const StatBox = ({ title, subtitle, icon }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    // const {colors} = useContext(ColorModeContext);

    const MemberSum = "사용자 추가";

    return (
        <Box
            // width="20%"
            // height="150px"
            // backgroundColor={colors.primary[400]}
            // boxShadow="0px 2px 4px rgba(0, 0, 0, 0.2);"
            // display="flex"
            // alignItems="center"
            // justifyContent="center"
            // borderRadius="30px"
        >
            <Box width="100%" m="100px">
                <Box display="flex" justifyContent="space-between" width="200px">
                    <Box>
                        <Typography
                            variant="h2"
                            fontWeight="bold"
                            sx={{
                                color: colors.greenAccent[500],
                                scale: "1.6"
                            }}
                        >
                            <PersonAddRoundedIcon />
                        </Typography>
                    </Box>
                    <Box>
                        <Typography
                            variant="h2"
                            sx={{ color: colors.greenAccent[500] }}
                        >
                            {MemberSum}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default StatBox;
