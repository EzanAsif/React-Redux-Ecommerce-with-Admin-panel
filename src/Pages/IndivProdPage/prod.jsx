import {React, useState} from "react";
import {useSelector, useDispatch} from 'react-redux';

import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { useParams, Link } from "react-router-dom";

import { Splide, SplideSlide } from "@splidejs/react-splide";

const Prod = ({title, price, desc, images, sizes, bestSeller}) => {

  const cartData  = useSelector(reducer => reducer.cart)
  console.log(cartData)

  const [qty, setQty] = useState( )
  const [Usize, setUsize] = useState('Small')

  const dispatch = useDispatch();

  const addToCart = () => {
    let prod = {
      thumb : images[0],
      name : title,
      amount : price,
      Uqty : parseInt(qty),
      size : Usize,
      total : price * qty,
    }

    console.log(prod);

    dispatch(
      {
        type : "ADD_TO_CART",
        payload : prod
      }
    )
    
  }

  return (
    <div className="prodDetails">
      <div className="details">
        <div className="titleAndPrice">
          <div className="title">
            <h2>{title}</h2>
          </div>
          <div className="price">
            <h2>${price}</h2>
          </div>
        </div>
        <div className="description">
          {desc}
        </div>
        {
            bestSeller ? <div className="bestSellerTag">Best Seller</div> : ""
        }
        <div className="size">
          <label htmlFor="sizePicker">Size:</label>
          <div className="sizePickerDiv">
            <select onChange = {(e) => setUsize(e.target.value)} name="sizePicker" id="sizePicker">
                {sizes.map((size, key) => {
                    return(
                        <option key = {key} value={size}>{size}</option>
                    )
                })}
            </select>
          </div>
        </div>
        <input onChange = {(e) => {e.preventDefault(); setQty(e.target.value)}} type="number" name="qty" className = "qty" placeholder  = "Quantity" min = {1} max = {10}/>
        <div className="buttons">
          <Link to='/cart' onClick = {addToCart}>Add to cart</Link>
          <Link to='/cart' onClick = {addToCart} >Buy Now</Link>
        </div>
      </div>
      <div className="images">
        <Splide
          options={{
            cover: true,
            width: 500,
            height: 600,
            rewind: true,
            breakpoints: {
              1200: {
                width: 450,
                height: 600,
              },

              950: {
                width: 380,
                height: 500,
              },
              600: {
                width: 350,
                height: 500,
              },
              400: {
                width: 300,
                height: 400,
                arrows: "false",
              },
            },
          }}
        >
            {images.map((image, key) => {
                return(<SplideSlide>
                    <img src={image} alt="" />
                  </SplideSlide>)
            })}
        </Splide>
      </div>
    </div>
  );
};

export default Prod;
