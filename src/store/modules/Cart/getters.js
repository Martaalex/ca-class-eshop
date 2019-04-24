export default {
	status: state => state.status,
	discountCode: state => state.discountCode,
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
		if (productsPrices.length) {
			return productsPrices.reduce((a, b) => a + b)
		}
		return 0
	},
	totalPriceWithTaxes: (state, getters) => getters.totalPrice * 1.21,
	totalFinalPrice: (state, getters) => {
		let price = getters.totalPriceWithTaxes
		if (state.discountValue) {
			price = price - (price * (state.discountValue / 100))
		}
		if (state.delivery.cost) {
			price = price + state.delivery.cost
		}
		return price
	}
}
