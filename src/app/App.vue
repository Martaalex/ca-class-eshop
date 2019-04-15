<template>
	<div id="#app">
		<DefaultLayout>
			<Transition
				enter-active-class="route-transition--entering"
				enter-class="route-transition--enter-start"
				enter-to-class="route-transition--enter-end"
				leave-active-class="route-transition--exiting"
				leave-to-class="route-transition--exit-end"
				mode="out-in"
			>
				<RouterView />
			</Transition>
		</DefaultLayout>
	</div>
</template>
<script>
import DefaultLayout from '@/layouts/DefaultLayout'
export default {
	name: 'App',
	components: {
		DefaultLayout
	}
}
</script>
<style lang="scss">
	.route-transition {
		&--entering {
			transition: opacity .2s cubic-bezier(0.0, 0.0, 0.2, 1);
			will-change: opacity;
		}

		&--exiting {
			transition: opacity .15s cubic-bezier(0.4, 0.0, 1, 1);
			will-change: opacity;
		}

		&--enter-start, &--exit-end {
			opacity: 0;
		}

		&--enter-end, &--exit-start {
			opacity: 1;
		}
	}
</style>
