<template>
	<div
		v-if="totalQuantity"
		class="cart__products"
	>
		<div class="cart__products-header">
			<h2 class="cart__title">
				{{ totalQuantity }} item added
			</h2>
			<h2 class="cart__title">
				Total: {{ totalPrice | currency }}
			</h2>
		</div>
		<div class="cart__products-content">
			<CartProductBox
				v-for="product in products"
				:key="product.id"
				:product="product"
				:count="quantity[product.id]"
				@plus="increaseCount"
				@minus="decreaseCount"
			/>
		</div>
	</div>
	<div v-else>
		No products
	</div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import {
	INCREASE_COUNT,
	DECREASE_COUNT
} from '@/store/modules/Cart/action-types'
import CartProductBox from '@/components/CartProductBox'
const { mapActions, mapGetters } = createNamespacedHelpers('Cart')
export default {
	name: 'CartProducts',
	components: {
		CartProductBox
	},
	computed: {
		...mapGetters({
			products: 'products',
			quantity: 'quantity',
			totalQuantity: 'totalQuantity',
			totalPrice: 'totalPrice'
		})
	},
	methods: {
		...mapActions({
			increaseCount: INCREASE_COUNT,
			decreaseCount: DECREASE_COUNT
		})
	}
}
</script>

<style>

</style>
