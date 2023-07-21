import './App.css';
import { Container } from 'react-bootstrap';
import React from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import HomePage from './components/HomePage';
function App() {

  // const [productList, setProductList] = useState([])
  // const [cartList, setCartList] = useState([])
  
  // const navigate = useNavigate()

  // const addToCart = (productId) => {
  //   const CartItem = {
  //     id: 
  //   }
  // }

  return (
    <div className="App">
    <HomePage/>
    </div>
  );
}

export default App;
