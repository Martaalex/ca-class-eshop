<template>
	<div class="product-box">
		<div class="product-box__favorite">
			<HeartIcon
				:active="isFavorite"
				@click="setFavorite"
			/>
		</div>
		<div
			:class="['product-box__image', { 'product-box__image--loading': !isLoaded }]"
			@click="$emit('click', $event)"
		>
			<img
				:src="image"
				:alt="product.name"
			>
		</div>

		<div
			class="product-box__content"
			@click="$emit('click', $event)"
		>
			<h4 class="product-box__title">
				{{ product.name }}
			</h4>

			<h4 class="product-box__description">
				{{ product.description }}
			</h4>

			<h2 class="product-box__price-text">
				{{ product.price | currency }}
			</h2>
		</div>
		<div class="product-box__button">
			<BaseButton>
				<FontAwesomeIcon
					class="product-box__button-icon"
					:icon="['fas', 'cart-plus']"
				/>
				Add to cart
			</BaseButton>
		</div>
	</div>
</template>
<script>
import BaseButton from '@/components/BaseButton'
import HeartIcon from '@/components/HeartIcon'
export default {
	name: 'ProductBox',
	components: {
		BaseButton,
		HeartIcon
	},
	filters: {
		currency (value) {
			return new Intl.NumberFormat('lt-LT',
				{
					style: 'currency',
					currency: 'EUR'
				}
			).format(value)
		}
	},
	props: {
		product: {
			type: Object,
			required: true,
			default: () => ({})
		}
	},
	data: () => ({
		isLoaded: false,
		isFavorite: false
	}),
	computed: {
		image () {
			return `${this.product.image}?c=${this._uid}`
		}
	},
	created () {
		this.loadImage()
	},
	methods: {
		loadImage () {
			const img = new Image()
			img.src = this.image
			img.onload = () => {
				this.isLoaded = true
			}
		},
		setFavorite () {
			this.isFavorite = !this.isFavorite
		}
	}
}
</script>
<style lang="scss">
	.product-box {
		position: relative;
		background-color: white;
		box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
		border-radius: 5px;
		overflow: hidden;
		animation: ProductFadeIn .2s cubic-bezier(0.4, 0.0, 0.2, 1);

		&__favorite {
			z-index: 1;
			position: absolute;
			top: 10px;
			left: 10px;
		}

		&__image {
			border-bottom: 1px solid whitesmoke;
			margin-bottom: 15px;
			min-width: 262.5px;
			min-height: 262.5px;
			transition: all .2s cubic-bezier(0.4, 0.0, 0.2, 1);;
			opacity: 1;
			filter: blur(0);

			img {
				width: 100%;
				vertical-align: top;
				user-select: none;
			}

			&--loading {
				opacity: 0;
				filter: blur(8px);
			}
		}

		&__content {
			display: flex;
			flex-flow: column;
			flex: 1;
			padding: 0 15px;
		}

		&__title {
			font-size: 16px;
			line-height: 1;
			margin: 0;
			margin-bottom: 15px;
			flex: 1;

			&:first-letter {
				text-transform: uppercase;
			}
		}

		&__price-text {
			margin: 0;
			font-size: 18px;
			padding: 15px 0;
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
		}

		&__button {
			margin-bottom: 15px;
			padding: 0 15px;

			&-icon {
				margin-right: 7.5px;
			}
		}
	}

	@keyframes ProductFadeIn {
		from {
			opacity: 0;
		}
		to	{
			opacity: 1;
		}
	}
</style>
