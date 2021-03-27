import React from "react";
import { useParams, Link } from "react-router-dom";
import SiteNav from "../../Components/SiteNav/SiteNav";
import AnnounceBar from "../../Components/AnnouncementBar/AnnounceBar";

import prod1 from "../../Assets/1st_prod_1.jpg";
import prod2 from "../../Assets/1st_prod_2.jpg";
import prod3 from "../../Assets/1st_prod_3.jpg";

import "@splidejs/splide/dist/css/themes/splide-default.min.css";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "./styles.css";

const IndivProdPage = () => {
  let { id } = useParams();
  console.log(id);

  return (
    <div className="productPage">
      <AnnounceBar text="upto 50% off on all items" />
      <SiteNav />
      <div className="prodDetails">
        <div className="details">
          <div className="titleAndPrice">
            <div className="title">
              <h2>Crew Curve-Hem</h2>
            </div>
            <div className="price">
              <h2>$49.99</h2>
            </div>
          </div>
          <div className="description">
            Our best selling short sleeve style, the Crew Curve-Hem is as dependable as it gets.
          </div>
          <div className="bestSellerTag">
            Best Seller
          </div>
          <div className="size">
            <label htmlFor="sizePicker">Size:</label>
            <div className="sizePickerDiv">
              <select name="sizePicker" id="sizePicker">
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
              </select>
            </div>
          </div>
          <div className="buttons">
            <Link to = '/'>Add to cart</Link>
            <Link to = '/'>Buy Now</Link>
          </div>
        </div>
        <div className="images">
          <Splide
            options={{ cover: true, width: 500, height: 600, rewind: true, breakpoints : {
              
              1200 : {
                width : 450,
                height : 600,
              },
              
              950 :{
                    width : 380, 
                    height : 500
                },
                600:{
                    width : 350,
                    height : 500
                },
                400 : {
                    width : 300, 
                    height : 400,
                    arrows : 'false',
                }
            } }}
          >
            <SplideSlide>
              <img src={prod1} alt="" />
            </SplideSlide>
            <SplideSlide>
              <img src={prod2} alt="" />
            </SplideSlide>
            <SplideSlide>
              <img src={prod3} alt="" />
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </div>
  );
};

export default IndivProdPage;
