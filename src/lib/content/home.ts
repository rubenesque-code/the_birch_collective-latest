import { internal_route } from '^constants';

import { basket_being_woven, tim_picking_radishes } from '^images/video-frames';
import {
	chillie_plants_garlic_hanging,
	person_standing_axe_chopping
} from '^images/peoples-health';

const introductoryBullets = [
	'We work alongside you, young adults, to empower and support your transition into adulthood',
	"We want you to unlock your potential to engage fully with life, and to respond resiliently to life's challenges",
	'We believe that developing connections with the natural world gives you a sense of belonging',
	'We offer you the chance to be part of an inclusive community where you can explore'
];

const offers = [
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
];

const impact = [
	'96% gained confidence and practical skills through our nature-based programmes.',
	'91% reported improved mental and physical wellbeing after taking part.',
	'90% strengthened their social connections — with many moving on into education, training, or employment.'
];

const support = [
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
];

export { introductoryBullets, offers, impact, support };
