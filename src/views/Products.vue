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
					:liked="favorites.includes(product.id)"
					@like="updateFavorite"
					@click="goToProduct(product.id)"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import { REQUESTING } from '@/store/modules/Products/status-types'
import { FETCH_DATA } from '@/store/modules/Products/action-types'
import { UPDATE_FAVORITE } from '@/store/modules/Products/mutation-types'

import ProductBox from '@/components/ProductBox'
import Spinner from '@/components/Spinner'

const { mapActions, mapMutations, mapGetters } = createNamespacedHelpers('Products')

export default {
	name: 'ProductsView',
	components: {
		ProductBox,
		Spinner
	},
	computed: {
		...mapGetters({
			status: 'status',
			products: 'products',
			favorites: 'favorites'
		}),
		isRequesting () {
			return this.status === REQUESTING
		}
	},
	async created () {
		await this.fetchData()
	},
	methods: {
		...mapActions({
			fetchData: FETCH_DATA
		}),
		...mapMutations({
			updateFavorite: UPDATE_FAVORITE
		}),

		goToProduct (id) {
			this.$router.push({
				name: 'Product',
				params: { id }
			})
		}
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
