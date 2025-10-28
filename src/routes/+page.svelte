<script lang="ts" module>
	import { ArrowCircleRight, ArrowRight } from 'phosphor-svelte';

	import { internal_route } from '^constants';

	import { drawn_line_black, play_drawn_white } from '^images';
	import { banner } from '^videos';

	import { aboutUs, hero, impact, intro, offer } from '^content/home';

	import { VideoModal, FlowerIcon } from '^components';
</script>

<script lang="ts">
	let introVidIsOpen = $state(false);
</script>

<VideoModal bind:isOpen={introVidIsOpen} mp4Src={intro.video.src} />

<div class="w-screen overflow-x-hidden">
	<section class="flex h-screen flex-col md:max-h-screen">
		<div class="relative h-screen w-screen grow">
			<video class="absolute top-0 left-0 h-full w-full object-cover" loop muted>
				<source src={banner} type="video/mp4" />
				Your browser does not support the video tag.
			</video>

			<div
				class="absolute bottom-0 left-0 z-10 h-3/4 w-full bg-linear-to-t from-bc-slate-pine to-transparent 3xl:h-2/3"
			></div>

			<div class="section-x-padding absolute bottom-10 z-20 w-full">
				<h1 class="page-title">{hero.heading}</h1>

				<div
					class="mt-6 flex max-w-[600px] flex-col gap-4 leading-relaxed font-medium text-white sm:mt-8 lg:mt-10 xl:text-[22px]"
				>
					{#each hero.lead as line}
						<p>{line}</p>
					{/each}
				</div>

				<div class="mt-8 xs:mt-10">
					<button
						class="relative flex items-center gap-4 rounded-3xl bg-my-pale-yellow px-3 py-2 tracking-wide xs-sm:px-5 xs-sm:py-2.5"
						type="button"
					>
						<span class="text-[17px] font-medium xs-sm:text-lg">Get Involved Today</span>
						<span class="text-xl xs-sm:text-2xl"><ArrowRight /></span>
					</button>
				</div>
			</div>
		</div>
	</section>

	<section class="relative mt-10 flex justify-center xs-sm:mt-14 xl:mt-24">
		<div class="section-x-padding relative box-content w-full max-w-[1600px]">
			<div
				class="absolute top-0 right-0 -z-10 aspect-square w-[80%] max-w-[900px] translate-x-1/2 -translate-y-1/2 rounded-full bg-my-pale-yellow"
			></div>

			<div class="flex w-full flex-col justify-between gap-x-12 gap-y-12 xl:flex-row">
				<div class="w-full xl:max-w-[550px] 2xl:max-w-[640px]">
					<h2 class="page-intro-section-main-title text-bc-amber">
						{intro.heading}
					</h2>
					<p class="mt-6 xs-sm:mt-8">
						<span class="leading-relaxed text-bc-logo-black">{intro.text}</span>
					</p>
				</div>

				<!-- svelte-ignore a11y_click_events_have_key_events -->
				<!-- svelte-ignore a11y_no_static_element_interactions -->
				<div
					class="section-asset-aspect-ratio relative cursor-pointer"
					onclick={() => (introVidIsOpen = true)}
				>
					<enhanced:img
						class="h-full w-full max-w-full rounded-md object-cover object-left 3xl:w-[700px]"
						src={intro.video.poster}
						alt=""
					/>

					<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
						<enhanced:img class="w-[50px]" src={play_drawn_white} alt="Play icon " />
					</div>

					<div class="absolute top-2 right-2">
						<p class="text-[17px] font-medium text-white">{intro.video.title}</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section
		class="section-x-padding relative mt-16 flex justify-center xs-sm:mt-20 xl:mt-28 3xl:mt-36"
	>
		<div class="w-full">
			<h2 class="section-title-bold text-bc-slate-pine">
				{aboutUs.heading}
			</h2>

			<div class="flex justify-center">
				<div class="mt-6 flex w-full flex-col gap-3 md:mt-8 md:max-w-[600px] md:items-center">
					{#each aboutUs.bullets as text}
						<p class="flex items-center gap-4">
							<FlowerIcon />

							<span
								class="leading-relaxed text-black/90 underline decoration-bc-amber/30 underline-offset-2"
							>
								{text}
							</span>
						</p>
					{/each}
				</div>
			</div>

			<div class="mt-12 flex justify-center">
				<a
					class="relative flex items-center gap-4 rounded-3xl bg-bc-slate-pine/70 px-3 py-2 tracking-wide text-white xs-sm:px-5 xs-sm:py-3"
					href={internal_route.about_us}
				>
					<span class="text-[17px] font-medium xs-sm:text-lg">Read more</span>
					<span class="text-xl xs-sm:text-2xl"><ArrowRight /></span>
				</a>
			</div>
		</div>
	</section>

	<section class="section--default">
		<div class="w-full max-w-[1600px]">
			<div class="relative inline-block flex-col items-start">
				<h2 class="section-title-small">{offer.heading}</h2>

				<enhanced:img class="absolute bottom-1 h-0.5 w-full opacity-70" src={drawn_line_black} />
			</div>

			<div
				class="mt-8 flex w-full flex-col justify-between gap-x-20 gap-y-16 xl:flex-row 3xl:gap-x-40"
			>
				{#each offer.sections as item}
					<a
						class="group/tile relative block focus:ring-2 focus:ring-bc-amber focus:outline-none 3xl:w-[700px]"
						href={item.link}
						aria-label={item.title}
					>
						<div class="relative">
							<enhanced:img
								class="section-asset-aspect-ratio rounded-sm object-cover"
								src={item.imgSrc}
								alt={item.imgAlt}
							/>

							<div
								class="absolute bottom-0 left-0 z-10 flex h-1/2 w-full flex-col items-start justify-end rounded-b-sm bg-linear-to-t from-bc-slate-pine/80 to-transparent p-2 pb-6 tracking-wide xl:p-4"
							>
								<h3 class="card-title text-white">
									{item.title}
								</h3>
							</div>
						</div>

						<div class="mt-3 pl-2 xs-sm:mt-4 xl:pl-4">
							<p class="max-w-[640px] leading-relaxed xl:max-w-[500px]">
								{item.text}
							</p>

							<span
								class="mt-3 inline-block text-[26px] text-bc-slate-pine xs-sm:text-3xl sm:text-4xl"
							>
								<ArrowCircleRight />
							</span>
						</div>
					</a>
				{/each}
			</div>
		</div>
	</section>

	<section class="section--default">
		<div class="w-full">
			<h2 class="section-title-bold text-bc-slate-pine">{impact.heading}</h2>

			<div class="flex justify-center">
				<div class="w-full md:max-w-[600px]">
					<p class="mt-3 leading-relaxed text-bc-logo-black/80 sm:mt-4 md-lg:mt-5">
						{impact.lead}
					</p>

					<div class="mt-6 flex flex-col gap-3 md:mt-8 md:items-center">
						{#each impact.bullets as text}
							<p class="flex items-center gap-4">
								<FlowerIcon />
								<span
									class="leading-relaxed text-black/90 underline decoration-bc-amber/30 underline-offset-2"
								>
									{text}
								</span>
							</p>
						{/each}
					</div>
				</div>
			</div>

			<!-- <div class="mt-12 flex justify-center">
				<a
					class="relative flex items-center gap-4 rounded-3xl bg-bc-slate-pine/70 px-3 py-2 tracking-wide text-white xs-sm:px-5 xs-sm:py-3"
					href={internal_route.about_us}
				>
					<span class="text-[17px] font-medium xs-sm:text-lg">Read more</span>
					<span class="text-xl xs-sm:text-2xl"><ArrowRight /></span>
				</a>
			</div> -->
		</div>
	</section>
</div>

<style>
	.page-title {
		@apply flex flex-col font-display text-[56px] leading-[1.08em] font-bold tracking-wide text-white xxs:text-6xl xs-sm:text-[62px] sm:max-w-[450px] lg:max-w-[800px] lg:text-7xl 4xl:text-8xl;
	}
	.page-intro-section-main-title {
		@apply font-display text-[48px] leading-[1.15em] font-bold xs-sm:text-[52px] sm:text-6xl;
	}

	.section-x-padding {
		@apply px-4 xs-sm:px-6 lg:px-8 2xl:px-12 3xl:px-20 4xl:px-40;
	}
	.section-title-bold {
		@apply font-display text-[46px] leading-[1.15em] font-bold xs-sm:text-[50px] md:text-center xl:text-[56px];
	}
	.section--default {
		@apply relative mt-10 flex justify-center px-4 xs-sm:mt-14 xs-sm:px-6 lg:px-8 2xl:px-12 3xl:mt-32 3xl:px-20 4xl:px-40;
	}
	.section-asset-aspect-ratio {
		@apply aspect-square xs-sm:aspect-4/3 md:aspect-5/3 md-lg:aspect-video;
	}

	.card-title {
		@apply mt-3.5 font-display text-[40px] leading-[1.35em] font-bold xs-sm:text-[42px] sm:text-[44px];
	}
</style>
