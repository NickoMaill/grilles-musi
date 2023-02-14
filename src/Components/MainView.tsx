import { Autocomplete, Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { chords } from "~/resources/chordsDictionnary";
import Modal from "./Modal";
import ScoreInit from "./ScoreInit";
import ScoreInitForm from "./ScoreInitForm";

// singleton --> start region ////////////////////////////////////
// singleton --> end region //////////////////////////////////////

export default function MainView({}: IMainView) {
	// state --> start region ////////////////////////////////////
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isScoreInit, setIsScoreInit] = useState<boolean>(false);
	// state --> end region //////////////////////////////////////
    
	// hooks --> start region ////////////////////////////////////
	// hooks --> end region //////////////////////////////////////
    
	// methods --> start region //////////////////////////////////
    const handleClose = () => {
      setIsOpen(!isOpen);
      window.print();
    }
	// methods --> end region ////////////////////////////////////

	// useEffect --> start region ////////////////////////////////
	// useEffect --> end region //////////////////////////////////

	// render --> start region ///////////////////////////////////
	if (!isScoreInit) {
		return (
			<>
				<ScoreInit/>
			</>
		);
	} else {
		return null
	}
	// render --> end region /////////////////////////////////////
}

// props interface --> start region //////////////////////////////
interface IMainView {}
// props interface --> end region ////////////////////////////////
