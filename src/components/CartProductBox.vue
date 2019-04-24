<template>
	<div class="cart-product-box">
		<img
			:src="product.image"
			alt=""
		>
		<div class="cart-product-box__content">
			<div class="cart-product-box__text">
				<h3 class="cart-product-box__title">
					{{ product.name }}
				</h3>
				<p class="cart-product-box__description">
					{{ product.description }}
				</p>
				<small>{{ product.price | currency }}</small>
			</div>
			<div class="cart-product-box__counter">
				<BasePlusMinus
					:value="count"
					class="cart-product-box__input"
					@plus="$emit('plus', product)"
					@minus="$emit('minus', product)"
				/>
				<span class="cart-product-box__total">
					{{ product.price * count | currency }}
				</span>
			</div>
		</div>
	</div>
</template>

<script>
import BasePlusMinus from '@/components/BasePlusMinus'
export default {
	name: 'CartProductBox',
	components: {
		BasePlusMinus
	},
	props: {
		product: {
			type: Object,
			required: true,
			default: () => ({})
		},
		count: {
			type: Number,
			default: 0
		}
	}
}
</script>

<style lang="scss">
	.cart-product-box {
		display: flex;
		align-items: flex-start;
		margin-top: 15px;

		img {
			width: 90px;
			min-width: 90px;
			margin-right: 15px;
			border-radius: 5px;
		}

		&__input {
			transform: scale(.8);
		}

		&__content {
			display: flex;
			align-items: center;
		}

		&__title {
			margin: 0;
			font-size: 18px;
			padding-bottom: 5px;
		}

		&__description {
			display: -webkit-box;
			-webkit-line-clamp: 3;
			-webkit-box-orient: vertical;
			overflow: hidden;
			color: rgba(black, .51);
			font-size: 14px;
			line-height: 1;
			font-weight: normal;
			margin: 0;
			height: 45px;
			line-height: 1.1;
		}

		&__counter {
			display: flex;
			flex-flow: column;
			align-items: center;
			padding-left: 15px;
		}

		&__total {
			font-size: 14px;
			margin-top: 5px;
		}
	}
</style>
