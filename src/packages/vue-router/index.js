import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '@/routes'

Vue.use(VueRouter)

export const createRouter = (store) => {
	const router = new VueRouter({
		mode: 'history',
		base: process.env.BASE_URL,
		routes,
		scrollBehavior: (to, from, position) => scrollBehavior(store, position)
	})
	return router
}

const scrollBehavior = (store, position) => {
	return new Promise(resolve => {
		store.subscribeAction(action => {
			if (action.type === 'APP_TRANSITION_END') {
				resolve(position || { x: 0, y: 0 })
			}
		})
	})
}
