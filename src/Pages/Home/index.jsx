import { useContext } from 'react';
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail';
import { ShoppingCartContext } from '../../Context'

function Home() {
  const {products, setSearchByTitle, searchByTitle, filteredProducts} = useContext(ShoppingCartContext);

  const renderView = () => {
    if (filteredProducts?.length > 0) {
      return (
        filteredProducts?.map((product, p) => (
          <Card 
            key={p} 
            data = {product}
          />
        ))
      )
    } else {
      return <div className='font-medium'>No existe producto :(</div>
    }
  }

  return (
    <div>
      <div className='flex w-full justify-center items-center relative mb-4'>
        <h1>Home</h1>
      </div>
      <div className='flex w-full justify-center items-center mb-4'>
        <input 
          className='border border-black w-80 p-2 rounded-lg focus:outline-none'
          type="text"
          placeholder='Search product...' 
          name="" 
          id="" 
          onChange={(e) => setSearchByTitle(e.target.value)}
        />
      </div>
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {renderView()}
      </div>
      <ProductDetail />
    </div>
  )
}

export default Home