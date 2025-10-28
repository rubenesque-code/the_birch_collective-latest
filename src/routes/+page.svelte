<script lang="ts" module>
	import { ArrowRight } from 'phosphor-svelte';

	import { ro_centered_staff_participants_standing_forest_bg } from '^images';
	import { banner, our_mission } from '^videos';

	import { VideoModal } from '^components';
	import { play_drawn_white } from '^assets/images/icons';
	import { hero } from '^content/home';
</script>

<script lang="ts">
	let bannerVidIsOpen = $state(false);
	let ourmissionVidIsOpen = $state(false);
</script>

<VideoModal bind:isOpen={bannerVidIsOpen} mp4Src={banner} />

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
						Welcome to <span class="">The Birch Collective</span>
					</h2>
					<p class="mt-6 xs-sm:mt-8">
						<span class="leading-relaxed text-bc-logo-black">
							The Birch Collective believes in the power of nature, community, and connection. We’re
							a social enterprise dedicated to helping people aged 16-25 in Bristol and the
							surrounding areas who might be feeling isolated, overwhelmed, or unsure of their place
							in the world. Whether you’re dealing with anxiety, depression, or just looking for a
							space to belong, we’re here to walk alongside you.
						</span>
					</p>
				</div>

				<!-- svelte-ignore a11y_click_events_have_key_events -->
				<!-- svelte-ignore a11y_no_static_element_interactions -->
				<div
					class="section-asset-aspect-ratio relative cursor-pointer"
					onclick={() => (ourmissionVidIsOpen = true)}
				>
					<enhanced:img
						class="h-full w-full max-w-full rounded-md object-cover object-left 3xl:w-[700px]"
						src={ro_centered_staff_participants_standing_forest_bg}
						alt=""
					/>

					<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
						<enhanced:img
							class="w-[50px]"
							src={play_drawn_white}
							alt="Play icon hand drawn style"
						/>
					</div>

					<div class="absolute top-2 right-2">
						<p class="text-[17px] font-medium text-white">The Birch Collective — Our Mission</p>
					</div>
				</div>
			</div>
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
</style>
