import { Button, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { ScoreDetail, ScoreType, ScoreUpdateEnum } from "~/types/contracts";
import styles from "~/Sass/scoreView.module.scss";
import LocalPrintshop from '@mui/icons-material/LocalPrintshop'
import Save from "@mui/icons-material/Save"
import Modal from "./Modal";
import PartScore from "./PartScore";
import AddMeasureScore from "./AddMeasureScore";

// singleton --> start region ////////////////////////////////////
// singleton --> end region //////////////////////////////////////

export default function ScoreMainView({ data }: IScoreMainView) {
	// state --> start region ////////////////////////////////////
    const [currentTitleModal, setCurrentTitleModal] = useState<string>("");
    const [modalContent, setModalContent] = useState<ScoreUpdateEnum>(ScoreUpdateEnum.ADD_PART);
    const [scoreData, setScoreData] = useState<ScoreType>(data);
    const [currentPart, setCurrentPart] = useState<number | null>(null);
	// state --> end region //////////////////////////////////////

	// hooks --> start region ////////////////////////////////////
	// hooks --> end region //////////////////////////////////////

	// methods --> start region //////////////////////////////////
    const addPart = () => {
        const partName = window.prompt("nommez votre partie");
        if (partName) {
            setScoreData(prevState => {
                prevState.score?.push({ partName: partName, content: [] })
                return { ...prevState }
            });
        }
    };
    const addMeasure = (partIndex: number) => {
        if (partIndex !== null) {
            setScoreData((prevState) => {
                if (prevState.score) {
                    prevState.score[partIndex].content.push({ chordSequence: [] })
                }
                return { ...prevState }
            })
        }
    };
    const saveScore = () => {
        const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
            JSON.stringify(scoreData)
        )}`;

        const link = document.createElement("a");
        link.href = jsonString;
        link.download = `${scoreData.info.title}_${scoreData.info.subtitle}.nckm`;
    
        link.click();
    };
    const deletePart = (index: number) => {
        setScoreData((prevState) => {
            prevState.score?.splice(index, 1)
            return { ...prevState }
        })
    };

    const onSelectPart = (index: number) => {
        setCurrentPart(index);
    }

    const deleteMeasure = (partIndex: number, mesureIndex: number) => {
        setScoreData((prevState) => {
            if (prevState.score) {
                prevState.score[partIndex].content.splice(mesureIndex, 1)
            }
            return { ...prevState };
        })        
    };
    const printScore = () => {
        alert("avant d'imprimer votre grille, désactivez l'entête et le pied de page dans les options, vous pouvez aussi mettre les marges au minimum pour un document grand")
        window.print();
    };
	// methods --> end region ////////////////////////////////////

	// useEffect --> start region ////////////////////////////////
    useEffect(() => {
        console.log(scoreData);
    }, [scoreData])
	// useEffect --> end region //////////////////////////////////

	// render --> start region ///////////////////////////////////
	return (
		<Box component="section" onClick={() => setCurrentPart(null)} className={styles.sectionScore}>
            <Box className={styles.toolContainer}>
                <Button onClick={addPart} title="ajouter une partie a la grille" className={styles.buttonScore} variant="contained">Ajouter une partie</Button>
                <Button onClick={() => addMeasure(currentPart as number)} title="ajouter une mesure a la partie" className={styles.buttonScore} variant="contained">Ajouter une mesure</Button>
                <Button onClick={saveScore} title="sauvegarder la grille sur votre machine" className={styles.buttonScore} variant="contained"><Save  /></Button>
                <Button onClick={printScore} title="imprimer la grille au format A4" className={styles.buttonScore} variant="contained"><LocalPrintshop  /></Button>
            </Box>
			<Paper className={styles.scoreContainer}>
				<Box className={styles.titleScoreContainer}>
					<Typography component="h4" variant="h4">
						{scoreData.info.title}
					</Typography>
					<Box className={styles.infoContainer}>
						<Typography>
							Tempo={scoreData.info.bpm} - {scoreData.info.division}/{scoreData.info.subdivision} - {scoreData.info.tone}
						</Typography>
						<Typography fontWeight="bold" style={{ textDecoration: 'underline' }}>{scoreData.info.subtitle}</Typography>
					</Box>
				</Box>
                <Box onClick={(e) => e.stopPropagation()} className={styles.scoreContentContainer}>
                    <Box component="ul">
                        {scoreData.score?.map((part: ScoreDetail, i: number) => {
                            return <PartScore key={i} part={part} isSelected={currentPart === i ? true : false} onSelectPart={() => onSelectPart(i)} deleteMeasure={(index) => deleteMeasure(i, index)} deletePart={() => deletePart(i)} />
                        })}
                    </Box>
                </Box>
			</Paper>
		</Box>
	);
	// render --> end region /////////////////////////////////////
}

// props interface --> start region //////////////////////////////
interface IScoreMainView {
	data: ScoreType;
}
// props interface --> end region ////////////////////////////////
