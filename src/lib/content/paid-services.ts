import {
	fresh_air_thursday_sign_foreground,
	participant_2_with_caregiver_2_affectionate,
	participants_and_caregivers_sitting_around_fire_shot_through_trellis,
	person_standing_axe_chopping,
	shed_stay_calm_listen_nature,
	trellis_foreground_hut_background
} from '^images';
import { internal_route } from '^constants';
import type { ProgrammePreview } from '^types';

const hero = {
	heading: 'Paid Services',
	lead: 'For organisations, schools, youth groups, and professionals who want to bring nature-based learning and wellbeing into their work.'
};

const programmes: ProgrammePreview[] = [
	{
		link: internal_route.nature_based_mentoring,
		imgAlt: '',
		imgSrc: participant_2_with_caregiver_2_affectionate,
		title: '1:1 Nature Based Mentoring',
		text: 'NHS-backed support offered in various outdoor settings to help people connect with nature and improve wellbeing.'
	},
	{
		link: internal_route.therapeutic_forest_school,
		imgAlt: '',
		imgSrc: participants_and_caregivers_sitting_around_fire_shot_through_trellis,
		title: 'Therapeutic Forest School',
		text: 'Structured, trauma-informed group sessions for children and young people, delivered in green spaces.'
	},
	{
		link: internal_route.bespoke_nature_workshops,
		imgAlt: '',
		imgSrc: trellis_foreground_hut_background,
		title: 'Bespoke Nature Workshops for Organisations',
		text: 'Custom-designed sessions for schools, support services, or teams – ranging from team-building to therapeutic intervention.'
	},
	{
		link: internal_route.corporate_nature_team_days,
		imgAlt: '',
		imgSrc: shed_stay_calm_listen_nature,
		title: 'Corporate Nature Team Days',
		text: 'Team building, wellbeing, and making a real difference outdoors'
	}
];

export { hero, programmes };
