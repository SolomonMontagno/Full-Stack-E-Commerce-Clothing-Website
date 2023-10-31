import './cart-icon.styles.scss'
import { ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

const CartIcon = () => {
const { isCartOpen, setIsCartOpen, cardCount } = useContext(CartContext)


const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)

    return (
    <div className='cart-icon-container' onClick={toggleIsCartOpen}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{cardCount}</span>
    </div>
    )
}

export default CartIcon