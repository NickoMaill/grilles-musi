import { IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react'
import styles from "~/Sass/scoreView.module.scss"
import Cross from "@mui/icons-material/Close"

// singleton --> start region ////////////////////////////////////
// singleton --> end region //////////////////////////////////////

export default function Measure ({ deleteMeasure }: IMeasure) {
    // state --> start region ////////////////////////////////////
    const [deleteVisible, setDeleteVisible] = useState<boolean>(false);
    // state --> end region //////////////////////////////////////

    // hooks --> start region ////////////////////////////////////
    // hooks --> end region //////////////////////////////////////

    // methods --> start region //////////////////////////////////
    // methods --> end region ////////////////////////////////////

    // useEffect --> start region ////////////////////////////////
    // useEffect --> end region //////////////////////////////////

    // render --> start region ///////////////////////////////////
    return (
        <Box component="li" onMouseEnter={() => setDeleteVisible(true)} onMouseLeave={() => setDeleteVisible(false)} className={styles.measure}>
            <Box component="div" className={styles.diagonale}></Box>
            <Box component="div" className={styles.diagonale2}></Box>
            {deleteVisible && (
                    <IconButton className={styles.measureDeleteButton} onClick={deleteMeasure}>
                        <Cross/>
                    </IconButton>
            )}
        </Box>
    );
    // render --> end region /////////////////////////////////////
}

// props interface --> start region //////////////////////////////
interface IMeasure {
    deleteMeasure: () => void;
}
// props interface --> end region ////////////////////////////////