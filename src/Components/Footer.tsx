import { Box, Typography } from '@mui/material';
import React from 'react'

// singleton --> start region ////////////////////////////////////
// singleton --> end region //////////////////////////////////////

export default function Footer ({}: IFooter) {
    // state --> start region ////////////////////////////////////
    // state --> end region //////////////////////////////////////

    // hooks --> start region ////////////////////////////////////
    // hooks --> end region //////////////////////////////////////

    // methods --> start region //////////////////////////////////
    // methods --> end region ////////////////////////////////////

    // useEffect --> start region ////////////////////////////////
    // useEffect --> end region //////////////////////////////////

    // render --> start region ///////////////////////////////////
    return (
        <Box component="footer">
            <Typography>Footer</Typography>
        </Box>
    );
    // render --> end region /////////////////////////////////////
}

// props interface --> start region //////////////////////////////
interface IFooter {}
// props interface --> end region ////////////////////////////////