import { UPDATE_STATUS, ADD_PRODUCT } from './mutation-types'

export default {
	[UPDATE_STATUS] (state, status) {
		state.status = status
	},

	[ADD_PRODUCT] (state, product) {
		const ID = product.id
		const exists = state.products.find(product => product.id === ID)

		if (exists) {
			state.quantity = { ...state.quantity, [ID]: state.quantity[ID] + 1 }
		} else {
			state.quantity = { ...state.quantity, [ID]: 1 }
			state.products.push(product)
		}
	}

}
