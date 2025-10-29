<script lang="ts" module>
	import type { Snippet } from 'svelte';
</script>

<script lang="ts">
	let { variant, children }: { variant: 'text' | 'video'; children: Snippet<[]> } = $props();
</script>

<div class="flex justify-center">
	<div
		class={`section-px box-content w-full ${variant === 'text' ? 'max-w-3xl 4xl:max-w-[900px]' : 'max-w-[900px] 4xl:max-w-[1200px]'}`}
	>
		{@render children()}
	</div>
</div>

<style>
	.section-px {
		@apply px-4 xs-sm:px-6 lg:px-8 2xl:px-12 3xl:px-20 4xl:px-40;
	}
</style>
