<script lang="ts" module>
	import type { ProgrammePreview } from '^types';

	import { Hero } from '^components';
	import { ArrowCircleRight } from 'phosphor-svelte';
</script>

<script lang="ts">
	let {
		hero,
		programmes
	}: { hero: { heading: string; lead: string | string[] }; programmes: ProgrammePreview[] } =
		$props();
</script>

<div class="w-screen overflow-hidden">
	<Hero {...hero} align="center-left" headingColour="white" />

	<main class="mt-8 flex justify-center 3xl:mt-20">
		<section class="section-px section-container-lg">
			<div class="card-grid-container-lg mt-8 w-full">
				{#each programmes as programme (programme.title)}
					<article
						class="group/tile relative focus:ring-2 focus:ring-bc-amber focus:outline-none"
						aria-labelledby={`tile-${programme.title}`}
					>
						<a class="w-full" href={programme.link} aria-label={programme.title}>
							<div class="relative">
								<enhanced:img
									class="asset-aspect-ratio rounded-sm object-cover"
									src={programme.imgSrc}
									alt={programme.imgAlt ?? programme.title}
									loading="lazy"
								/>

								<div
									class="absolute bottom-0 left-0 z-10 flex h-1/2 w-full flex-col items-start justify-end rounded-b-sm bg-linear-to-t from-bc-slate-pine/80 to-transparent p-4 pb-6 tracking-wide xl:p-4"
								>
									<h3 id={`tile-${programme.title}`} class="card-heading text-white">
										{programme.title}
									</h3>
								</div>
							</div>

							<div class="mt-3 pl-2 xs-sm:mt-4 xl:pl-4 4xl:mt-6">
								<p class="max-w-[640px] leading-relaxed xl:max-w-[500px] 4xl:max-w-[640px]">
									{programme.text}
								</p>

								<span
									class="mt-3 inline-block text-[26px] text-bc-slate-pine xs-sm:text-3xl sm:text-4xl 4xl:mt-4 4xl:text-[42px]"
								>
									<ArrowCircleRight />
								</span>
							</div>
						</a>
					</article>
				{/each}
			</div>
		</section>
	</main>
</div>

<style>
	.section-px {
		@apply px-4 xs-sm:px-6 lg:px-8 2xl:px-12 3xl:px-20 4xl:px-40;
	}
	.section-container-lg {
		@apply box-content w-full max-w-[1600px] 4xl:max-w-[2000px];
	}

	.card-grid-container-lg {
		@apply flex flex-col flex-wrap justify-between gap-20 gap-y-16 xl:grid xl:grid-cols-2 xl:flex-row 3xl:gap-x-40 3xl:gap-y-32;
	}

	.asset-aspect-ratio {
		@apply aspect-square xs-sm:aspect-4/3 sm-md:aspect-5/3 md-lg:aspect-video xl:aspect-4/3 3xl:aspect-5/3;
	}

	.card-heading {
		@apply mt-3.5 font-display text-[40px] leading-[1.35em] font-bold xs-sm:text-[42px] sm:text-[44px] 4xl:text-[52px];
	}
</style>
