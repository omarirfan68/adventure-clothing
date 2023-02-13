import './CART.scss';
import { useContext } from 'react';
import { CardContext } from './Cart-content';
import { ReactComponent as ShoppingIcon } from './Shopping-bag.svg'

const CartIcon=()=>{
    const {IsCartOpen,Setiscartopen,Cartcount}=useContext(CardContext)
    const toggle =()=> Setiscartopen(!IsCartOpen)
    return (
        <div className='cart-icon-container' onClick={toggle}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{Cartcount}</span>

        </div>
    )

}
export default CartIcon;