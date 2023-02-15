import { Button, IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react'
import { ScoreDetail } from '~/types/contracts';
import styles from "~/Sass/scoreView.module.scss"
import Cross from "@mui/icons-material/Close"
import Measure from './Measure';
import styleResources from '~/resources/styleResources';

// singleton --> start region ////////////////////////////////////
// singleton --> end region //////////////////////////////////////

export default function PartScore ({ deletePart, deleteMeasure, onSelectPart, part, isSelected }: IAddPartScore) {
    // state --> start region ////////////////////////////////////
    const [deleteVisible, setDeleteVisible] = useState<boolean>(false)
    // state --> end region //////////////////////////////////////

    // hooks --> start region ////////////////////////////////////
    // hooks --> end region //////////////////////////////////////

    // methods --> start region //////////////////////////////////
    // methods --> end region ////////////////////////////////////

    // useEffect --> start region ////////////////////////////////
    // useEffect --> end region //////////////////////////////////

    // render --> start region ///////////////////////////////////
    return (
        <Box component="li" onClick={onSelectPart} onMouseEnter={() => setDeleteVisible(true)} onMouseLeave={() => setDeleteVisible(false)} style={{ borderColor: isSelected ? '#383e42' : '#ffffff' }} className={styles.partContainer}>
            <Box className={styles.headerPartScoreContainer}>
                <Typography textTransform="uppercase" fontWeight="bold" style={{ textDecoration: 'underline', marginBlock: "0.5rem" }}>{part.partName}</Typography>
                {deleteVisible && (
                    <IconButton onClick={deletePart}>
                        <Cross/>
                    </IconButton>
                )}
            </Box>
            <Box>
                <Box component="ul" className={styles.measuresContainer}>
                    {part.content.map((measure, i) => {
                        return <Measure deleteMeasure={() => deleteMeasure(i)}/>
                    })}
                </Box>
            </Box>
        </Box>
    );
    // render --> end region /////////////////////////////////////
}

// props interface --> start region //////////////////////////////
interface IAddPartScore {
    deletePart: () => void;
    deleteMeasure: (index: number) => void;
    onSelectPart: () => void;
    part: ScoreDetail;
    isSelected?: boolean;
}
// props interface --> end region ////////////////////////////////