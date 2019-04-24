export default {
	status: null,
	discountCode: sessionStorage.getItem('discountCode') || null,
	discountValue: 0,
	delivery: {},
	products: JSON.parse(sessionStorage.getItem('cart')) || [],
	quantity: JSON.parse(sessionStorage.getItem('quantity')) || {}
}
