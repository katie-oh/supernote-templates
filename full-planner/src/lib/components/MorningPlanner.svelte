<script lang="ts">
	import { addDaysToDate } from '$lib/helpers/date.helpers';
	import { weekdays, type Day, type Weekday } from '$lib/types/dates.types';
	import MorningPlanner from './MorningPlanner.svelte';

	type Props = {
		date: Date;
	};
	const { date }: Props = $props();
</script>

<div class="page">
    {date}
</div>