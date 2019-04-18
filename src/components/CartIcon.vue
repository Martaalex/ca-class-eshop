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
			if (this.badge < 10) {
				return this.badge
			} else if (this.badge) {
				return '+9'
			} else {
				return 0
			}
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
			height: 17px;
			width: 17px;
			border-radius: 100%;
			font-size: 10px;
			animation: BadgePopIn .2s cubic-bezier(0.4, 0.0, 0.2, 1);
		}

		&:hover {
			cursor: pointer;
			opacity: .7;
		}
	}

	@keyframes BadgePopIn {
		from {
			transform: scale(0);
			opacity: 0;
		}
		to	{
			transform: scale(1);
			opacity: 1;
		}
	}
</style>
