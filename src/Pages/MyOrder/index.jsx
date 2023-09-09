import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import OrderCart from '../../Components/OrderCart'
import { Link } from 'react-router-dom';

function MyOrder() {
  const { order } = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
  if(index === 'last') index = order?.length -1

  console.log('---->>', order)

  return (
    <>
      <div className='flex w-80 justify-center items-center relative mb-6'>
        <Link to='/my-orders' className='absolute left-0'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </Link>
        <h1>My Order</h1>
      </div>
      <div className='flex flex-col w-80'>
        {
          order?.[index]?.products.map(product => (
            <OrderCart 
              key={product.id}
              id={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
              />
              ))
            }
        <div className='flex justify-end'>
          <span className='font-medium'>Total: 
              <span className='font-light ml-2'>${order?.[index]?.totalPrice.toFixed(2)}</span>
          </span>
        </div>
      </div>
    </>
  )
}

export default MyOrder