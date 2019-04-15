<template>
	<main class="default-layout">
		<AppHeader />
		<div class="container">
			<slot />
		</div>
		<AppFooter />
	</main>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'
export default {
	name: 'DefaultLayout',
	components: {
		AppHeader,
		AppFooter
	}
}
</script>
