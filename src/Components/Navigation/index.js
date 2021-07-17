import React from 'react'
import Style from './style.css'
import {Logo} from '../../Assets'

const Navigation = () => {
    return (
        <div id="NavigationContainer">
            <div className="navigationContent">
                <div className="logo">
                    <img src={Logo} alt="logo" />
                    <h1>Talkbot.id</h1>
                </div>
                <div className="menu">
                    <a href="#" class="bolder">HOME</a>
                    <a href="#">TUTORIAL</a>
                    <a href="#">PURCHASE</a>
                    <a href="#">ABOUT US</a>
                </div>
            </div>
        </div>
    )
}

export default Navigation
