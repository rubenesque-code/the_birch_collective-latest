import { internal_route } from '^constants';

import {
	chillie_plants_garlic_hanging,
	person_standing_axe_chopping,
	ro_centered_staff_participants_standing_forest_bg,
	basket_being_woven,
	tim_picking_radishes
} from '^images';
import { our_mission } from '^videos';

const hero = {
	heading: 'Connect Through Nature',
	lead: [
		'Start today in Bristol!',
		"Join in through one of our programmes! They're both free and paid, and range from one-day drop-ins to longer adventures."
	],
	ctaText: 'Get Involved Today'
};

const intro = {
	heading: 'Welcome To The Birch Collective',
	text: 'The Birch Collective believes in the power of nature, community, and connection. We’re a social enterprise dedicated to helping people aged 16-25 in Bristol and the surrounding areas who might be feeling isolated, overwhelmed, or unsure of their place in the world. Whether you’re dealing with anxiety, depression, or just looking for a space to belong, we’re here to walk alongside you.',
	video: {
		src: our_mission,
		poster: ro_centered_staff_participants_standing_forest_bg,
		title: 'The Birch Collective — Our Mission'
	}
};

const aboutUs = {
	heading: 'Cultivating Purpose, Belonging & Resilience',
	bullets: [
		'We work alongside you, young adults, to empower and support your transition into adulthood',
		"We want you to unlock your potential to engage fully with life, and to respond resiliently to life's challenges",
		'We believe that developing connections with the natural world gives you a sense of belonging',
		'We offer you the chance to be part of an inclusive community where you can explore'
	]
};

const offer = {
	heading: 'What We Offer',
	sections: [
		{
			link: internal_route.free_programmes,
			imgSrc: tim_picking_radishes,
			imgAlt: 'Free programmes banner',
			title: 'Free Programmes',
			text: "If you're 16-25 and interested in nature based activities for wellbeing, click here. They're free!"
		},
		{
			link: internal_route.paid_services,
			imgSrc: basket_being_woven,
			imgAlt: 'Paid services banner',
			title: 'Paid For Services',
			text: 'For young people, organisations, schools, youth groups, and professionals who want to bring nature-based learning and wellbeing into their work.'
		}
	]
};

const impact = {
	heading: 'Our Impact',
	lead: 'Of the 192 unique participants we worked with in 2024:',
	bullets: [
		'96% gained confidence and practical skills through our nature-based programmes.',
		'91% reported improved mental and physical wellbeing after taking part.',
		'90% strengthened their social connections — with many moving on into education, training, or employment.'
	]
};

const supportBirch = {
	heading: 'Support Us',
	sections: [
		{
			title: 'Volunteer',
			link: '/volunteer',
			imgSrc: person_standing_axe_chopping,
			imgAlt: 'Person chopping wood during an outdoor volunteer activity',
			text: 'Be a part of the team. It can be excellent work experience!'
		},
		{
			title: 'Make a Donation',
			link: '/donate',
			imgSrc: chillie_plants_garlic_hanging,
			imgAlt: 'Close-up of chillies',
			text: 'Any donation is appreciated!'
		}
	]
};

export { hero, aboutUs, offer, impact, supportBirch, intro };
