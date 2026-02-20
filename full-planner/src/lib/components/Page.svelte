<template>
	<div class="page"><slot /></div>
</template>

<style lang="scss">
	@page {
		.page {
			size: A4;
			margin: 0;
		}
	}
	.page {
		border: 2px solid aqua;
		size: A4;
		margin: 0;
	}
</style>
