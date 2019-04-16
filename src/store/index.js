import Products from './modules/Products'

export default {
	strict: process.env.NODE_ENV !== 'production',
	modules: {
		Products
	},
	actions: {
		APP_TRANSITION_END () {}
	}
}
