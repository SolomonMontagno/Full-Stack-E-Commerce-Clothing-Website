import './cart-icon.styles.jsx'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import { ShoppingIcon, CartIconContainer, ItemCount } from './cart-icon.styles.jsx'

const CartIcon = () => {
const { isCartOpen, setIsCartOpen, cardCount } = useContext(CartContext)


const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)

    return (
      <CartIconContainer onClick={toggleIsCartOpen}>
        <ShoppingIcon className="shopping-icon" />
        <ItemCount className="item-count">{cardCount}</ItemCount>
      </CartIconContainer>
    );
}

export default CartIcon