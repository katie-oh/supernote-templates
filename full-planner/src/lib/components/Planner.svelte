<script lang="ts">
	import Week from "./Week.svelte";

	let { year } = $props();

	console.log({ year });
</script>

<Week 
	startDate="2026-02-16"
 />