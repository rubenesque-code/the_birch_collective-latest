<script lang="ts" module>
	import { our_mission } from '^assets/videos';

	import { VideoModal } from '^components';
</script>

<script lang="ts">
	let missionVidIsOpen = $state(false);
</script>

<VideoModal bind:isOpen={missionVidIsOpen} mp4Src={our_mission} />

<button onclick={() => (missionVidIsOpen = true)}>CLICK ME</button>
