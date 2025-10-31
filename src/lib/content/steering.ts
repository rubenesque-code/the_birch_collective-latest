import { location_map, poster } from '^assets/images/programmes/steering';
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

const hero = {
	heading: 'Steering Group Workshops',
	lead: 'Three interactive workshops on Mental Health, Social Action & Nature — led by and for 18–25s.'
};

const intro = [
	'Have Your Say — Shape the Future of The Birch Collective.',
	'We’re inviting 16–25 year-olds in Bristol to join our three-week Steering Group workshops this November. Together we’ll explore how social action and nature can support mental health, build practical skills in leadership and facilitation, and co-design how young people guide the future of The Birch Collective.',
	'You’ll gain experience that looks great on your CV, meet new people, and have the chance to join our paid Youth Advisory Board in 2026. Travel costs are covered, free food and drinks are provided, and everyone who completes all three sessions will receive a £30 voucher.',
	'No experience is needed — just bring your ideas.'
];

const info = {
	main: [
		{
			title: 'Dates',
			text: 'Wednesday 12th, 19th & 26th November'
		},
		{ title: 'Time', text: '5.30pm - 8.30pm' },
		{ title: 'Who for?', text: '18 - 25 year olds in Bristol' },
		{ title: 'Cost', text: 'FREE - only 12 spaces available ' },
		{ title: 'Reward', text: '£30 shopping voucher for attending all 3 sessions' }
	],
	location: {
		map: location_map,
		text: 'The Beehive Centre, 19A Stretford Rd, Whitehall, Bristol BS5 7AW ',
		mapLink: 'https://maps.app.goo.gl/32cRvbigC2fC3pPF9',
		modalTitle: "How to get to <span class='text-bc-slate-pine'>Steering Group</span>"
	}
};

const expect = {
	heading: 'Activities',
	subheading: 'What to expect',
	lead: 'These workshops are designed to be relaxed, supportive, and fun. You’ll get to share ideas, learn new skills, and take time for yourself too.',
	items: [
		{
			title: 'Food & drinks',
			text: 'Free takeaway pizza (with veggie/vegan options), plus snacks and drinks each week to keep the sessions relaxed and sociable.',
			symbol: '🍕'
		},
		{
			title: ' Time to reflect',
			text: 'Not everything has to be fast-paced. We’ll build in quiet time for you to pause, recharge, and try out simple mindfulness techniques to support your mental wellbeing.',
			symbol: '🧘'
		},
		{
			title: 'Group chats',
			text: 'Take part in both small group conversations and larger reflections, where you’ll explore mental health, community, and social action from new perspectives.',
			symbol: '👥'
		},
		{
			title: 'Your voice counts',
			text: 'This isn’t just a workshop — it’s a chance to shape real decisions. Your ideas will influence how The Birch Collective works, and you’ll be part of designing opportunities for young people across Bristol.',
			symbol: '🎤'
		},
		{
			title: 'Future opportunities',
			text: 'The Steering Group is also the first step towards our new Youth Advisory Board in 2026 — with the potential for paid roles and hands-on experience in running a social enterprise.',
			symbol: '🌱'
		}
	]
};

const other = {
	heading: 'Other',
	subheading: 'Some More Info',
	poster: {
		src: poster,
		alt: 'The Birch Collective Steering group participants'
	}
};

const imageGallery = {
	title: 'Images from Birch programmes',
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

export { hero, expect, imageGallery, intro, other, info };
