<script lang="ts">
	import { addDaysToDate } from '$lib/helpers/date.helpers';
	import { weekdays, type Day, type Weekday } from '$lib/types/dates.types';
	import MorningPlanner from './MorningPlanner.svelte';

	type Props = {
		startDay: Weekday;
		startDate: Date;
	};
	const { startDate }: Props = $props();

	let days: Day[] = weekdays.map((weekday, i) => ({
        day: weekday,
        date: addDaysToDate(startDate, i)
    }));
</script>

{#each days as day}
	<MorningPlanner date={day.date}/>
{/each}
