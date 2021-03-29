import { React, useState } from "react";
import { useParams, Link } from "react-router-dom";
import SiteNav from "../../Components/SiteNav/SiteNav";
import AnnounceBar from "../../Components/AnnouncementBar/AnnounceBar";
import { useSelector } from "react-redux";

import Prod from "./prod";

import "./styles.css";

const IndivProdPage = () => {
  let { id } = useParams();
  // console.log(id);

  const [product, setProduct] = useState();

  const data = useSelector((reducer) => reducer.products);
  console.log(data);

  const prods = Object.keys(data);
  // console.log(prods);

  let {title, price, description, pics, sizes, bestSeller} = data[id];

  return (
    <div className="productPage">
      <AnnounceBar text="upto 50% off on all items" />
      <SiteNav />

      {
        bestSeller ? <Prod title={title} price={price} desc={description} images={pics} sizes={sizes} bestSeller /> : <Prod title={title} price={price} desc={description} images={pics} sizes={sizes} />
        
      }

    </div>
  );
};

export default IndivProdPage;
