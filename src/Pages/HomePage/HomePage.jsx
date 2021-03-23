import SiteNav from '../../Components/SiteNav/SiteNav';
import AnnounceBar from '../../Components/AnnouncementBar/AnnounceBar'
import HeroSection from '../../Components/HeroSection/HeroSection'
import FeaturedCollections from '../../Components/FeaturedCollections/FeaturedCollections'
import React from 'react'

const HomePage = () => {
    return (
        <div>
            <AnnounceBar text = "upto 50% off on all items"/>
            <SiteNav />
            <HeroSection/>
            <FeaturedCollections/>
        </div>
    )
}

export default HomePage
