import React, { useState } from "react";
import { ScoreType } from "~/types/contracts";
import ScoreInit from "./ScoreInit";
import ScoreMainView from "./ScoreMainView";

// singleton --> start region ////////////////////////////////////
// singleton --> end region //////////////////////////////////////

export default function MainView({}: IMainView) {
	// state --> start region ////////////////////////////////////
    // const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isScoreInit, setIsScoreInit] = useState<boolean>(false);
	const [score, setScore] = useState<ScoreType | null>(null)
	// state --> end region //////////////////////////////////////
    
	// hooks --> start region ////////////////////////////////////
	// hooks --> end region //////////////////////////////////////
    
	// methods --> start region //////////////////////////////////
    const handleScore = (score: ScoreType) => {
		if (score) {
			setScore(score);
			setIsScoreInit(true);
		}
    }
	// methods --> end region ////////////////////////////////////

	// useEffect --> start region ////////////////////////////////
	// useEffect --> end region //////////////////////////////////

	// render --> start region ///////////////////////////////////
	if (!isScoreInit) {
		return (
			<>
				<ScoreInit initScore={(score) => handleScore(score)}/>
			</>
		);
	} else if (isScoreInit && score) {
		return (
			<ScoreMainView data={score}/>
		)
	} else {
		return null
	}
	// render --> end region /////////////////////////////////////
}

// props interface --> start region //////////////////////////////
interface IMainView {}
// props interface --> end region ////////////////////////////////
