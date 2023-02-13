import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import useResources from '~/hooks/useResources';

// singleton --> start region ////////////////////////////////////
// singleton --> end region //////////////////////////////////////

export default function Header ({}: IHeader) {
    const Resources = useResources();
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
        <Box component="header">
            <Typography component="h1" variant='h1' className='header-title'>Grilles-Musi</Typography>
        </Box>
    );
    // render --> end region /////////////////////////////////////
}

// props interface --> start region //////////////////////////////
interface IHeader {}
// props interface --> end region ////////////////////////////////