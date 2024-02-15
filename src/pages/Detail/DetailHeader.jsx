import { Box, Typography, useTheme } from '@mui/material'
import React, { useState } from 'react'
import { tokens } from "../../theme";

const DetailHeader = ({title,subtitle}) => {

    
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box>
            <Box mb="30px">
                <Typography
                    variant="h2"
                    color={colors.grey[100]}
                    fontWeight="bold"
                    sx={{ m: "0 0 5px 0" }}
                >
                    {title}
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[400]}>
                    {subtitle}
                </Typography>
            </Box>
            
        </Box >
    )
}

export default DetailHeader