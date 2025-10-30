import {
	chillie_plants_garlic_hanging,
	flower_bed_daffodil,
	intertwining_branches,
	light_blue_shed,
	participants_and_helper_drinking_tea_peace_sign,
	participants_and_helpers_sitting_around_unlit_fire,
	participants_standing_infront_of_steps_and_shed,
	work_bench_inside_poly_tunnel
} from '^images';
import { location_map } from '^images/programmes/fresh';

const hero = {
	title: 'Recoupe: Working Woods',
	lead: 'A weekly woodland sessions using traditional skills in Troopers Hill Woods'
};

const intro =
	'Recoupe is a regenerative ecological project breathing new life into Troopers Hill Woods.  Our focus is to work sensitively with the land to create a thriving and diverse working woodland. We will mainly use hand tools and apply traditional woodland management techniques such as coppicing, charcoal burning, and hedge laying. This allows us to produce local products like: Beanpoles, pea sticks, Charcoal and Materials for traditional crafts, ensuring all parts of the tree are utilised.';

const info = {
	main: [
		{ title: 'currently running from', text: 'March 2025 - March 2026' },
		{ title: 'When', text: 'Tuesdays, 1pm — 5pm' },
		{ title: 'Age Group', text: 'anyone aged 18+' },
		{ title: 'Cost', text: 'free but booking is essential!' }
	],
	location: {
		map: location_map,
		text: 'Meet at Strawberry Lane Allotments to walk together to Troopers Hill Woods',
		mapLink: 'https://maps.app.goo.gl/32cRvbigC2fC3pPF9',
		modalTitle: "How to get to <span class='text-bc-slate-pine'>Recoupe</span>"
	}
};

const expect = {
	heading: 'What to Expect',
	items: [
		{
			title: 'Traditional Seasonal Woodland Management',
			text: 'Learn coppicing, charcoal burning, and hedge laying to help restore the woodland and encourage biodiversity.'
		},
		{
			title: 'Wildlife Habitat Creation and Tree Planting',
			text: 'Identify and map wildlife species, learning how to create habitats for birds, bats, and insects.'
		},
		{
			title: 'Nature Connection and Seasonal Awareness',
			text: 'Take time to observe and reflect, building a deeper connection to the land and its stories.'
		},
		{
			title: 'Practical Conservation Skills',
			text: 'Repair and maintain paths to improve access for visitors and protect the woodland.'
		}
	]
};

const imageGallery = {
	title: "Images from <span class='text-bc-amber font-medium italic'>Recoupe</span>",
	images: [
		[
			{ src: flower_bed_daffodil, alt: '' },
			{ src: light_blue_shed, alt: '' },
			{ src: participants_standing_infront_of_steps_and_shed, alt: '' },
			{ src: participants_and_helpers_sitting_around_unlit_fire, alt: '' }
		],
		[
			{ src: work_bench_inside_poly_tunnel, alt: '' },
			{ src: chillie_plants_garlic_hanging, alt: '' },
			{ src: participants_and_helper_drinking_tea_peace_sign, alt: '' },
			{ src: intertwining_branches, alt: '' }
		]
	]
};

const join = {
	heading: 'Why Join Us',
	subheading: 'This Is Suitable For You If You',
	items: [
		{
			text: 'Enjoy being outdoors and learning practical skills.',
			symbol: '🌳'
		},
		{
			text: 'Are keen to restore nature and boost biodiversity.',
			symbol: '🐝'
		},
		{
			text: 'Are interested in traditional woodland crafts.',
			symbol: '🪵'
		},
		{
			text: 'Are looking to meet new people and be part of a friendly group.',
			symbol: '🤝'
		},
		{
			text: 'Are seeking time in nature to support their wellbeing.',
			symbol: '🌿'
		},
		{
			text: 'Want to gain experience in conservation.',
			symbol: '🦉'
		}
	]
};

const feedback = {
	heading: 'Feedback',
	subheading: 'What Participants Say'
};

export { expect, hero, imageGallery, intro, info, join, feedback };
