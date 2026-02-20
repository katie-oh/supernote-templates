<script lang="ts">
	import Week from "./Week.svelte";

	let { year } = $props();

	console.log({ year });
</script>

<Week 
	startDay="M"
	startDate={new Date("2026-02-16")}
 />