import {React, useState} from "react";
import { useParams, Link } from "react-router-dom";
import SiteNav from "../../Components/SiteNav/SiteNav";
import AnnounceBar from "../../Components/AnnouncementBar/AnnounceBar";
import {useSelector} from 'react-redux';

import Prod from './prod'

import "./styles.css";

const IndivProdPage = () => {
  let { id } = useParams();
  console.log(id);

  const [product, setProduct] = useState();

  const data = useSelector(reducer => reducer.products)
  console.log(data);

  const prods = Object.keys(data)
  console.log(prods)


  return (
    <div className="productPage">
      <AnnounceBar text="upto 50% off on all items" />
      <SiteNav />
      {
        prods.map((key, index) =>{
          return(<Prod title = {data[key].title} price = {data[key].price} desc = {data[key].description} images = {data[key].pics} sizes = {data[key].sizes} bestSeller />)
        })
      }
      
    </div>
  );
};

export default IndivProdPage;
