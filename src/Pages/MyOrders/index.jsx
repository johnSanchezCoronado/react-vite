import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { ShoppingCartContext } from '../../Context'
import OrdersCart from '../../Components/OrdersCart'

function MyOrders() {
  const { order } = useContext(ShoppingCartContext);
  console.log(order)

  return (
    <div>
      <div className='flex w-80 justify-center items-center relative mb-6'>
        <h1>My Orders</h1>
      </div>
      {
        order.map((order, o) => (
          <Link key={o}  to={`/my-orders/${o}`}>
            <OrdersCart 
              totalPrice={order.totalPrice} 
              totalProducts={order.totalProducts} 
            />
          </Link>
        ))
      }
    </div>
  )
}

export default MyOrders