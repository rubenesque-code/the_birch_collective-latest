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
		imageGallery,
		furtherInfo
	} from '^content/seeding-change';

	import {
		ContentSectionContainer,
		Cta,
		FlowerIcon,
		Hero,
		ImageGalleryWithModal,
		SignUpFormModal,
		VideoWithModal
	} from '^components';
	import { BulletPoints, SignUpPromptSection } from '^components/~pages/by-type/free-programme';
	import { Download } from 'phosphor-svelte';
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
					<p class={`info-line ${typeof item.text === 'string' ? '' : 'flex-col! items-start!'}`}>
						<span class="info-title">{item.title}:</span>
						{#if typeof item.text === 'string'}
							<span class="info-text">{item.text}</span>
						{:else}
							{#each item.text as line}
								<span class="info-text"><span class="text-bc-logo-black/50">-</span> {line}</span>
							{/each}
						{/if}
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

			<p class="after-sub-heading-lg-mt leading-relaxed">
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

			<p class="after-sub-heading-lg-mt leading-relaxed">
				{pay.lead}
			</p>

			<div class="after-sub-heading-lg-mt flex flex-col flex-wrap items-start gap-8">
				{#each pay.sections as section, i}
					<div class="flex flex-col items-start gap-4">
						<h4
							class={`rounded-md px-2 py-1 font-display text-3xl font-bold text-white sm-md:text-[32px] ${i === 0 ? 'bg-bc-oxide-brown' : i === 1 ? 'bg-bc-amber' : i === 2 ? 'bg-bc-burnt-sienna' : i === 3 ? 'bg-bc-slate-pine' : 'bg-bc-amber'}`}
						>
							{section.title} — £{section.cost}
						</h4>

						<div class="flex flex-col gap-3">
							{#each section.text as line}
								<div class="flex items-center gap-2">
									<span class="text-sm">
										<FlowerIcon />
									</span>
									<p>{line}</p>
								</div>
							{/each}
						</div>
					</div>
				{/each}
			</div>

			<div
				class="relative mt-8 w-full max-w-[600px] rounded-md bg-bc-slate-pine p-4 text-white sm-md:mt-12"
			>
				<h4
					class="absolute -top-2 left-0 rounded-md bg-bc-amber px-2 py-1 font-display text-3xl font-bold text-white sm-md:text-[32px]"
				>
					Explainer
				</h4>

				<p class="mt-6 text-[16px] leading-relaxed sm-md:mt-8 md-lg:text-[18px]">
					This sliding scale helps us to support financial equality in our community and keep Birch
					Collective for <span class="underline">everyone</span>.
				</p>
				<p class="mt-6 text-[16px] leading-relaxed md-lg:text-[18px]">
					Basic needs are things like: access to food, safety, shelter/housing, pivacy and
					transportation.
				</p>

				<p class="mt-6 text-[16px] leading-relaxed md-lg:text-[18px]">
					Expendable income is the ability to afford things like a coffee out, the cinema or going
					to a gig.
				</p>
			</div>
		</ContentSectionContainer>
	</section>

	<section class="section-mt-lg">
		<ImageGalleryWithModal images={imageGallery.images} title={imageGallery.title} />
	</section>

	<section class="section-mt-lg">
		<ContentSectionContainer variant="text">
			<h2 class="heading-sm">{furtherInfo.heading}</h2>

			<h4 class="sub-heading-lg after-heading-sm-mt">{furtherInfo.subheading}</h4>

			<div class="after-sub-heading-lg-mt">
				<a
					class="mt-4 flex items-center gap-2 text-base text-bc-logo-black/50"
					href={furtherInfo.infoPack.link}
					target="_blank"
				>
					<span>
						<Download />
					</span>
					<span>{furtherInfo.infoPack.label}</span>
				</a>
			</div>
		</ContentSectionContainer>
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
