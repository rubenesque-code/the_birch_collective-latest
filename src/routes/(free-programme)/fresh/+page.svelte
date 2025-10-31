<script lang="ts" module>
	import { cinematic_shot_of_blue_sky_with_sunlight_through_leaves } from '^images';
	import { participant_testimonial_poster } from '^images/programmes/fresh';
	import { intro as introVid, participant_testimonial } from '^videos/programmes/fresh';

	import {
		intro,
		expect,
		feedback,
		hero,
		imageGallery,
		info,
		joinUs
	} from '^content/fresh-air-thursday';

	import {
		ContentSectionContainer,
		Cta,
		Hero,
		ImageGalleryWithModal,
		SignUpFormModal,
		VideoWithModal
	} from '^components';
	import {
		InfoSectionLocation,
		SignUpPromptSection
	} from '^components/~pages/by-type/free-programme';
</script>

<script lang="ts">
	let playIntro = $state(false);
	let playTestimonial = $state(false);
	let signUpFormIsOpen = $state(false);
</script>

<SignUpFormModal bind:isOpen={signUpFormIsOpen} />

<div class="relative max-w-screen overflow-hidden">
	<Hero heading={hero.title} lead={hero.lead} align="center-left" headingColour="yellow">
		<div class="mt-8 xs:mt-10">
			<Cta class="bg-white" onClick={() => (signUpFormIsOpen = true)} text="Sign Up" />
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

				<InfoSectionLocation
					mapAlt=""
					mapLink={info.location.mapLink}
					mapSrc={info.location.map}
					modalTitle={info.location.modalTitle}
					locationText={info.location.text}
				/>
			</div>
		</ContentSectionContainer>
	</section>

	<section class="section-mt-xl">
		<ContentSectionContainer variant="video">
			<VideoWithModal
				bind:isOpen={playIntro}
				poster={cinematic_shot_of_blue_sky_with_sunlight_through_leaves}
				posterAlt=""
				title="Fresh — An Intro"
				titlePlacement="top"
				videoSrc={introVid}
			/>
		</ContentSectionContainer>
	</section>

	<section class="section-mt-lg">
		<ContentSectionContainer variant="text">
			<h2 class="heading-sm">{expect.heading}</h2>

			<div class="after-heading-sm-mt">
				<div class="flex flex-col gap-8">
					{#each expect.items as { title, text }}
						<div>
							<h4 class="sub-heading-lg">
								{title}
							</h4>

							<p class="mt-3 leading-relaxed">{text}</p>
						</div>
					{/each}
				</div>
			</div>
		</ContentSectionContainer>
	</section>

	<section class="section-mt-lg">
		<ContentSectionContainer variant="text">
			<h2 class="heading-sm">{joinUs.heading}</h2>

			<h4 class="sub-heading-lg after-heading-sm-mt">{joinUs.subheading}</h4>

			<div class="after-sub-heading-lg-mt">
				<div class="flex flex-col gap-3">
					{#each joinUs.items as { text, symbol }}
						<p class="flex items-center gap-3">
							<span>{symbol}</span>
							<span class="leading-[1.6em] text-black/90 decoration-bc-amber/30 underline-offset-2">
								{text}
							</span>
						</p>
					{/each}
				</div>
			</div>
		</ContentSectionContainer>
	</section>

	<section class="section-mt-lg">
		<ImageGalleryWithModal images={imageGallery.images} title={imageGallery.title} />
	</section>

	<section class="section-mt-xl">
		<SignUpPromptSection onOpenSignUp={() => (signUpFormIsOpen = true)} />
	</section>

	<section class="section-mt-xl flex justify-center">
		<div class="w-full">
			<ContentSectionContainer variant="text">
				<div>
					<h2 class="heading-sm">{feedback.heading}</h2>

					<h4 class="sub-heading-lg after-heading-sm-mt">{feedback.subheading}</h4>
				</div>
			</ContentSectionContainer>

			<div class="after-sub-heading-lg-mt">
				<ContentSectionContainer variant="video">
					<VideoWithModal
						poster={participant_testimonial_poster}
						posterAlt=""
						videoSrc={participant_testimonial}
						bind:isOpen={playTestimonial}
					/>
				</ContentSectionContainer>
			</div>
		</div>
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
