<template>
	<div class="base-plus-minus">
		<BaseButton
			class="base-plus-minus__button"
			@click="$emit('minus', value)"
		>
			<FontAwesomeIcon :icon="['fas', 'minus']" />
		</BaseButton>

		<span class="base-plus-minus__value"> {{ value }} </span>

		<BaseButton
			class="base-plus-minus__button"
			@click="$emit('plus', value)"
		>
			<FontAwesomeIcon :icon="['fas', 'plus']" />
		</BaseButton>
	</div>
</template>

<script>
import BaseButton from '@/components/BaseButton'
export default {
	name: 'BasePlusMinus',
	components: {
		BaseButton
	},
	props: {
		value: {
			type: Number,
			default: 0
		}
	}
}
</script>

<style lang="scss">
	.base-plus-minus {
		display: flex;
		align-items: stretch;
		justify-content: center;

		&__button {
			width: auto;

			&:first-child {
				border-top-right-radius: 0;
				border-bottom-right-radius: 0;
			}

			&:last-child {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
			}
		}

		&__value {
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: whitesmoke;
			padding: 0 15px;
			min-width: 50px;
			font-size: 18px;
		}
	}
</style>
