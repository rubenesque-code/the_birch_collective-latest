<script lang="ts" module>
	import { Checkbox as CheckboxPrimitive } from 'bits-ui';

	import type { WithoutChildrenOrChild } from '^utils';

	import { Checkbox, Label } from '^components';
</script>

<script lang="ts">
	let {
		id,
		label,
		checked = $bindable(),
		onCheckedChange
	} = $props<{
		id: string;
		label: string;
		checked: boolean | undefined;
		onCheckedChange: WithoutChildrenOrChild<CheckboxPrimitive.RootProps>['onCheckedChange'];
	}>();

	let checkedDerived = $derived<boolean>(typeof checked === 'undefined' ? false : checked);
</script>

<div class="flex items-center gap-4">
	<Checkbox
		class="data-[state=checked]:border-white data-[state=checked]:bg-white data-[state=checked]:text-bc-amber"
		{id}
		bind:checked={checkedDerived}
		{onCheckedChange}
	/>
	<Label class="text-[16px] font-normal" for={id}>{label}</Label>
</div>
