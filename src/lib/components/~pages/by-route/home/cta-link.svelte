<script lang="ts" module>
	import { ArrowRight } from 'phosphor-svelte';

	import { cn } from '^utils';
</script>

<script lang="ts">
	let { text, class: className, href }: { text: string; class?: string; href: string } = $props();
</script>

<a
	class={cn(
		'relative inline-flex items-center gap-4 rounded-3xl px-3 py-2 tracking-wide xs-sm:px-5 xs-sm:py-2.5',
		className
	)}
	{href}
>
	<span class="text-[17px] font-medium xs-sm:text-lg 4xl:text-xl">{text}</span>
	<span class="text-xl xs-sm:text-2xl"><ArrowRight /></span>
</a>
