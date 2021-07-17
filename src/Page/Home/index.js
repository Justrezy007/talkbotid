import React from 'react'
import {
    Footer,
    Heading,
    LastProject,
    LastTutorial,
    Introduction,
    Map,
    MarketOffer,
    Navigation,
    Testimony,
  } from "../../Components";
const Home = () => {
    return (
        <div>
            <Navigation />
            <Heading />
            <LastTutorial />
            <LastProject />
            <Introduction />
            <MarketOffer />
            <Testimony />
            <Map />
            <Footer />
        </div>
    )
}

export default Home
