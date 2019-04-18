export default {
	status: null,
	products: JSON.parse(sessionStorage.getItem('cart')) || [],
	quantity: JSON.parse(sessionStorage.getItem('quantity')) || {}
}
