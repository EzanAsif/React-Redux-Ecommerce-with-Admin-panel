import React, {useState} from "react";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import ProdCart from "../Cart/ProdCart";
import NoProd from "../Cart/NoProd";
import SiteNav from "../../Components/SiteNav/SiteNav";
import AnnounceBar from "../../Components/AnnouncementBar/AnnounceBar";

const CheckOut = () => {
  const cartData = useSelector((reducer) => reducer.cart);
  const order = useSelector((reducer) => reducer.indOrder);

  console.log(order);

  const dispatch = useDispatch();
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [cell, setCell] = useState('')

  var orderTotal = 0;

  const Submit = (e) => {

    e.preventDefault();

    const newOrder = {
      orderNo : 1,
      orderDesc : cartData,
      status : "active",
      total : orderTotal,
      uesrInfo : {name, email, address, cell},
    }

    console.log(newOrder)

    dispatch({
      type : "PLACE_ORDER",
      payload : newOrder
    })

  }

  return (
    <>
    <AnnounceBar text = "Upto 50% off on all items"/>
    <SiteNav/>
      <div className="checkOut">
        <h2>CheckOut</h2>
        {cartData.length ? (
          cartData.map((cart, key) => {
            orderTotal += cart.total;
            return (
              <ProdCart
                key={key}
                thumb={cart.thumb}
                name={cart.name}
                price={cart.amount}
                qty={cart.Uqty}
                size={cart.size}
                total={cart.total}
              />
            );
          })
        ) : (
          <NoProd />
        )}
        <h3 classname = "cart-total">{orderTotal}</h3>
      </div>
      <form onSubmit = {(e) => Submit(e)}>
        <label htmlFor="name">Name</label>
        <input onChange = {(e) => setName(e.target.value)} type="text" id = "name" placeholder = "Enter your name here"/>
        <label htmlFor="address">Address</label>
        <input onChange = {(e) => setAddress(e.target.value)} type="text" id = "address" placeholder = "Enter your Address here"/>
        <label htmlFor="email">Email Address</label>
        <input onChange = {(e) => setEmail(e.target.value)} type="text" id = "email" placeholder = "Enter your Email Address here"/>
        <label htmlFor="cell">Cell No</label>
        <input onChange = {(e) => setCell(e.target.value)} type="text" id = "cell" placeholder = "Enter your cell no here"/>  
        <button>Submit</button>      
      </form>
    </>
  );
};

export default CheckOut;
