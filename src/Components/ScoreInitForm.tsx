import { Button, Container, FormControl, FormLabel, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { FormEvent, useState } from "react";
import { metrics } from "~/resources/dictionary/metricsDictionary";
import { chordsDictionary } from "~/resources/dictionary/tuneDictionnary";
import { ScoreType } from "~/types/contracts";
import styles from "../Sass/form.module.scss";

// singleton --> start region ////////////////////////////////////
// singleton --> end region //////////////////////////////////////

export default function ScoreInitForm({ initScore }: IScoreInitForm) {
	// state --> start region ////////////////////////////////////
    const [title, setTitle] = useState<string>("");
    const [artist, setArtist] = useState<string>("");
    const [tone, setTone] = useState<string>("");
    const [division, setMetric] = useState<number>(4);
    const [subdivision, setSubdivision] = useState<number>(4);
    const [tempo, setTempo] = useState<number>(120);
	// state --> end region //////////////////////////////////////

	// hooks --> start region ////////////////////////////////////
	// hooks --> end region //////////////////////////////////////
    
	// methods --> start region //////////////////////////////////
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const scoreInitObj: ScoreType = {
            info: {
                title: title,
                subtitle: artist,
                bpm: tempo,
                division: division,
                subdivision: subdivision,
                tone: tone
            },
            score: [],
            additionalText: []
        }
        return initScore(scoreInitObj);
    }
	// methods --> end region ////////////////////////////////////

	// useEffect --> start region ////////////////////////////////
	// useEffect --> end region //////////////////////////////////

	// render --> start region ///////////////////////////////////
	return (
		<Container className={styles["form-container"]} component="form" onSubmit={(e) => onSubmit(e)}>
			<Box className={styles["form-row"]}>
				<FormControl className={styles['form-input']}>
					<TextField value={title} onChange={(e) => setTitle(e.target.value)} required type="text" label="Titre" />
				</FormControl>
				<FormControl className={styles['form-input']}>
					<TextField value={artist} required type="text" label="Artiste" onChange={(e) => setArtist(e.target.value)} />
				</FormControl>
			<Box className={styles["form-row"]}>
				<FormControl className={styles['form-input']}>
					<InputLabel required>Tonalité</InputLabel>
					<Select value={tone} required label="Tonalité" onChange={(e) => setTone(e.target.value as string)}>
						{chordsDictionary.map((chord, i) => {
                            return <MenuItem key={i} value={chord}>{chord}</MenuItem>;
						})}
					</Select>
				</FormControl>
                        </Box>
				<FormControl className={`${styles["form-group-container"]} ${styles['form-input']}`}>
					<FormLabel sx={{ marginBottom: '1rem' }} required>Armure</FormLabel>
					<Box className={styles['form-group']}>
						<TextField value={division} sx={{ width: "4rem" }} required type="number" onChange={(e) => setMetric(Number(e.target.value))}/>
                        <Typography sx={{ fontSize: "2rem", marginInline: '1rem' }}>/</Typography>
						<Select value={subdivision} required onChange={(e) => setSubdivision(Number(e.target.value))}>
							{metrics.map((metric, i) => {
								return <MenuItem key={i} value={metric}>{metric}</MenuItem>;
							})}
						</Select>
					</Box>
				</FormControl>
			</Box>
			<FormControl className={styles['form-input']}>
				<TextField value={tempo} onChange={(e) => setTempo(Number(e.target.value))} type="number" required label="tempo" />
			</FormControl>
			<FormControl className={styles['form-input']}>
				<Button variant="contained" type="submit">
                    Créer
                </Button>
			</FormControl>
		</Container>
	);
	// render --> end region /////////////////////////////////////
}

// props interface --> start region //////////////////////////////
interface IScoreInitForm {
    initScore: (scoreInit: ScoreType) => void
}
// props interface --> end region ////////////////////////////////
