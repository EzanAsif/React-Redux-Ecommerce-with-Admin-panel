import {React, useState} from 'react'
import SiteNav from '../../Components/SiteNav/SiteNav';
import AnnounceBar from '../../Components/AnnouncementBar/AnnounceBar'
import NoProd from './NoProd'
import ProdCart from './ProdCart'
import { useSelector } from "react-redux";
import {Link} from 'react-router-dom'

import './styles.css'

const Cart = () => {

    const [totalAmount, setTotalAmount] = useState(0)

    const cartData = useSelector(reducer => reducer.cart)
    console.log(cartData)


    return (
        <>
        <SiteNav />
        <AnnounceBar text="upto 50% off on all items" />
        <div className = "cart">

            <h2 className="heading">Cart</h2>

            {
                cartData.length 
                ?

                cartData.map((cart, key) => {
                    console.log("CART" + cart);
                    return(
                            <ProdCart name = {cart.name} price = {cart.amount} qty = {cart.Uqty} size = {cart.size} total = {cart.total} /> 
                        )
                    }
                )
                        // <h6>TOTAL : {totalAmount} </h6>
                : 
                <NoProd/>
            }
            <Link to = '/'>Continue Shopping</Link>

            
        </div>
        </>
    )
}

export default Cart
