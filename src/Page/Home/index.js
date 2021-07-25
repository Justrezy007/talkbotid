import React from 'react'
import {
    Heading,
    LastProject,
    LastTutorial,
    Introduction,
    Map,
    MarketOffer,
    Testimony,
  } from "../../Components";
const Home = () => {
    return (
        <div>
            <Heading />
            <LastTutorial />
            <LastProject />
            <Introduction />
            <MarketOffer />
            <Testimony />
            <Map />
        </div>
    )
}

export default Home
