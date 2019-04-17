import { ADD_TO_CART } from './action-types'
import { ADD_PRODUCT } from './mutation-types'

export default {
	async [ADD_TO_CART] ({ commit }, product) {
		commit(ADD_PRODUCT, product)
	}
}
