import SiteNav from '../../Components/SiteNav/SiteNav';
import AnnounceBar from '../../Components/AnnouncementBar/AnnounceBar'
import HeroSection from '../../Components/HeroSection/HeroSection'
import FeaturedCollections from '../../Components/FeaturedCollections/FeaturedCollections'
import BestSellers from '../../Components/Best Sellers/BestSellers'
import React from 'react'
import {useSelector} from 'react-redux'

const HomePage = () => {

    const cartData = useSelector(reducer => reducer.cart)
    console.log("CART DATA : ");
    console.log(cartData);

    return (
        <div>
            <AnnounceBar text = "upto 50% off on all items"/>
            <SiteNav />
            <HeroSection/>
            <FeaturedCollections/>
            <BestSellers/>
        </div>
    )
}

export default HomePage
