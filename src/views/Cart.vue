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
				<RouterView />
			</div>
			<div class="cart__column cart__column--right">
				<div class="price-details">
					<div class="price-details__header">
						<h2 class="cart__title">
							Price Details
						</h2>
					</div>
					<div class="price-details__content">
						<ul class="price-details__list">
							<li class="price-details__list-item">
								<span class="price-details__title">Bag total</span>
								<span class="price-details__value"> {{ totalPrice | currency }} </span>
							</li>
							<li class="price-details__list-item">
								<span class="price-details__title">Estimated VAC/CST</span>
								<span class="price-details__value"> {{ totalPriceWithTaxes - totalPrice | currency }} </span>
							</li>
							<li class="price-details__list-item">
								<span class="price-details__title">Coupon Discount</span>
								<a class="price-details__value price-details__value--link">
									{{ discountCode ? discountCode : `+ Apply code` }}
								</a>
							</li>
							<li class="price-details__list-item">
								<span class="price-details__title">Delivery</span>
								<RouterLink
									:to="{ name: 'Cart:Delivery' }"
									class="price-details__value price-details__value--link"
								>
									+ Add delivery
								</RouterLink>
							</li>
							<li class="price-details__list-item">
								<span class="price-details__title">Total price</span>
								<span class="price-details__value">
									{{ totalFinalPrice | currency }}
								</span>
							</li>
						</ul>
						<BaseButton> Place order </BaseButton>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import CartSteps from '@/components/CartSteps'
import BaseButton from '@/components/BaseButton'
import {
	APPLY_DISCOUNT
} from '@/store/modules/Cart/action-types'
const { mapActions, mapGetters } = createNamespacedHelpers('Cart')

export default {
	name: 'Cart',
	components: {
		CartSteps,
		BaseButton
	},
	data: () => ({
		error: null,
		discountInput: null,
		steps: ['Cart', 'Delivery', 'Payment']
	}),
	computed: {
		...mapGetters({
			totalPrice: 'totalPrice',
			totalPriceWithTaxes: 'totalPriceWithTaxes',
			totalFinalPrice: 'totalFinalPrice',
			discountCode: 'discountCode'
		})
	},
	created () {
		if (this.discountCode) {
			this.discountInput = this.discountCode
			this.handleDiscountClick()
		}
	},
	methods: {
		...mapActions({
			applyDiscount: APPLY_DISCOUNT
		}),
		async handleDiscountClick () {
			try {
				this.error = null
				await this.applyDiscount(this.discountInput)
			} catch (error) {
				this.error = error.message
			}
		}
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
	.price-details {
		width: 100%;

		&__content {
			font-size: 14px;
			margin-top: 15px;
		}

		&__list {
			list-style: none;
			padding: 0;
		}

		&__list-item {
			display: flex;
			justify-content: space-between;
			padding-bottom: 15px;
		}

		&__title {
			color: rgb(60, 69, 82);
		}

		&__value {
			color: rgb(41, 49, 61);
			font-weight: bold;
			font-size: 16px;

			&--link {
				color: hsl(152, 56%, 50%);

				&:hover {
					opacity: .7;
					cursor: pointer
				}
			}
		}
	}
</style>
