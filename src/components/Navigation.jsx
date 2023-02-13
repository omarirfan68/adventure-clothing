import { Link, Outlet } from "react-router-dom"
import { Fragment, useContext } from "react"
import { ReactComponent as Adventure } from './adventure.svg';
import CartDropdown from "../SHOP/Cart-dropdown";

import { Usercontext } from "./user";
import { SignoutUser } from "./firebase";
import CartIcon from "../SHOP/Cart-icon";
import './Navigation.scss'
import { CardContext } from "../SHOP/Cart-content";
const Navigation = () => {
    const { currentUser } = useContext(Usercontext)
    const {IsCartOpen} = useContext(CardContext)
   
    return (
        <Fragment>
            <div className="navigation">

                <Link className="logo-container" to='/'><Adventure className="logo" /></Link>

                <div className="nav-links-container">
                    <Link className="nav-links" to='/shop'>
                        SHOP
                    </Link>
                    {
                        currentUser ? (
                            <span className="nav-links" onClick={SignoutUser}>{' '}SIGNOUT{' '}</span>)
                            : (<Link className="nav-links" to='/signin'>
                                SIGNIN
                            </Link>) }
                    <CartIcon/>
                </div>
                {IsCartOpen && <CartDropdown/>}
            </div>
            <Outlet />
        </Fragment>
    )
}
export default Navigation;