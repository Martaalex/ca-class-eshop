import {
	ADD_TO_CART,
	REMOVE_FROM_CART,
	INCREASE_COUNT,
	DECREASE_COUNT,
	APPLY_DISCOUNT
} from './action-types'

import {
	ADD_PRODUCT,
	REMOVE_PRODUCT,
	SET_QUANTITY,
	SET_CODE
} from './mutation-types'

export default {
	[ADD_TO_CART] ({ commit }, product) {
		commit(ADD_PRODUCT, product)
	},

	[REMOVE_FROM_CART] ({ commit }, product) {
		commit(REMOVE_PRODUCT, product)
	},

	[INCREASE_COUNT] ({ commit, state }, product) {
		const ID = product.id
		if (state.quantity[ID]) {
			commit(SET_QUANTITY, { ...state.quantity, [ID]: state.quantity[ID] + 1 })
		}
	},

	[DECREASE_COUNT] ({ commit, state }, product) {
		const ID = product.id
		if (state.quantity[ID]) {
			if (state.quantity[ID] > 1) {
				commit(SET_QUANTITY, { ...state.quantity, [ID]: state.quantity[ID] - 1 })
			} else {
				commit(REMOVE_PRODUCT, product)
			}
		}
	},

	[APPLY_DISCOUNT] ({ commit }, code) {
		return new Promise((resolve, reject) => {
			if (code !== 'Test') {
				reject(new Error('Discount code is invalid'))
			} else {
				const discount = { code, value: 20 }
				commit(SET_CODE, discount)
				resolve(discount)
			}
		})
	}
}
