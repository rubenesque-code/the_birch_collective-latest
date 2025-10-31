<script lang="ts" module>
	import { ArrowCircleRight, ArrowRight } from 'phosphor-svelte';

	import { internal_route } from '^constants';

	import { drawn_line_black, play_drawn_white } from '^images';
	import { banner } from '^videos';

	import { aboutUs, hero, impact, intro, offer, supportBirch } from '^content/home';

	import { Cta, FlowerIcon, VideoModal } from '^components';
</script>

<script lang="ts">
	let introVidIsOpen = $state(false);
</script>

<VideoModal bind:isOpen={introVidIsOpen} mp4Src={intro.video.src} />

<div class=" w-screen overflow-x-hidden">
	<section class="flex h-screen flex-col md:max-h-screen 4xl:aspect-video 4xl:h-auto">
		<div class="relative h-full w-screen grow">
			<video class="absolute top-0 left-0 h-full w-full object-cover" autoplay loop muted>
				<source src={banner} type="video/mp4" />
				Your browser does not support the video tag.
			</video>

			<div
				class="absolute bottom-0 left-0 z-10 h-3/4 w-full bg-linear-to-t from-bc-slate-pine to-transparent 3xl:h-2/3"
			></div>

			<div class="section-px absolute bottom-10 z-20 w-full 4xl:bottom-32">
				<h1 class="hero-heading">{hero.heading}</h1>

				<div
					class="mt-6 flex max-w-[600px] flex-col gap-4 leading-relaxed font-medium text-white sm:mt-8 lg:mt-10 xl:text-[22px] 4xl:text-2xl"
				>
					{#each hero.lead as line}
						<p>{line}</p>
					{/each}
				</div>

				<div class="mt-8 xs:mt-10">
					<Cta text="Get Involved Today" class="bg-my-pale-yellow" href={''} />
				</div>
			</div>
		</div>
	</section>

	<section class="section-mt flex justify-center">
		<div class="section-px section-container-lg relative">
			<div
				class="absolute top-0 right-0 -z-10 aspect-square w-[80%] max-w-[900px] translate-x-1/2 -translate-y-1/2 rounded-full bg-my-pale-yellow 4xl:max-w-[1000px]"
			></div>

			<div class="flex w-full flex-col justify-between gap-x-12 gap-y-12 xl:flex-row 4xl:gap-20">
				<div class="w-full xl:max-w-[550px] 2xl:max-w-[640px] 4xl:max-w-[800px]">
					<h2 class="intro-heading text-bc-amber">
						{intro.heading}
					</h2>
					<p class="mt-6 xs-sm:mt-8">
						<span class="leading-relaxed text-bc-logo-black">{intro.text}</span>
					</p>
				</div>

				<div
					class="asset-aspect-ratio relative cursor-pointer"
					onclick={() => (introVidIsOpen = true)}
					role="button"
					tabindex="0"
					onkeydown={(e) =>
						(e.key === 'Enter' || e.key === ' ') && ((introVidIsOpen = true), e.preventDefault())}
					aria-label="Play video: The Birch Collective — Our Mission"
				>
					<enhanced:img
						class="h-full w-full max-w-full rounded-md object-cover object-left 3xl:w-[700px] 4xl:w-[850px]"
						src={intro.video.poster}
						alt="The Birch Collective introduction video poster"
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

	<section class="section-px section-mt flex justify-center">
		<div class="w-full">
			<h2 class="section-heading-bold text-bc-slate-pine md:text-center">
				{aboutUs.heading}
			</h2>

			<div class="flex justify-center">
				<div
					class="mt-6 flex w-full flex-col gap-3 md:mt-8 md:max-w-[600px] md:items-center 4xl:w-[800px] 4xl:max-w-none"
				>
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
				<Cta
					class="bg-bc-slate-pine/90 text-white"
					text="About Us"
					href={internal_route.about_us}
				/>
			</div>
		</div>
	</section>

	<section class="section-mt flex justify-center">
		<div class="section-container-lg section-px">
			<div class="relative inline-block flex-col items-start">
				<h2 class="section-heading-small">{offer.heading}</h2>

				<enhanced:img class="absolute bottom-1 h-0.5 w-full opacity-70" src={drawn_line_black} />
			</div>

			<div class="card-grid-container-lg mt-8 w-full">
				{#each offer.sections as item}
					<a
						class="group/tile relative block focus:ring-2 focus:ring-bc-amber focus:outline-none 3xl:w-[700px] 4xl:w-[850px]"
						href={item.link}
						aria-label={item.title}
					>
						<div class="relative">
							<enhanced:img
								class="asset-aspect-ratio rounded-sm object-cover"
								src={item.imgSrc}
								alt={item.imgAlt}
							/>

							<div
								class="absolute bottom-0 left-0 z-10 flex h-1/2 w-full flex-col items-start justify-end rounded-b-sm bg-linear-to-t from-bc-slate-pine/80 to-transparent p-2 pb-6 tracking-wide xl:p-4"
							>
								<h3 class="card-heading text-white">
									{item.title}
								</h3>
							</div>
						</div>

						<div class="mt-3 pl-2 xs-sm:mt-4 xl:pl-4 4xl:mt-6">
							<p class="max-w-[640px] leading-relaxed xl:max-w-[500px] 4xl:max-w-[640px]">
								{item.text}
							</p>

							<span
								class="mt-3 inline-block text-[26px] text-bc-slate-pine xs-sm:text-3xl sm:text-4xl 4xl:mt-4 4xl:text-[42px]"
							>
								<ArrowCircleRight />
							</span>
						</div>
					</a>
				{/each}
			</div>
		</div>
	</section>

	<section class="section-px section-mt flex justify-center">
		<div class="w-full">
			<h2 class="section-heading-bold text-bc-slate-pine md:text-center">
				{impact.heading}
			</h2>

			<div class="flex justify-center">
				<div
					class="mt-6 flex w-full flex-col gap-3 md:mt-8 md:max-w-[600px] md:items-center 4xl:w-[800px] 4xl:max-w-none"
				>
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

			<!-- <div class="mt-12 flex justify-center">
				<a
					class="relative flex items-center gap-4 rounded-3xl bg-bc-slate-pine/70 px-3 py-2 tracking-wide text-white xs-sm:px-5 xs-sm:py-3"
					href={internal_route.about_us}
				>
					<span class="text-[17px] font-medium xs-sm:text-lg">About us</span>
					<span class="text-xl xs-sm:text-2xl"><ArrowRight /></span>
				</a>
			</div> -->
		</div>
	</section>

	<section class="section-mt flex justify-center">
		<div class="section-container-lg section-px">
			<div class="relative inline-block flex-col items-start">
				<h2 class="section-heading-small">{supportBirch.heading}</h2>

				<enhanced:img class="absolute bottom-1 h-0.5 w-full opacity-70" src={drawn_line_black} />
			</div>

			<div
				class="mt-8 flex w-full flex-col justify-between gap-x-20 gap-y-16 xl:flex-row 3xl:gap-x-40"
			>
				{#each supportBirch.sections as item}
					<a
						class="group/tile relative block focus:ring-2 focus:ring-bc-amber focus:outline-none 3xl:w-[700px] 4xl:w-[850px]"
						href={item.link}
						aria-label={item.title}
					>
						<div class="relative">
							<enhanced:img
								class="asset-aspect-ratio rounded-sm object-cover"
								src={item.imgSrc}
								alt={item.imgAlt}
							/>

							<div
								class="absolute bottom-0 left-0 z-10 flex h-1/2 w-full flex-col items-start justify-end rounded-b-sm bg-linear-to-t from-bc-slate-pine/80 to-transparent p-4 pb-6 tracking-wide"
							>
								<div class="flex w-full items-center justify-between gap-4">
									<h3 class="card-heading text-white">
										{item.title}
									</h3>

									<span class="text-2xl text-white xs-sm:translate-y-1.5 sm:text-3xl">
										<ArrowRight weight="bold" />
									</span>
								</div>
							</div>
						</div>

						<div class="mt-3 flex flex-col items-start pl-2 xs-sm:mt-4 xl:pl-4">
							<p class="max-w-[640px] leading-relaxed xl:max-w-[500px] 4xl:max-w-[640px]">
								{item.text}
							</p>
						</div>
					</a>
				{/each}
			</div>
		</div>
	</section>
</div>

<style>
	.hero-heading {
		@apply flex flex-col font-display text-[56px] leading-[1.08em] font-bold tracking-wide text-white xxs:text-6xl xs-sm:text-[62px] sm:max-w-[450px] lg:max-w-[800px] lg:text-7xl 4xl:text-8xl;
	}
	.intro-heading {
		@apply font-display text-[48px] leading-[1.15em] font-bold xs-sm:text-[52px] sm:text-6xl 4xl:text-7xl;
	}

	.section-px {
		@apply px-4 xs-sm:px-6 lg:px-8 2xl:px-12 3xl:px-20 4xl:px-40;
	}
	.section-mt {
		@apply mt-10 xs-sm:mt-14 xl:mt-24 3xl:mt-32 4xl:mt-40;
	}
	.section-container-lg {
		@apply box-content w-full max-w-[1600px] 4xl:max-w-[2000px];
	}
	.section-heading-bold {
		@apply font-display text-[46px] leading-[1.15em] font-bold capitalize xs-sm:text-[50px] xl:text-[56px] 4xl:text-6xl;
	}
	.section-heading-small {
		@apply font-display text-[26px] font-bold text-bc-logo-black/70 uppercase xs:text-[28px] xs-sm:text-[30px] sm-md:text-[32px] 4xl:text-[38px];
	}

	.card-grid-container-lg {
		@apply flex flex-col flex-wrap justify-between gap-x-20 gap-y-16 xl:flex-row 3xl:gap-x-40;
	}

	.asset-aspect-ratio {
		@apply aspect-square xs-sm:aspect-4/3 md:aspect-5/3 md-lg:aspect-video;
	}

	.card-heading {
		@apply mt-3.5 font-display text-[40px] leading-[1.35em] font-bold xs-sm:text-[42px] sm:text-[44px] 4xl:text-[52px];
	}
</style>
