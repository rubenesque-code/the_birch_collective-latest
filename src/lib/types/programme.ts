import type { EnhancedImg } from './general';

type ProgrammePreview = {
	link: string;
	imgSrc: EnhancedImg;
	imgAlt: string;
	title: string;
	text: string;
};

type ProgrammeName =
	| '1-to-1 nature based mentoring'
	| 'steering group'
	| 'seeding change'
	| 'recoupe'
	| 'fresh air thursdays'
	| 'therapeutic forest school';

export type { ProgrammeName, ProgrammePreview };
