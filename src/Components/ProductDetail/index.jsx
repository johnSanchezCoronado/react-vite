import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import './styles.css'

const ProductDetail = () => {
    const {isProductDetailOpen, closeProductDetail, productSelected} = useContext(ShoppingCartContext);

    return (
        <aside className={`${isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-5'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div 
                    className='cursor-pointer'
                    onClick={() => closeProductDetail()}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
            </div>
            <figure className='p-6'>
                <img 
                    className='w-full h-full rounded-lg' 
                    src={productSelected.image} 
                    alt={productSelected.title} 
                />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl mb-2'>{productSelected.price}</span>
                <span className='font-medium text-md'>{productSelected.title}</span>
                <span className='font-light text-sm'>{productSelected.description}</span>
            </p>
        </aside>
    )
}

export default ProductDetail