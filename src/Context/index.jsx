import { createContext, useState, useEffect } from "react";
import PropTypes from 'prop-types'

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) => {
    ShoppingCartProvider.propTypes = {children: PropTypes.node.isRequired}

    // Shopping Cart - Increment quantity
    const [count, setCount] = useState(0)

    // Product Detail - open/close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)
    
    // Checkout Side Menu - open/close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)
    
    // Product Detail - Show info
    const [productSelected, setProductSelected] = useState({})
    
    // Shopping Cart - add products to cart
    const [cartProducts, setCartProducts] = useState([])

    // Shopping Cart - Order
    const [order, setOrder] = useState([])

    // Get Products
    const [products, setProducts] = useState(null);
    const [filteredProducts, setFilteredProducts] = useState(null);
    
    // Get Products by title
    const [searchByTitle, setSearchByTitle] = useState(null);
    
    // Get Products by category
    const [searchByCategory, setSearchByCategory] = useState(null);

    useEffect(() => {
        // fetch('https://api.escuelajs.co/api/v1/products')
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => setProducts(data))
    }, [])
    
    const filteredProductsByTitle = (products, searchByTitle) => {
        return products?.filter((product) => 
            product.title.toLowerCase().includes(searchByTitle.toLowerCase())
        )
    }

    const filteredProductsByCategory = (products, searchByCategory) => {
        return products?.filter((product) => 
            product.category.toLowerCase() === searchByCategory.toLowerCase()
        )
    }

    const filteredProductsBy = (searchType, products, searchByTitle, searchByCategory) => {
        if (searchType === 'title') {
            return filteredProductsByTitle(products, searchByTitle)
        }
        if (searchType === 'category') {
            return filteredProductsByCategory(products, searchByCategory)
        }
        if (searchType === 'title y category') {
            return filteredProductsByCategory(products, searchByCategory).filter(product => product.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        }
        if (!searchType) {
            return products
        }
    }

    useEffect(() => {
        if (searchByTitle && searchByCategory) setFilteredProducts(filteredProductsBy('title y category', products, searchByTitle, searchByCategory))
        if (searchByTitle && !searchByCategory) setFilteredProducts(filteredProductsBy('title', products, searchByTitle, searchByCategory))
        if (searchByCategory && !searchByTitle) setFilteredProducts(filteredProductsBy('category', products, searchByTitle, searchByCategory))
        if (!searchByCategory && !searchByTitle) setFilteredProducts(filteredProductsBy(null, products, searchByTitle, searchByCategory))
    }, [products, searchByTitle, searchByCategory])


    return (
        <ShoppingCartContext.Provider
            value={{
                count,
                setCount,
                openProductDetail,
                closeProductDetail,
                isProductDetailOpen,
                productSelected,
                setProductSelected,
                cartProducts,
                setCartProducts,
                isCheckoutSideMenuOpen,
                openCheckoutSideMenu,
                closeCheckoutSideMenu,
                order,
                setOrder,
                products,
                setProducts,
                searchByTitle,
                setSearchByTitle,
                filteredProducts,
                setFilteredProducts,
                searchByCategory,
                setSearchByCategory
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    )
}