import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import styles from "~/Sass/scoreInitStyles.module.scss";
import { ScoreType } from "~/types/contracts";
import Modal from "./Modal";
import ScoreInitForm from "./ScoreInitForm"
// singleton --> start region ////////////////////////////////////
// singleton --> end region //////////////////////////////////////

export default function ScoreInit({ initScore }: IScoreInit) {
	// state --> start region ////////////////////////////////////
	const [isOpen, setIsOpen] = useState<boolean>(false);
	// state --> end region //////////////////////////////////////

	// hooks --> start region ////////////////////////////////////
	// hooks --> end region //////////////////////////////////////

	// methods --> start region //////////////////////////////////
	const handleOpen = (e?: ScoreType) => {
		setIsOpen(!isOpen);
		if (e) {
			console.log("scoreInit", e)
			initScore(e)
		}
	}

	const readFile = async (file: Blob | null) => {
		if (file) {
			if (file.type !== "application/json") {
				throw new Error("wrong format file");
			}

			const reader = new FileReader();

			reader.onload = async (e) => {
				const text = JSON.parse(e.target?.result as string);
				return initScore(text);
			};

			reader.readAsText(file);
		}
	};
	// methods --> end region ////////////////////////////////////

	// useEffect --> start region ////////////////////////////////
	// useEffect --> end region //////////////////////////////////

	// render --> start region ///////////////////////////////////
	return (
		<>
			<Box className={styles.viewContainer} component="section">
				<Box textAlign="center">
					<Typography variant="h2">Bienvenue sur Grilles-Musi</Typography>
					<Typography component="span" variant="subtitle1">Ici vous pouvez créer vos grilles de musicale efficacement, rapidement et gratuitement</Typography>
				</Box>
				<Box className={styles.buttonsContainer}>
					<Button onClick={() => handleOpen()} className={styles.button}>
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
			<Modal title='Créer votre Grille' contextText="Votre grille" isOpen={isOpen} handleClose={() => handleOpen()}>
				<ScoreInitForm initScore={(init) => handleOpen(init)}/>
			</Modal>
		</>
	);
	// render --> end region /////////////////////////////////////
}

// props interface --> start region //////////////////////////////
interface IScoreInit {
	initScore: (score: ScoreType) => void;
}
// props interface --> end region ////////////////////////////////
