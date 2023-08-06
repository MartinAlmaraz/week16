
import ProductCard from './ProductCard';

export default function CartPage({ cartList }) {
    return(
        <div>
           { cartList.map(cartItem => 
            <ProductCard key={cartItem.id} showAddToCartButton={false} product={cartItem} />
        )}
        </div>
    )
}