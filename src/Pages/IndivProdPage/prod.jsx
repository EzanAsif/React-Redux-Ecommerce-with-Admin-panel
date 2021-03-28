import React from "react";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { useParams, Link } from "react-router-dom";

import { Splide, SplideSlide } from "@splidejs/react-splide";

import prod1 from "../../Assets/1st_prod_1.jpg";
import prod2 from "../../Assets/1st_prod_2.jpg";
import prod3 from "../../Assets/1st_prod_3.jpg";

const Prod = ({title, price, desc, images, sizes, bestSeller}) => {
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
            <select name="sizePicker" id="sizePicker">
                {sizes.map((size, key) => {
                    return(
                        <option key = {key} value={size}>{size}</option>
                    )
                })}
            </select>
          </div>
        </div>
        <div className="buttons">
          <Link to="/">Add to cart</Link>
          <Link to="/">Buy Now</Link>
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
