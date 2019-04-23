import {
	UPDATE_STATUS,
	ADD_PRODUCT,
	REMOVE_PRODUCT,
	SET_QUANTITY,
	SET_CODE,
	REMOVE_CODE
} from './mutation-types'

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

		sessionStorage.setItem('cart', JSON.stringify(state.products))
		sessionStorage.setItem('quantity', JSON.stringify(state.quantity))
	},

	[REMOVE_PRODUCT] (state, product) {
		const ID = product.id

		state.products = state.products.filter(product => product.id !== ID)
		delete state.quantity[ID]
		state.quantity = { ...state.quantity }

		sessionStorage.setItem('cart', JSON.stringify(state.products))
		sessionStorage.setItem('quantity', JSON.stringify(state.quantity))
	},

	[SET_QUANTITY] (state, quantity) {
		state.quantity = quantity
		sessionStorage.setItem('quantity', JSON.stringify(state.quantity))
	},

	[SET_CODE] (state, { code, value }) {
		state.discountCode = code
		state.discountValue = value
		sessionStorage.setItem('discountCode', code)
	},

	[REMOVE_CODE] (state) {
		state.discountCode = null
		state.discountValue = 0
		sessionStorage.removeItem('discountCode')
	}
}
