import {
	ADD_TO_CART,
	REMOVE_FROM_CART,
	INCREASE_COUNT,
	DECREASE_COUNT,
	APPLY_DISCOUNT,
	ADD_DELIVERY
} from './action-types'

import {
	ADD_PRODUCT,
	REMOVE_PRODUCT,
	SET_QUANTITY,
	SET_CODE,
	REMOVE_CODE,
	SET_DELIVERY,
	REMOVE_DELIVERY
} from './mutation-types'

export default {
	[ADD_TO_CART] ({ commit }, product) {
		commit(ADD_PRODUCT, product)
	},

	async [REMOVE_FROM_CART] ({ commit, state }, product) {
		commit(REMOVE_PRODUCT, product)
		if (state.products.length === 0) {
			commit(REMOVE_CODE)
			commit(REMOVE_DELIVERY)
		}
	},

	[INCREASE_COUNT] ({ commit, state }, product) {
		const ID = product.id
		if (state.quantity[ID]) {
			commit(SET_QUANTITY, { ...state.quantity, [ID]: state.quantity[ID] + 1 })
		}
	},

	[DECREASE_COUNT] ({ commit, state, dispatch }, product) {
		const ID = product.id
		if (state.quantity[ID]) {
			if (state.quantity[ID] > 1) {
				commit(SET_QUANTITY, { ...state.quantity, [ID]: state.quantity[ID] - 1 })
			} else {
				dispatch(REMOVE_FROM_CART, product)
			}
		}
	},

	[APPLY_DISCOUNT] ({ commit }, code) {
		return new Promise((resolve, reject) => {
			if (code !== 'Test') {
				commit(REMOVE_CODE)
				reject(new Error('Discount code is invalid'))
			} else {
				const discount = { code, value: 20 }
				commit(SET_CODE, discount)
				resolve(discount)
			}
		})
	},

	[ADD_DELIVERY] ({ state, commit }, address) {
		if (state.products.length > 0) {
			commit(SET_DELIVERY, { address, cost: 20 })
		}
	}
}
