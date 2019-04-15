<template>
	<div class="product-view">
		<div
			v-if="isRequesting"
			class="product-view__loading"
		>
			<Spinner />
		</div>
		<div
			v-else
			class="product-view__products"
		>
			<div
				v-for="product in products"
				:key="product.id"
				class="product-view__product"
			>
				<ProductBox
					:product="product"
					@click="$router.push({ name: 'Product', params: { id: product.id } })"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import ProductBox from '@/components/ProductBox'
import Spinner from '@/components/Spinner'
export default {
	name: 'ProductsView',
	components: {
		ProductBox,
		Spinner
	},
	data: () => ({
		isRequesting: false,
		products: []
	}),
	async created () {
		this.isRequesting = true
		const { data } = await axios.get('https://boiling-reaches-93648.herokuapp.com/food-shop/products')
		this.products = data
		this.isRequesting = false
	}
}
</script>

<style lang='scss'>
	.product-view {
		display: flex;
		width: 100%;

		&__loading {
			display: flex;
			justify-content: center;
			width: 100%;
		}

		&__products {
			display: flex;
			flex-wrap: wrap;
			margin: 0 -15px;
			justify-content: space-between;
		}

		&__product {
			display: flex;
			flex-flow: column;
			flex: 0 0 100%;
			min-width: 100%;
			margin-bottom: 30px;
			padding: 0 15px;

			@media (min-width: 576px) {
				flex: 0 0 50%;
				min-width: 50%;
			}

			@media (min-width: 768px) {
				flex: 0 0 33%;
				min-width: 33%;
			}

			@media (min-width: 1200px) {
				flex: 0 0 25%;
				min-width: 25%;
			}

			.product-box {
				display: flex;
				flex-flow: column;
				flex: 1;
			}
		}
	}
</style>
