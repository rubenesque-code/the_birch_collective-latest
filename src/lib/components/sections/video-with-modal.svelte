<script lang="ts" module>
	import { type EnhancedImg } from '^types';

	import { play_drawn_white } from '^assets/images';

	import { VideoModal } from '^components';
</script>

<script lang="ts">
	let {
		title,
		poster,
		posterAlt = '',
		videoSrc,
		ariaLabel = 'Play video',
		modalCloseCallback,
		isOpen = $bindable(false),
		titlePlacement
	}: {
		title?: string;
		poster: EnhancedImg;
		posterAlt?: string;
		videoSrc: string;
		ariaLabel?: string;
		modalCloseCallback?: () => void;
		isOpen: boolean;
		titlePlacement?: 'above' | 'top';
	} = $props();

	const open = () => (isOpen = true);
	const close = () => {
		isOpen = false;
		modalCloseCallback?.();
	};
</script>

<div class="relative">
	{#if title}
		<p
			class={`z-10 text-right text-[17px] font-medium sm:text-base 3xl:text-lg ${titlePlacement === 'top' ? 'absolute top-2 right-2 text-white' : 'text-black/70'}`}
		>
			{title}
		</p>
	{/if}

	<button
		type="button"
		class="relative mt-1 w-full cursor-pointer rounded-md focus:ring-2 focus:ring-bc-amber focus:outline-none sm:mt-2"
		aria-label={ariaLabel}
		onclick={open}
	>
		<enhanced:img
			class="aspect-video w-full rounded-md object-cover md:aspect-video"
			src={poster}
			alt={posterAlt}
		/>

		<span
			class="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
			aria-hidden="true"
		>
			<enhanced:img class="w-[35px] sm:w-10 md:w-[50px]" src={play_drawn_white} alt="" />
		</span>
	</button>
</div>

<VideoModal bind:isOpen mp4Src={videoSrc} />
