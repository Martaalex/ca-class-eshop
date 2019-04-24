// import Cart from '@/views/Cart'
const Products = () => import(/* webpackChunkName: "products-view" */ '@/views/Products')
const Product = () => import(/* webpackChunkName: "product-view" */ '@/views/Product')
const Cart = () => import(/* webpackChunkName: "cart-view" */ '@/views/Cart')
const CartProducts = () => import(/* webpackChunkName: "cart-view-child-products" */ '@/views/CartProducts')
const CartDelivery = () => import(/* webpackChunkName: "cart-view-child-delivery" */ '@/views/CartDelivery')

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
		path: '/cart',
		component: Cart,
		children: [
			{
				path: '/',
				name: 'Cart',
				component: CartProducts
			},
			{
				path: 'delivery',
				name: 'Cart:Delivery',
				component: CartDelivery
			}
		]
	}
]
