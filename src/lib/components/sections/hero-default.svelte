<script lang="ts" module>
	import type { Snippet } from 'svelte';

	import { cinematic_shot_of_blue_sky_through_leaves } from '^assets/images';
</script>

<script lang="ts">
	let {
		heading,
		lead,
		align = 'right',
		headingColour = 'white',
		children
	}: {
		heading: string;
		lead?: string | string[];
		align?: 'left' | 'right' | 'center-left';
		headingColour?: 'white' | 'yellow';
		children?: Snippet<[]>;
	} = $props();

	const leadNormalised = typeof lead === 'string' ? [lead] : lead;
</script>

<header class="relative flex justify-center">
	<div
		class={`section-x-padding relative box-content w-full overflow-visible pt-40 pb-20 md:pt-46 lg:pt-52 xl:pb-28 ${align !== 'center-left' ? 'max-w-[1800px]' : 'max-w-[1600px] 4xl:max-w-[2000px]'}`}
	>
		<div
			class={`relative flex w-full max-w-[90%] ${align === 'right' ? 'lg:justify-end' : 'lg:justify-start'}`}
		>
			<div class={`flex flex-col ${align === 'right' ? 'lg:items-end' : 'lg:items-start'}`}>
				<h1
					id="programmes-heading"
					class={`hero-heading ${align === 'right' ? 'lg:text-right' : 'lg:text-left'} ${headingColour === 'white' ? 'text-white' : 'text-my-pale-yellow'}`}
				>
					{heading}
				</h1>

				{#if lead}
					<div
						class="mt-6 flex max-w-[600px] flex-col gap-4 leading-relaxed font-medium text-white sm:mt-8 lg:mt-10 xl:text-[22px] 4xl:text-2xl"
					>
						{#each leadNormalised as line}
							<p>{line}</p>
						{/each}
					</div>
				{/if}

				{@render children?.()}
			</div>
		</div>
	</div>

	<div class="angled-polygon absolute top-0 left-0 -z-10 h-full w-full">
		<enhanced:img
			class="h-full w-full object-cover"
			src={cinematic_shot_of_blue_sky_through_leaves}
			alt=""
		/>
		<div class="absolute inset-0 bg-linear-to-t from-bc-slate-pine to-transparent"></div>
	</div>
</header>

<style>
	.angled-polygon {
		clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
	}

	@media (min-width: 768px) {
		.angled-polygon {
			clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
		}
	}

	.hero-heading {
		@apply flex flex-col font-display text-[56px] leading-[1.08em] font-bold tracking-wide text-white xxs:text-6xl xs-sm:text-[62px] sm:max-w-[450px] lg:max-w-[800px] lg:text-7xl 4xl:text-8xl;
	}
</style>
