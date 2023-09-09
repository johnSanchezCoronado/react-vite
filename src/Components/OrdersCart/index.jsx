import './style.css'

const OrdersCart = props => {
    const { totalPrice, totalProducts } = props;
    //Fecha actual para agregar el nombre del archivo
  let date = new Date();
  let day = date.getUTCDate();
  let month = (date.getUTCMonth()) + 1; 
  let year = date.getUTCFullYear();
  let hour = date.getUTCHours() - 5;
  let minutes = date.getUTCMinutes();

    return (
        <div id='order-in-orders' className='flex justify-between items-center mb-3 border border-black rounded-lg w-80'>
            <p className="flex flex-col justify-between w-full px-2">
                <span className='font-light'>Fecha de orden: 
                    <span className='font-medium ml-2'>{`${day}-${month}-${year}T${hour}:${minutes}`}</span>
                </span>
                <span className='font-light'>Productos: 
                    <span className='font-medium ml-2'>{totalProducts}</span>
                </span>
                <span className='font-light'>Total: 
                    <span className='font-medium text-2xl ml-2'>${totalPrice.toFixed(2)}</span>
                </span>
            </p>
            <p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>

            </p>
        </div>
    );
};

export default OrdersCart