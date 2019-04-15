<template>
	<div
		class="cart-icon"
		@click="$emit('click', $event)"
	>
		<FontAwesomeIcon :icon="['fas', 'shopping-cart']" />
		<small
			v-if="badge"
			class="cart-icon__badge"
		>
			{{ count }}
		</small>
	</div>
</template>

<script>
export default {
	name: 'CartIcon',
	props: {
		badge: {
			type: [Number, String],
			default: 0
		}
	},
	computed: {
		count () {
			if (this.badge && this.badge < 10) {
				return this.badge
			} else if (this.badge) {
				return '9+'
			}
			return 0
		}
	}
}
</script>

<style lang="scss">
	.cart-icon {
		position: relative;

		&__badge {
			position: absolute;
			bottom: 0;
			right: -10px;
			display: flex;
			align-items: center;
			justify-content: center;
			color: white;
			background-color: hsl(348, 100%, 61%);
			height: 15px;
			width: 15px;
			border-radius: 100%;
			font-size: 11px;
		}

		&:hover {
			cursor: pointer;
			opacity: .7;
		}
	}
</style>
