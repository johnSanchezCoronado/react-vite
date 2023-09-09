import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import OrderCart from '../OrderCart'
import { totalPrice } from '../../utils'
import './styles.css'

const CheckoutSideMenu = () => {
    const {isCheckoutSideMenuOpen, closeCheckoutSideMenu, cartProducts, setCartProducts, order, setOrder, setSearchByTitle, setSearchByCategory} = useContext(ShoppingCartContext);
    
    const deleteProductCart = (id) => {
        const filterProducts = cartProducts.filter(product => product.id != id)
        setCartProducts(filterProducts);
    }

    const handleCheckout = () => {
        const orderToAdd = {
            date: new Date(),
            products: cartProducts,
            totalProducts: cartProducts.length,
            totalPrice: totalPrice(cartProducts)
        }

        setOrder([...order, orderToAdd])
        setCartProducts([])
        setSearchByTitle(null)
        setSearchByCategory(null)
    }

    return (
        <aside className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-5'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div 
                    className='cursor-pointer'
                    onClick={() => closeCheckoutSideMenu()}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
            </div>
            <div className='px-6 overflow-y-scroll flex-1'>
                {
                    cartProducts.map(product => (
                        <OrderCart 
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            image={product.image}
                            price={product.price}
                            deleteProductCart={deleteProductCart}
                        />
                    ))
                }
            </div>
            <div className='px-6 mt-2 mb-6'>
                <p className='flex justify-between items-center mb-2'>
                    <span className='font-light'>Total:</span>
                    <span className='font-medium text-2xl'>${totalPrice(cartProducts)}</span>
                </p>
                <Link to='/my-orders/last'>
                    <button className='w-full bg-black py-3 text-white rounded-lg' onClick={() => handleCheckout()}>Checkout</button>
                </Link>
            </div>
        </aside>
    )
}

export default CheckoutSideMenu