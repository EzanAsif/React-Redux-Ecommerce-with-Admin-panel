import SiteNav from '../../Components/SiteNav/SiteNav';
import AnnounceBar from '../../Components/AnnouncementBar/AnnounceBar'
import HeroSection from '../../Components/HeroSection/HeroSection'
import React from 'react'

const HomePage = () => {
    return (
        <div>
            <AnnounceBar text = "upto 50% off on all items"/>
            <SiteNav />
            <HeroSection/>
        </div>
    )
}

export default HomePage
