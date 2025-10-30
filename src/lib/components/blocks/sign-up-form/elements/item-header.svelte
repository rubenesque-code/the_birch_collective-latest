<script lang="ts">
	let { title } = $props<{
		title: string;
	}>();
</script>

<div class="flex items-center justify-between bg-my-grey-3/5 p-3">
	<div class="font-display text-[30px] font-bold tracking-wide text-black/70 uppercase">
		{title}
	</div>
	<div class="font-display text-2xl font-bold tracking-wide text-bc-slate-pine/70 uppercase">
		Programme Signup
	</div>
</div>
