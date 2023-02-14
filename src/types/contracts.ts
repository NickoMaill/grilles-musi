export type ScoreType = {
	info: {
		title: string;
		subtitle: string;
		bpm: number;
		division: number;
		subdivision: number;
		tone:
			| "Ab"
			| "Abm"
			| "A"
			| "Am"
			| "A#"
			| "A#m"
			| "Bb"
			| "Bbm"
			| "B"
			| "Bm"
			| "C"
			| "Cm"
			| "C#"
			| "C#m"
			| "Db"
			| "Dbm"
			| "D"
			| "Dm"
			| "D#"
			| "D#m"
			| "Eb"
			| "Ebm"
			| "E"
			| "Em"
			| "F"
			| "Fm"
			| "F#"
			| "F#m"
			| "Gb"
			| "Gbm"
			| "G"
			| "Gm"
			| "G#"
			| "G#m";
        };
		score: ScoreDetail;
        additionalText: string[];
};

type ScoreDetail = [
	// song
	[
		// part
		[
			// line
			{
				// measure
                chordSequence: { chordName: string }[]
                isRepeatStart: boolean;
                isRepeatEnd: boolean;
                RepeatSequenceNumber: number;
                isSilence: boolean
            }
		][]
	][]
];
