import { Button, Typography, TextField, InputLabel, FormLabel } from "@mui/material";
import { Box } from "@mui/system";
import React, { ChangeEvent, useEffect, useState } from "react";
import styles from "~/Sass/scoreInitStyles.module.scss";
import fs from 'fs';

// singleton --> start region ////////////////////////////////////
// singleton --> end region //////////////////////////////////////

export default function ScoreInit({}: IScoreInit) {
	// state --> start region ////////////////////////////////////
    const [filePath, setFilePath] = useState<string |null>(null);
	// state --> end region //////////////////////////////////////

	// hooks --> start region ////////////////////////////////////
	// hooks --> end region //////////////////////////////////////

	// methods --> start region //////////////////////////////////
    const readFile = async (file: Blob | null) => {
        if (file) {
            if (file.type !== 'application/json') {
                throw new Error('wrong format file');
            }
    
            const reader = new FileReader();
    
            reader.onload = async (e) => {
                console.log('load start')
                const text = JSON.parse(e.target?.result as string);
                console.log("result", text);
            }
    
            reader.onloadend = () => {
                console.log('loadEnd');
            }
            reader.readAsText(file)
        }
    }
	// methods --> end region ////////////////////////////////////

	// useEffect --> start region ////////////////////////////////
	// useEffect --> end region //////////////////////////////////

	// render --> start region ///////////////////////////////////
	return (
		<Box className={styles.viewContainer} component="section">
			<Box>
				<Typography variant="h2">Bienvenue sur Grilles-Musi</Typography>
				<Typography>
					Ici vous pouvez créer vos grilles de musicale efficacement, rapidement et gratuitement
				</Typography>
			</Box>
			<Box className={styles.buttonsContainer}>
					<Button className={styles.button}>
						<Typography fontWeight="bold" sx={{ marginBottom: "1rem" }}>Créer une grille</Typography>
						<Typography>Créer une grille a partir de 0</Typography>
					</Button>
					<input type="file" name="file" id="file" hidden onChange={(e) => readFile((e.target.files as FileList)[0])}/>
                    <Button htmlFor="file" component="label" className={styles.button}>
					    <Typography fontWeight="bold" sx={{ marginBottom: "1rem" }}>Importer une grille</Typography>
					    <Typography>Modifier vos grilles a partir de vos fichier *.nckm</Typography>
                    </Button>
			</Box>
		</Box>
	);
	// render --> end region /////////////////////////////////////
}

// props interface --> start region //////////////////////////////
interface IScoreInit {}
// props interface --> end region ////////////////////////////////
