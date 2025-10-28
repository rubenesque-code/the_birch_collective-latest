<script lang="ts" module>
	import { FacebookLogo, InstagramLogo, LinkedinLogo, TiktokLogo } from 'phosphor-svelte';

	import { birch, internal_route } from '^constants';

	import { birch_logo_img, living_wage_logo } from '^images';

	const socials = [
		{ icon: FacebookLogo, link: birch.socials.fb },
		{ icon: InstagramLogo, link: birch.socials.insta },
		{ icon: LinkedinLogo, link: birch.socials.linkedIn },
		{ icon: TiktokLogo, link: birch.socials.tiktok }
	];
	const routesFirstLine = [
		{ label: 'Free programmes', route: internal_route.free_programmes },
		{ label: 'Paid services', route: internal_route.paid_services },
		{ label: 'About us', route: internal_route.about_us }
	];

	const routesSecondLine = [
		{ label: 'Feedback', route: '' },
		{ label: 'Make a complaint', route: '' }
	];

	const routesThirdLine = [{ label: 'Get in touch', route: internal_route.get_in_touch }];
</script>

<footer
	class="mt-32 flex w-full flex-col-reverse items-center justify-between gap-x-8 gap-y-10 px-4 pb-12 sm:px-8 md:mt-40 md:flex-row 4xl:mt-52"
>
	<div class="max-w-[800px]">
		<div class="flex flex-row gap-8 text-3xl text-bc-slate-pine 4xl:text-4xl">
			{#each socials as item}
				<a href={item.link} target="_blank">
					<svelte:component this={item.icon} />
				</a>
			{/each}
		</div>

		<div class="mt-8 flex flex-row flex-wrap gap-x-8 gap-y-4">
			{#each routesFirstLine as item}
				<a
					class="font-medium whitespace-nowrap text-bc-logo-black/70 underline underline-offset-2"
					href={item.route}
					target="_blank"
				>
					{item.label}
				</a>
			{/each}
		</div>

		<div class="mt-3 flex flex-row gap-x-8 gap-y-4">
			{#each routesSecondLine as item}
				<a
					class="font-medium text-bc-logo-black/70 underline underline-offset-2"
					href={item.route}
					target="_blank"
				>
					{item.label}
				</a>
			{/each}
		</div>

		<p class="mt-6 leading-relaxed text-bc-logo-black/60">
			The Birch Collective is a Bristol based CIC specialising in working alongside people in
			nature. We are proud to be a Living Wage employer.
		</p>

		<div class="mt-6 flex flex-row gap-x-8 gap-y-4">
			{#each routesThirdLine as item}
				<a
					class="font-medium text-bc-logo-black/70 underline underline-offset-2"
					href={item.route}
					target="_blank"
				>
					{item.label}
				</a>
			{/each}
		</div>
	</div>

	<div class="flex w-full shrink-0 items-center justify-start gap-8 md:w-auto md:justify-center">
		<enhanced:img class="w-20 md:w-[120px]" src={living_wage_logo} alt="Living Wage logo" />

		<enhanced:img
			class="w-[50px] md:w-[70px]"
			src={birch_logo_img}
			alt="The Birch Collective logo"
		/>
	</div>
</footer>
