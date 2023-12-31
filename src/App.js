import { Container } from 'react-bootstrap';
import React from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect  } from 'react';
import HomePage from './components/HomePage';
import CartPage from './components/CartPage';
import Home from './components/Home';
import { ThemeContext } from './components/ThemeContext';
import { v4 as uuid } from 'uuid';
import AddProductPage from './components/AddProductPage';
import Login from './components/LoginPage';
import ContactPage from './components/ContactPage';
import { remove } from "./components/ProductsApi"



export default function App() {
  
  const [theme, setTheme] = useState("dark")
  const [productList, setProductList] = useState([])
  const [cartList, setCartList] = useState([])
 

  const navigate = useNavigate()

  const addToCart = (product) => {

    const cartItem = {
      id: uuid(),
      name: product.name,
      price: product.price,
      productId: product.id,
      quantity: 1
    }
    
    setCartList([...cartList, cartItem])
    navigate('/cart')
  }
 
  const addProduct = async (newProductData) => {
    const response = await fetch("https://64bc0bea7b33a35a4446f898.mockapi.io/products" , {
       method: "POST",
       headers: {"Content-Type": "application/json"},
       body: JSON.stringify(newProductData)
    })
    const newProductWithId = await response.json()
    setProductList([...productList, newProductWithId])
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://64bc0bea7b33a35a4446f898.mockapi.io/products")
      const data = await response.json()
      setProductList(data)
    }
    fetchData()
  }, [])
  
 
//      }

 const removeProduct = (id) => {
   remove(id) 
  setProductList(productList.filter(product => product.id !== id))
}





  return (
    <ThemeContext.Provider value= {[theme, setTheme]}>
   <div className="App">
    <HomePage/>
    <Container>
      <Routes>
        <Route path='/' element={<Home productList={productList} addToCart={addToCart} removeProduct={removeProduct}/>} />
        <Route path='/cart' element={<CartPage productList={productList} cartList={cartList} />}/>
        <Route path='/products/create/new' element={<AddProductPage addProduct={addProduct}/>}/>
        <Route path="/login" element={<Login />}/> 
        <Route path="/contact" element={<ContactPage/>}/>
      </Routes>
    </Container>
    
  </div>
    </ThemeContext.Provider>
  );
}


