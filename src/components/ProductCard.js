// import {useContext } from 'react';
// import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'



export default function ProductCard({ product, addToCart,showAddToCartButton, removeProduct }) {

   
    return (
        <div className={"border shadow p-4 m-4 "}>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <Button onClick={() => removeProduct(product)}>Delete</Button>
            { showAddToCartButton && <button onClick={() => addToCart(product)}>Add to Cart</button>}
            
        </div>
    )
} 