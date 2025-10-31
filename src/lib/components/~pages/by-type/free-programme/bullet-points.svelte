<script lang="ts">
	import { FlowerIcon } from '^components';

	let {
		items,
		variant
	}: {
		items: Array<{ text: string; symbol: string }> | Array<string>;
		variant?: 'symbol' | 'bullet';
	} = $props();
</script>

<div class="flex flex-col gap-3">
	{#each items as item}
		<div class="flex items-center gap-3">
			{#if typeof item === 'string'}
				<span>
					<FlowerIcon />
				</span>
				<p class="text">
					{item}
				</p>
			{:else}
				<span>
					{#if variant === 'bullet'}
						<span>
							<FlowerIcon />
						</span>
					{:else}
						{item.symbol}
					{/if}
				</span>
				<text class="text">
					{item.text}
				</text>
			{/if}
		</div>
	{/each}
</div>

<style>
	.text {
		@apply leading-[1.6em] text-black/90 decoration-bc-amber/30 underline-offset-2;
	}
</style>
