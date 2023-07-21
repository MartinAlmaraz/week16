import { useParams } from "react-router-dom";
import ProductCard from './ProductCard';


export default function ProductPage({ productList, addToCart }) {
   let { productId  } = useParams()
   productId = parseInt(productId)


   const product = productList.find(p => p.id === productId)
   
   if(!product) {
    retutn (<h3 className="mt-4 display-4">404 Not Found</h3>)
   }

    return (
    <ProductCard product={product} showAddToCartButton={true} addToCart={addToCart} />
  )
}
