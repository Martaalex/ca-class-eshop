const Products = () => import(/* webpackChunkName: "products-view" */ '@/views/Products')
const Product = () => import(/* webpackChunkName: "product-view" */ '@/views/Product')
const Cart = () => import(/* webpackChunkName: "cart-view" */ '@/views/Cart')

export default [
	{
		name: 'Products',
		path: '/',
		component: Products
	},
	{
		name: 'Product',
		path: '/product/:id',
		component: Product
	},
	{
		name: 'Cart',
		path: '/cart',
		component: Cart
	}
]
