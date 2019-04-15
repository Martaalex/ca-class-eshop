<template>
	<div class="app-header">
		<header class="app-header__container container">
			<div class="app-header__logo">
				<h3 @click="$router.push({ name: 'Products' })">
					FoodShop.lt
				</h3>
			</div>
			<div class="app-header__icons">
				<CartIcon @click="$router.push({ name: 'Cart' })" />
			</div>
		</header>
	</div>
</template>

<script>
import CartIcon from '@/components/CartIcon'
export default {
	name: 'AppHeader',
	components: {
		CartIcon
	}
}
</script>
<style lang="scss">
	.app-header {
		z-index: 2;
		display: flex;
		align-items: center;
		height: 64px;
		background-color: white;
		box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.2);
		position: sticky;
		top: 0;
		width: 100%;
		margin-bottom: 30px;

		&__container {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
	}
</style>
