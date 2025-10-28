import {
	fresh_air_thursday_sign_foreground,
	participants_and_caregivers_sitting_around_fire_shot_through_trellis,
	person_standing_axe_chopping,
	shed_stay_calm_listen_nature
} from '^images';
import { internal_route } from '^constants';
import type { ProgrammePreview } from '^types';

const hero = {
	heading: 'Free Programmes',
	lead: 'Want to spend more time outdoors, learn practical skills, and feel more connected? We run nature-based sessions that help you slow down, get hands-on, and grow alongside others.'
};

const programmes: ProgrammePreview[] = [
	{
		link: internal_route.recoupe,
		imgAlt: 'Birch participant chopping wood',
		imgSrc: person_standing_axe_chopping,
		title: 'Recoupe: Working Woods',
		text: 'A weekly woodland sessions using traditional skills in Troopers Hill Woods.'
	},
	{
		link: internal_route.fresh_air_thursday,
		imgAlt: 'Hand painted sign for Fresh Air Thursdays',
		imgSrc: fresh_air_thursday_sign_foreground,
		title: 'Fresh Air Thursdays',
		text: "A FREE weekly group for 16–25 year olds, just a 5-minute walk from St George's Park!"
	},
	{
		link: internal_route.seeding_change,
		imgAlt: 'The Birch Collective programme - participants and caregivers',
		imgSrc: participants_and_caregivers_sitting_around_fire_shot_through_trellis,
		title: 'Seeding Change: Plant Your Future (Camp Birch)',
		text: 'A 7-month journey with seasonal camps, evening meetups, and mentoring for 18–25s, supporting purpose, leadership, and community building.'
	},
	{
		link: internal_route.youth_advisory_and_steering,
		imgAlt: 'The Birch Collective - stay calm and listen to nature',
		imgSrc: shed_stay_calm_listen_nature,
		title: 'Steering Group Workshops',
		text: 'Three interactive workshops on Mental Health, Social Action & Nature — led by and for 18–25s.'
	}
];

export { hero, programmes };
