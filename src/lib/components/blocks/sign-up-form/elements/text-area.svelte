<script lang="ts" module>
	import type { HTMLTextareaAttributes } from 'svelte/elements';

	import type { WithElementRef } from '^utils';

	import { Textarea } from '^components';
</script>

<script lang="ts">
	let {
		value = $bindable(),
		onkeyup,
		placeholder = 'Enter response here'
	}: {
		value: string;
		onkeyup?: WithElementRef<HTMLTextareaAttributes>['onkeyup'];
		placeholder?: string;
	} = $props();
</script>

<Textarea.Textarea
	class="mt-2 h-[120px] w-full resize-none py-2 text-base! focus:outline-none focus-visible:border-bc-logo-black focus-visible:ring-0 "
	{placeholder}
	bind:value
	{onkeyup}
/>
