<script lang="ts" module>
	import { ChatCircle, HandHeart, List, X } from 'phosphor-svelte';
	import { useSwipe, type SwipeCustomEvent } from 'svelte-gestures';

	import { browser } from '$app/environment';
	import { afterNavigate } from '$app/navigation';

	import { updateDocumentScroll } from '^helpers';
	import { internal_route } from '^constants';

	import { Tooltip } from '^components';

	const navAlwaysVisible = [
		{ href: internal_route.get_in_touch, icon: ChatCircle, label: 'Get in touch' },
		{ href: internal_route.donate, icon: HandHeart, label: 'Donate' }
	];

	const navWhenOpen = [
		{ href: internal_route.free_programmes, label: 'Free Programmes' },
		{ href: internal_route.paid_services, label: 'Paid Services' },
		{ href: internal_route.about_us, label: 'About Us' },
		{ href: internal_route.meet_the_team, label: 'Meet The Team' },
		{ href: internal_route.practice_methodology, label: 'Practice Methodology' }
		// { href: internal_route.testimonials, label: 'Testimonials' }
	];
</script>

<script lang="ts">
	let isOpen = $state(false);

	$effect(() => {
		if (!browser) return;
		updateDocumentScroll(isOpen ? 'disable' : 'auto');
	});

	afterNavigate(() => {
		isOpen = false;
	});

	function swipeHandler(event: SwipeCustomEvent) {
		const direction = event.detail.direction;

		if (direction === 'right') {
			isOpen = false;
		}
	}
</script>

<header class="z-50 flex w-full items-start justify-between">
	<a class="relative flex flex-col font-display font-bold" href="/">
		<span class="translate-x-5 text-3xl leading-[1.25em] sm:text-[33px] md:text-4xl 4xl:text-[42px]"
			>The</span
		>
		<span
			class="translate-x-10 -translate-y-2.5 text-[42px] leading-[1.25em] sm:text-[46px] md:text-[54px] 4xl:text-6xl"
			>Birch</span
		>
		<span
			class="translate-x-0 -translate-y-5 text-3xl leading-[1.25em] sm:text-[33px] md:text-4xl 4xl:text-[42px]"
			>Collective</span
		>
	</a>

	<nav
		class="flex flex-col items-center gap-2.5 rounded-full bg-bc-logo-black/50 p-[7px] xs:gap-3 xs:p-2 sm:gap-3 lg:p-4"
	>
		<button
			class="cursor-pointer rounded-full border border-white p-1.5 text-white xs:p-2 xs:text-lg xs-sm:text-xl sm:text-[22px] lg:text-2xl"
			onclick={() => (isOpen = !isOpen)}
			type="button"
		>
			{#if !isOpen}
				<List />
			{:else}
				<X />
			{/if}
		</button>

		{#each navAlwaysVisible as { href, icon: Icon, label }}
			<a
				class="grid cursor-pointer place-items-center rounded-full border border-white p-1.5 text-white xs:p-2 xs:text-lg sm:text-[22px] lg:text-2xl"
				{href}
			>
				<Tooltip.Provider>
					<Tooltip.Root>
						<Tooltip.Trigger class="cursor-pointer">
							<Icon />
						</Tooltip.Trigger>
						<Tooltip.Content side="left">
							<p class="text-base">{label}</p>
						</Tooltip.Content>
					</Tooltip.Root>
				</Tooltip.Provider>
			</a>
		{/each}
	</nav>
</header>

<div
	class={`fixed top-0 right-0 z-30 h-screen w-screen bg-white/70 transition-opacity duration-300 ease-in-out ${!isOpen ? 'pointer-events-none opacity-0' : ''}`}
	onclick={() => (isOpen = false)}
	role="button"
	tabindex="0"
	aria-label="Close menu"
	onkeydown={(e) => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			isOpen = false;
		}
	}}
></div>

<div
	class={`fixed top-0 right-0 z-35 h-screen w-[400px] max-w-screen overflow-y-auto border-l-2 border-black/40 bg-white pt-4 pr-8 pl-12 shadow-2xl transition-transform duration-300 ease-in-out ${!isOpen ? 'translate-x-full' : ''}`}
	{...useSwipe(swipeHandler, () => ({
		timeframe: 300,
		minSwipeDistance: 50,
		touchAction: 'none'
	}))}
>
	<div class="mt-48 flex flex-col items-end gap-6 xs:text-xl md:mt-60 lg:text-[22px]">
		{#each navWhenOpen as { href, label }, i}
			<a {href}>{label}</a>
			{#if i < navWhenOpen.length - 1}
				<div class="h-px w-20 border-b border-bc-slate-pine/30"></div>
			{/if}
		{/each}
	</div>
</div>
