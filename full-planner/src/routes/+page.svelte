<script>
	import Planner from '$lib/components/Planner.svelte';
</script>

<Planner year="2026" />

<style lang="scss">
	:global(.page) {
		outline: 2px solid aqua;
		size: A4;
		width: 210mm;
		height: 297mm;
		margin: 0;
		box-sizing: border-box;
		break-after: page;
	}
</style>
