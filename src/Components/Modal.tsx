import React, { ReactNode } from "react";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider } from "@mui/material";
import styles from "../Sass/commonStyles.module.scss";

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
		<Dialog className={styles.dialogContainer} open={isOpen} onClose={handleClose}>
			<DialogTitle sx={{ textAlign: 'center' }}>{title}</DialogTitle>
			<DialogContent sx={{ width: "50rem" }}>
				<DialogContentText sx={{ textAlign: 'center' }}>{contextText}</DialogContentText>
				<Divider sx={{ marginBottom: '1rem' }}/>
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
	contextText?: string;
	actions?: ReactNode;
}
// props interface --> end region ////////////////////////////////
