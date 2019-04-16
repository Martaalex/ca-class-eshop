import { UPDATE_STATUS, SET_PRODUCTS, UPDATE_FAVORITE } from './mutation-types'

export default {
	[UPDATE_STATUS] (state, status) {
		state.status = status
	},

	[SET_PRODUCTS] (state, products) {
		state.products = products.map((product, index) => {
			product.id = index + 1
			return product
		})
	},

	[UPDATE_FAVORITE] (state, id) {
		if (!state.favorites.includes(id)) {
			state.favorites.push(id)
		} else {
			state.favorites = state.favorites.filter(favorite => favorite !== id)
		}
		localStorage.setItem('favorites', JSON.stringify(state.favorites))
	}
}
