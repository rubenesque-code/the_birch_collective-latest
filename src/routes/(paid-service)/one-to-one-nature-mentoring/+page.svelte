<script lang="ts" module>
	import { group_photo, poster } from '^images/programmes/steering';
	import {
		whoFor,
		howWorks,
		outcomes,
		caseStudies,
		toolsAndPlanning,
		hero,
		intro,
		systemIntegration
	} from '^content/one-to-one-nature-mentoring';

	import {
		ContentSectionContainer,
		Cta,
		Hero,
		ImageGalleryWithModal,
		ImageModal,
		SignUpFormModal
	} from '^components';
	import {
		InfoSectionLocation,
		SignUpPromptSection
	} from '^components/~pages/by-type/free-programme';
</script>

<script lang="ts">
	let signUpFormIsOpen = $state(false);
</script>

<SignUpFormModal bind:isOpen={signUpFormIsOpen} />

<div class="relative max-w-screen overflow-hidden">
	<Hero heading={hero.heading} lead={hero.lead} align="center-left" headingColour="white">
		<div class="mt-8 xs:mt-10">
			<Cta class="bg-white" onClick={() => (signUpFormIsOpen = true)} text="Sign Up" />
		</div>
	</Hero>
</div>

<style>
	.section-mt-xl {
		@apply mt-12 md:mt-20;
	}
	.section-mt-lg {
		@apply mt-10 xs-sm:mt-14 4xl:mt-24;
	}
	.section-mt-md {
		@apply mt-5 xs-sm:mt-7 4xl:mt-16;
	}

	.info-container {
		@apply flex flex-col gap-4 md:gap-2 4xl:gap-3;
	}
	.info-line {
		@apply flex flex-col gap-0.5 sm:gap-1 md:flex-row md:items-center 4xl:gap-2;
	}
	.info-title {
		@apply font-display text-[25px] font-bold text-bc-amber capitalize 4xl:text-3xl;
	}
	.info-text {
		@apply text-base text-black/90 uppercase md:text-[19px] 4xl:text-[23px];
	}

	.heading-sm {
		@apply text-[16px] font-medium tracking-wide text-my-grey-1 uppercase 4xl:text-lg;
	}
	.sub-heading-lg {
		@apply font-display text-[40px] leading-[1.25em] font-bold text-bc-slate-pine capitalize 4xl:text-[48px];
	}
	.after-heading-sm-mt {
		@apply mt-3;
	}
	.after-sub-heading-lg-mt {
		@apply mt-6;
	}
</style>
