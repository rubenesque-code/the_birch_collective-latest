<script lang="ts" module>
	import { poster } from '^images/programmes/steering';
	import { expect, hero, imageGallery, info, intro, other } from '^content/steering';

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
	let posterIsOpen = $state(false);
	let signUpFormIsOpen = $state(false);
</script>

<SignUpFormModal bind:isOpen={signUpFormIsOpen} />

<ImageModal
	bind:isOpen={posterIsOpen}
	imgSrc={poster}
	title="<span class='text-bc-amber/90 italic'>Steering</span> poster"
/>

<div class="relative max-w-screen overflow-hidden">
	<Hero heading={hero.heading} lead={hero.lead} align="center-left" headingColour="yellow">
		<div class="mt-8 xs:mt-10">
			<Cta
				class="bg-white"
				href="https://form.jotform.com/252393595086367"
				target="_blank"
				text="Sign Up"
			/>
		</div>
	</Hero>

	<section class="section-mt-lg">
		<ContentSectionContainer variant="text">
			<div class="flex flex-col gap-4">
				{#if typeof intro === 'string'}
					<p class="leading-relaxed">
						{intro}
					</p>
				{:else}
					{#each intro as item}
						<p class="leading-relaxed">
							{item}
						</p>
					{/each}
				{/if}
			</div>
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

	<section class="section-mt-lg">
		<ContentSectionContainer variant="text">
			<h2 class="heading-sm">{expect.heading}</h2>

			<div class="after-heading-sm-mt">
				<div class="flex flex-col gap-8">
					{#each expect.items as { symbol, title, text }}
						<div>
							<h4 class="sub-heading-lg">
								<span class="mr-1 text-3xl">
									{symbol}
								</span>
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
		<ImageGalleryWithModal images={imageGallery.images} title={imageGallery.title} />
	</section>

	<section class="section-mt-xl">
		<SignUpPromptSection onOpenSignUp={() => (signUpFormIsOpen = true)} />
	</section>

	<section class="section-mt-lg">
		<ContentSectionContainer variant="text">
			<h2 class="heading-sm">{other.heading}</h2>

			<h3 class="sub-heading-lg">
				{other.subheading}
			</h3>

			<div class="after-sub-heading-lg-mt">
				<p class="text-right text-base! text-bc-logo-black/60 md:text-lg">
					<span class="text-bc-amber/90 italic">Steering</span> poster
				</p>
				<enhanced:img
					class="mt-1 cursor-pointer"
					src={other.poster.src}
					alt={other.poster.alt}
					onclick={() => (posterIsOpen = true)}
					onkeydown={(e) => {
						if (e.key === 'Enter' || e.key === ' ') {
							e.preventDefault();
							posterIsOpen = true;
						}
					}}
					tabindex="0"
					role="button"
				/>
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
