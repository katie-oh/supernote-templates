<script lang="ts">
	import { addDaysToDate, formatDate } from '$lib/helpers/date.helpers';
	import { weekdays, type Day, type Weekday } from '$lib/types/dates.types';

	type Props = {
		date: Date;
	};
	const { date }: Props = $props();

	const formattedDate = $derived(formatDate(date));
</script>

<div class="page">
	<div class="border">
		<div class="main-container">
			<div class="date">{formattedDate} ({weekdays[date.getDay()]})</div>
			<div class="time">
				<div>5&nbsp;PM</div>
				<div></div>
			</div>
			<div class="time">
				<div>6</div>
				<div></div>
			</div>
			<div class="time">
				<div>7</div>
				<div></div>
			</div>
			<div class="time">
				<div>8</div>
				<div></div>
			</div>
			<div class="time">
				<div>9</div>
				<div></div>
			</div>
			<div class="time">
				<div>10</div>
				<div></div>
			</div>
            <div class="time">
				<div>11</div>
				<div></div>
			</div>
            <div class="time">
				<div>12&nbsp;AM</div>
				<div></div>
			</div>
            <div class="time">
				<div>1</div>
				<div></div>
			</div>
            <div class="time">
				<div>2</div>
				<div></div>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.border {
		& > .main-container {
			padding: 2% 2% 0 7%;

			.date {
				border-bottom: 0.5px solid gray;
				padding: 30px 0 5px;
				text-align: right;
				font-size: 22px;
			}

			.time {
				border-bottom: 0.5px solid gray;
				padding: 30px 0;
				position: relative;
				display: flex;
				align-items: center;

				&:first-of-type {
					padding-top: 10px;
				}

				& > div:first-of-type {
					padding-right: 15px;
				}

				& > div:last-of-type {
					width: 100%;
					border-top: 0.5px solid gray;
				}
			}
		}
	}
</style>
