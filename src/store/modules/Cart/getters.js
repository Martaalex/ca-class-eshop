export default {
	status: state => state.status,
	quantity: state => state.quantity,
	products: state => state.products,
	totalQuantity: state => {
		const productsQuantity = Object.keys(state.quantity).map(id => state.quantity[id])

		if (productsQuantity.length) {
			return productsQuantity.reduce((a, b) => a + b)
		}

		return 0
	},
	totalPrice: state => {
		const productsPrices = state.products
			.map(product => parseFloat(product.price) * state.quantity[product.id])

		if (productsPrices.length > 0) {
			return productsPrices.reduce((a, b) => a + b)
		}

		return 0
	}
}
