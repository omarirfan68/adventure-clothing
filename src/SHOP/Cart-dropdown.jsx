import Button from '../components/button';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardContext } from './Cart-content';
import './CART-DROPDOWN.scss'
import Cartitem from '../Cart/Cart-item';
const CartDropdown=()=>{
    const {Cartitems}=useContext(CardContext)
    const navigate=useNavigate()
    const CheckoutHandler = ()=>{
        navigate('/checkout')

    }
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {/* { Cartitems && Cartitems.length > 0 && Cartitems.map((item) => (
                    <Cartitem key={item.id}
                    cartitem={item} />)) } */}
    {  
    Cartitems.length ? (Cartitems.map((item) => (
                    <Cartitem key={item.id}
                    cartitem={item} />))): (<span className='empty-message'>YOUR CART IS EMPTY</span>) }
            
            </div>
            <Button onClick={CheckoutHandler}>CHECKOUT</Button>
        </div>
    )
}
export default CartDropdown;