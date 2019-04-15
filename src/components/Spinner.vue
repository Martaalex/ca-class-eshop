<template>
	<div class="app-spinner" />
</template>
<script>
export default {
	name: 'AppSpinner'
}
</script>
<style lang="scss">
	.app-spinner {
		display: inline-block;
		width: 50px;
		height: 50px;
		border: 3px solid rgba(56, 198, 132, .3);
		border-radius: 50%;
		border-top-color: rgb(56, 198, 132);
		animation: SpinnerAnimation 1s ease-in-out infinite;
	}

	@keyframes SpinnerAnimation {
		to {
			transform: rotate(360deg);
		}
	}
</style>
