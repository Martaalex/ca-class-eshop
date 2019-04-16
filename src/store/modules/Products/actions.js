import axios from 'axios'

export default {
	async fetchData ({ commit }) {
		const { data } = await axios.get('https://boiling-reaches-93648.herokuapp.com/food-shop/products')
		commit('setProducts', data)
	}
}
