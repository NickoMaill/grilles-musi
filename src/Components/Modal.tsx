import React, { ReactNode } from "react";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

// singleton --> start region ////////////////////////////////////
// singleton --> end region //////////////////////////////////////

export default function Modal({ isOpen, handleClose, title, contextText, children, actions }: IModal) {
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
		<Dialog open={isOpen} onClose={handleClose}>
			<DialogTitle>{title}</DialogTitle>
			<DialogContent>
				<DialogContentText>{contextText}</DialogContentText>
				{children}
			</DialogContent>
			<DialogActions>{actions}</DialogActions>
		</Dialog>
	);
	// render --> end region /////////////////////////////////////
}

// props interface --> start region //////////////////////////////
interface IModal {
	isOpen: boolean;
	children: ReactNode;
	handleClose: () => void;
	title: string;
	contextText: string;
	actions: ReactNode;
}
// props interface --> end region ////////////////////////////////
