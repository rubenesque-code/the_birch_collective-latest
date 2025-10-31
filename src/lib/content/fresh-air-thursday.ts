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
	title: 'Fresh Air Thursdays',
	lead: [
		'A weekly group every Thursday. Currently running upto December 18th 2025',
		"5 minutes from St George's Park, Bristol"
	]
};

const intro =
	'Fresh is our weekly group for 16-25 year olds. We offer a range of activities designed at a pace to make learning accessible and to draw out your creativity. There is no fixed time limit to attendance, attend all year round, once a month or just one off, totally up to you.  You can attend until your 26 birthday. If you are older the 26 or reach that age there are opportunities to return as peer mentor to support others, if this is of interest to you.';

const info = {
	main: [
		{ title: 'currently running from', text: 'February 20th 2025 - December 18th 2025' },
		{ title: 'Time', text: '1pm — 5pm' },
		{ title: 'Age Group', text: 'anyone 16 — 25 years old' },
		{ title: 'Cost', text: 'free but booking is essential!' }
	],
	location: {
		map: location_map,
		text: 'Strawberry Lane Community Gardens',
		mapLink: 'https://maps.app.goo.gl/32cRvbigC2fC3pPF9',
		modalTitle: "How to get to <span class='text-bc-slate-pine'>Fresh</span>"
	}
};

const expect = {
	heading: 'What To Expect',
	items: [
		{
			title: 'Nature Based Craft',
			text: 'Making all manner of things from willow with our resident willow expert Amy, from baskets to bird feeders, fences to climbing structures for plants. - Natural and traditional building techniques - such as using cob, building using round wood timber or using hazel to make fences. - Making functional or decorative items from found and foraged items in the garden or nearby woodland.'
		},
		{
			title: 'Organic horticulture and permaculture',
			text: 'Our team has many years experience in growing organic vegetables. We will explore and offer learning in a range of wildlife friendly food growing and horticulture techniques and practices. - We also explore wider land management techniques such as; coppicing, hedging, habitat creation and permaculture techniques for designing spaces.'
		},
		{
			title: 'Cookery',
			text: 'Outdoor cookery or cooking on the campfire is a fine art and also a greatly satisfying process. - Ro is a master and loves teaching people suitable recipes but importantly how to build and maintain fires that allow you to cook a wide range of treats, without ending up with burnt grub!'
		},
		{
			title: 'Nature based awareness and mindfulness techniques',
			text: "Alongside all the 'doing' we also encourage people to just be. - During sessions we will share with you simple practices to enable you to feel a greater sense of inner peace, calm and aid in managing stress. - We suggest ways to use the natural world as the lens through which to see the world and our personal struggles through, offering new perspective and comfort."
		}
	]
};

const joinUs = {
	heading: 'Why Join Us',
	subheading: "This Is Suitable For You If You're",
	items: [
		{
			text: 'Seeking to spend more time in the outdoors and meet new people.',
			symbol: '🌳'
		},
		{
			text: 'Struggling with family and relationship issues.',
			symbol: '💔'
		},
		{
			text: 'Experiencing feelings of loneliness or isolation.',
			symbol: '😔'
		},
		{
			text: 'Struggling to engage with study.',
			symbol: '📚'
		},
		{
			text: 'Not in education, employment or training.',
			symbol: '❌'
		},
		{
			text: 'Experiencing low-level mental health issues.',
			symbol: '🌧️'
		}
	]
};

const feedback = {
	heading: 'Feedback',
	subheading: 'What Participants Say'
};

const imageGallery = {
	title: "Images from <span class='text-bc-amber font-medium italic'>Fresh</span>",
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

export { hero, info, expect, joinUs, feedback, imageGallery, intro };
