import axios from 'axios'
import { FETCH_DATA } from './action-types'
import { REQUESTING, ERROR, DONE } from './status-types'
import { UPDATE_STATUS, SET_PRODUCTS } from './mutation-types'

const API_URI = '//boiling-reaches-93648.herokuapp.com/food-shop/products'

export default {
	async [FETCH_DATA] ({ commit, state }) {
		if (!state.products.length) {
			commit(UPDATE_STATUS, REQUESTING)
			try {
				const { data } = await axios.get(API_URI)
				commit(SET_PRODUCTS, data)
				commit(UPDATE_STATUS, DONE)
			} catch (error) {
				console.error(error)
				commit(UPDATE_STATUS, ERROR)
			}
		}
	}
}
