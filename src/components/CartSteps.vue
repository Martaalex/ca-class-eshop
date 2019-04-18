<template>
	<div class="cart-steps">
		<ul class="cart-steps__list">
			<li
				v-for="step in steps"
				:key="step"
				:class="['cart-steps__item', {
					'cart-steps__item--active': step === active
				}]"
			>
				{{ step }}
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'CartSteps',
	props: {
		steps: {
			type: Array,
			required: true,
			default: () => []
		},
		active: {
			type: String,
			default: null
		}
	}
}
</script>

<style lang="scss">
	.cart-steps {
		&__list {
			display: flex;
			list-style: none;
			padding: 0;
		}

		&__item {
			display: flex;
			padding-right: 2px;
			align-items: center;
			font-size: 14px;
			font-weight: bold;
			color: rgb(79, 86, 97);

			&:not(:first-child):before {
				content: '';
				border-top: 2px dashed rgb(185, 191, 198);
				padding-right: 30px;
				margin-right: 15px;
			}

			&:not(:last-child):after {
				content: '';
				border-top: 2px dashed rgb(185, 191, 198);
				padding-right: 30px;
				margin-left: 15px;
			}

			&--active {
				color: rgb(56, 198, 132);

				&:not(:first-child):before, &:not(:last-child):after {
					border-top-color: rgb(56, 198, 132);
				}
			}
		}
	}
</style>
