import {React, useState} from 'react'
import SiteNav from '../../Components/SiteNav/SiteNav';
import AnnounceBar from '../../Components/AnnouncementBar/AnnounceBar'
import NoProd from './NoProd'
import ProdCart from './ProdCart'
import { useSelector } from "react-redux";
import {Link} from 'react-router-dom'

import './styles.css'



const Cart = () => {

    var orderTotal = 0;

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
                    orderTotal += cart.total
                    return(
                            <ProdCart key = {key} thumb = {cart.thumb} name = {cart.name} price = {cart.amount} qty = {cart.Uqty} size = {cart.size} total = {cart.total} /> 
                        )
                    }
                )
                : 
                <NoProd/>                
            }

            <h6 className = "total">Total : {orderTotal}</h6>
            
        </div>
        <div className="continueShopping">
            <Link to = '/'>Continue Shopping</Link>
        </div>
        
        </>
    )
}

export default Cart
