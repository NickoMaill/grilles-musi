export type ScoreType = {
	info: {
		title: string;
		subtitle: string;
		bpm: number;
		division: number;
		subdivision: number;
		tone: string;
	};
	score?: ScoreDetail[];
	additionalText?: string[];
};

export type ScoreDetail = {
	partName: string;
	content: 
			{
				// measure
				chordSequence?: { chordName: string }[];
				isRepeatStart?: boolean;
				isRepeatEnd?: boolean;
				RepeatSequenceNumber?: number;
				isSilence?: boolean;
			}[]
};

export enum ScoreUpdateEnum {
	ADD_PART = 0,
	ADD_MEASURE = 1,
}