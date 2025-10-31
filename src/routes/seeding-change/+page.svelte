<script lang="ts" module>
	import { cinematic_shot_of_blue_sky_with_sunlight_through_leaves } from '^images';
	import { intro as introVid } from '^videos/programmes/seeding-change';

	import {
		expect,
		join,
		details,
		benefits,
		pay,
		hero,
		intro,
		info,
		imageGallery
	} from '^content/seeding-change';

	import {
		ContentSectionContainer,
		Cta,
		Hero,
		ImageGalleryWithModal,
		SignUpFormModal,
		VideoWithModal
	} from '^components';
	import { BulletPoints, SignUpPromptSection } from '^components/~pages/by-type/free-programme';
</script>

<script lang="ts">
	let playIntro = $state(false);
	let signUpFormIsOpen = $state(false);
</script>

<SignUpFormModal bind:isOpen={signUpFormIsOpen} />

<div class="relative max-w-screen overflow-hidden">
	<Hero heading={hero.title} lead={hero.lead} align="center-left" headingColour="yellow">
		<div class="mt-8 xs:mt-10">
			<Cta class="cursor-auto! bg-white" text="Applications now closed" disable />
		</div>
	</Hero>

	<section class="section-mt-lg">
		<ContentSectionContainer variant="text">
			<p class="leading-relaxed">
				{intro}
			</p>
		</ContentSectionContainer>
	</section>

	<section class="section-mt-md">
		<ContentSectionContainer variant="text">
			<div class="info-container">
				{#each info.main as item}
					<p class="info-line">
						<span class="info-title">{item.title}:</span>
						<span class="info-text">{item.text}</span>
					</p>
				{/each}
			</div>
		</ContentSectionContainer>
	</section>

	<section class="section-mt-xl">
		<ContentSectionContainer variant="video">
			<VideoWithModal
				bind:isOpen={playIntro}
				poster={cinematic_shot_of_blue_sky_with_sunlight_through_leaves}
				posterAlt=""
				title="Seeding Change — An Intro"
				titlePlacement="top"
				videoSrc={introVid}
			/>
		</ContentSectionContainer>
	</section>

	<section class="section-mt-lg">
		<ContentSectionContainer variant="text">
			<h2 class="heading-sm">{details.heading}</h2>

			<h4 class="sub-heading-lg after-heading-sm-mt">{details.subheading}</h4>

			<p class="after-sub-heading-lg-mt">
				{details.lead}
			</p>

			<div class="after-sub-heading-lg-mt">
				<BulletPoints items={details.items} variant="bullet" />
			</div>
		</ContentSectionContainer>
	</section>

	<section class="section-mt-lg">
		<ContentSectionContainer variant="text">
			<h2 class="heading-sm">{expect.heading}</h2>

			<h4 class="sub-heading-lg after-heading-sm-mt">{expect.subheading}</h4>

			<div class="after-sub-heading-lg-mt">
				<BulletPoints items={expect.items} variant="bullet" />
			</div>
		</ContentSectionContainer>
	</section>

	<section class="section-mt-lg">
		<ContentSectionContainer variant="text">
			<h2 class="heading-sm">{benefits.heading}</h2>

			<h4 class="sub-heading-lg after-heading-sm-mt">{benefits.subheading}</h4>

			<div class="after-sub-heading-lg-mt">
				<BulletPoints items={benefits.items} />
			</div>
		</ContentSectionContainer>
	</section>

	<section class="section-mt-lg">
		<ContentSectionContainer variant="text">
			<h2 class="heading-sm">{join.heading}</h2>

			<h4 class="sub-heading-lg after-heading-sm-mt">{join.subheading}</h4>

			<div class="after-sub-heading-lg-mt">
				<BulletPoints items={join.items} />
			</div>
		</ContentSectionContainer>
	</section>

	<section class="section-mt-lg">
		<ContentSectionContainer variant="text">
			<h2 class="heading-sm">{pay.heading}</h2>

			<h4 class="sub-heading-lg after-heading-sm-mt">{pay.subheading}</h4>
		</ContentSectionContainer>
	</section>

	<section class="section-mt-lg">
		<ImageGalleryWithModal images={imageGallery.images} title={imageGallery.title} />
	</section>

	<section class="section-mt-xl">
		<SignUpPromptSection onOpenSignUp={() => (signUpFormIsOpen = true)} />
	</section>
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
