import React from "react";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import ProdCart from "../Cart/ProdCart";
import NoProd from "../Cart/NoProd";
import SiteNav from "../../Components/SiteNav/SiteNav";
import AnnounceBar from "../../Components/AnnouncementBar/AnnounceBar";

const CheckOut = () => {
  const cartData = useSelector((reducer) => reducer.cart);
  console.log(cartData);

  var orderTotal = 0;

  return (
    <>
    <AnnounceBar text = "Upto 50% off on all items"/>
    <SiteNav/>
      <div className="checkOut">
        <h2>CheckOut</h2>
        {cartData.length ? (
          cartData.map((cart, key) => {
            console.log("CART" + cart);
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
        <h3>{orderTotal}</h3>
      </div>
    </>
  );
};

export default CheckOut;
