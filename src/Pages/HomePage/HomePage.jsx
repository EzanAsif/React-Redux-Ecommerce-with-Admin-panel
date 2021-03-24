import SiteNav from '../../Components/SiteNav/SiteNav';
import AnnounceBar from '../../Components/AnnouncementBar/AnnounceBar'
import HeroSection from '../../Components/HeroSection/HeroSection'
import FeaturedCollections from '../../Components/FeaturedCollections/FeaturedCollections'
import BestSellers from '../../Components/Best Sellers/BestSellers'
import React from 'react'

const HomePage = () => {
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
