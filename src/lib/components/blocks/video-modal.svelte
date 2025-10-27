<script lang="ts" module>
	import { browser } from '$app/environment';

	import { updateDocumentScroll } from '^helpers';

	import { Dialog } from '^components';
</script>

<script lang="ts">
	let { isOpen = $bindable(), mp4Src } = $props<{
		isOpen: boolean;
		mp4Src: string;
	}>();

	$effect(() => {
		if (browser) updateDocumentScroll(isOpen ? 'disable' : 'auto');
	});
</script>

<Dialog.Root bind:open={isOpen}>
	<Dialog.Content
		class="flex h-[1600px] max-h-[calc(100vh-24px)] w-[1600px]! max-w-[calc(100vw-24px)]! flex-col rounded-none p-2!  lg:max-h-[calc(100vh-40px)] lg:max-w-[calc(100vw-40px)]! "
	>
		<div class="relative mt-10 grid h-full w-full grow place-items-center">
			<!-- svelte-ignore a11y_media_has_caption -->
			<video
				class="absolute top-1/2 left-1/2 z-10 h-full max-h-full w-full max-w-full -translate-x-1/2 -translate-y-1/2 object-contain"
				autoplay
				controls
			>
				<source src={mp4Src} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		</div>
	</Dialog.Content>
	<Dialog.Overlay class="bg-black" />
</Dialog.Root>
