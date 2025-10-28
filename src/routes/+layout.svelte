<script lang="ts" module>
	import '../app.css';

	import { fly } from 'svelte/transition';

	import { Footer, Header, HeaderVisibility } from '^components';
</script>

<script lang="ts">
	let { children } = $props();

	let hideHeader = $state(false);
</script>

<div class="fixed top-0 left-0 z-40 w-screen overflow-x-hidden">
	{#if !hideHeader}
		<div
			class="relative flex items-center justify-between px-3 pt-3 xs:px-4 xs:pt-4"
			transition:fly={{ y: '-100%' }}
		>
			<Header />
		</div>
	{/if}
</div>

{@render children?.()}

<Footer />

<HeaderVisibility bind:hideHeader />
