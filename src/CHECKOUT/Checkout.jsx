import './Checkout.scss'
import { useContext } from 'react';

import { CardContext } from '../SHOP/Cart-content';
import CheckoutItem from './CHECKOUT-ITEM';
const Checkout = () => {
    const { Cartitems, Additemtocart ,Removecartitem,Clearcartitem , Carttotal} = useContext(CardContext)

    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>PRODUCT</span>
                </div>
                <div className='header-block'>
                    <span>IDENTITY</span>
                </div>
                <div className='header-block'>
                    <span>QUANTITY</span>
                </div>
                <div className='header-block'>
                    <span>PRICE</span>
                </div>
                <div className='header-block'>
                    <span>REMOVE</span>
                </div>
            </div>
            {Cartitems.map((cartitem) => {
                return(
                    <CheckoutItem cartitem={cartitem}
                     clearItem={() => Clearcartitem(cartitem)}
                      iNCREMENT={() => Additemtocart(cartitem)}
                      DECREMENT={() => Removecartitem(cartitem)}/>
                )
            })}
            <span className='total'>TOTAL: ${Carttotal}</span>
        </div>
    )

}
export default Checkout;
 