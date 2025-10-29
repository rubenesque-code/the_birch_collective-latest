<script lang="ts" module>
	import { ArrowRight } from 'phosphor-svelte';

	import { cn } from '^utils';
</script>

<script lang="ts">
	let {
		text,
		class: className,
		href,
		onClick
	}: { text: string; class?: string; href?: string; onClick?: () => void } = $props();
</script>

{#if href}
	<a class={cn('parent', className)} {href}>
		<span class="text">{text}</span>
		<span class="icon"><ArrowRight /></span>
	</a>
{:else}
	<button class={cn('parent', className)} onclick={onClick}>
		<span class="text">{text}</span>
		<span class="icon"><ArrowRight /></span>
	</button>
{/if}

<style>
	.parent {
		@apply relative inline-flex items-center gap-4 rounded-3xl px-3 py-2 tracking-wide xs-sm:px-5 xs-sm:py-2.5;
	}
	.text {
		@apply text-[17px] font-medium xs-sm:text-lg 4xl:text-xl;
	}
	.icon {
		@apply text-xl xs-sm:text-2xl;
	}
</style>
