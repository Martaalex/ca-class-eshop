<template>
	<div class="cart">
		<div class="cart__row">
			<div class="cart__column cart__column--left cart__column--center">
				<h1 class="cart__headline">
					My Cart Page
				</h1>
			</div>
			<div class="cart__column cart__column--right cart__column--center">
				<CartSteps
					active="Cart"
					:steps="steps"
				/>
			</div>
		</div>

		<div class="cart__row">
			<div class="cart__column cart__column--left">

				<div
					v-if="totalQuantity"
					class="cart__products"
				>

					<div class="cart__products-header">
						<h2 class="cart__title"> {{ totalQuantity }} item added </h2>
						<h2 class="cart__title"> Total: {{ totalPrice | currency }} </h2>
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
			</div>
			<div class="cart__column cart__column--right">
				<h2 class="cart__title">Price details</h2>
				{{ totalPriceWithTaxes | currency }}
			</div>
		</div>
	</div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import CartProductBox from '@/components/CartProductBox'
import CartSteps from '@/components/CartSteps'
import { INCREASE_COUNT, DECREASE_COUNT } from '@/store/modules/Cart/action-types'
const { mapActions, mapGetters } = createNamespacedHelpers('Cart')

export default {
	name: 'Cart',
	components: {
		CartProductBox,
		CartSteps
	},
	computed: {
		...mapGetters({
			products: 'products',
			quantity: 'quantity',
			totalQuantity: 'totalQuantity',
			totalPrice: 'totalPrice',
			totalPriceWithTaxes: 'totalPriceWithTaxes'
		})
	},
	data: () => ({
		steps: ['Cart', 'Delivery', 'Payment']
	}),
	methods: {
		...mapActions({
			increaseCount: INCREASE_COUNT,
			decreaseCount: DECREASE_COUNT
		})
	}
}
</script>

<style lang="scss">
	.cart {
		display: flex;
		flex-flow: column;
		position: relative;
		background-color: white;
		box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
		border-radius: 5px;

		&__row {
			display: flex;
			flex: 1;
			align-items: stretch;
			justify-content: space-between;
			padding-bottom: 15px;
		}

		&__column {
			display: flex;
			padding: 15px 30px;

			&--left {
				flex: 0 0 60%;
			}

			&--right {
				flex: 0 0 40%;
				border-left: 1px solid rgb(245, 245, 245);
			}

			&--center {
				align-items: center;
				padding: 30px;
			}
		}

		&__headline {
			margin: 0;
		}

		&__title {
			margin: 0;
			font-size: 18px;
		}

		&__products {
			flex: 1;

			&-header {
				display: flex;
				justify-content: space-between;
			}
		}
	}
</style>
