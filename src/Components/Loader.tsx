import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import styles from "../Sass/commonStyles.module.scss"

// singleton --> start region ////////////////////////////////////
// singleton --> end region //////////////////////////////////////

export default function Loader ({}: ILoader) {
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
        <Box className={styles['loader-container']}>
            <CircularProgress color='info' size={150}/>
        </Box>
    );
    // render --> end region /////////////////////////////////////
}

// props interface --> start region //////////////////////////////
interface ILoader {}
// props interface --> end region ////////////////////////////////