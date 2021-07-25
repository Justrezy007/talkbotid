import React from 'react'
import {MarketOffer,FilterMarket} from "../../Components"
import Style from "./style.css"

const Purchase = () => {
    return (
        <div id="PurchaseContainer">
            <div>
            <FilterMarket />    
            <MarketOffer />
            </div>
        </div>
    )
}

export default Purchase
