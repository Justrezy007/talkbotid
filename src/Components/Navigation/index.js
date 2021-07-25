import React from 'react'
import Style from './style.css'
import {Logo} from '../../Assets'
import { Link,useLocation } from 'react-router-dom'

const Navigation = () => {
    let location = useLocation();
    return (
        <div id="NavigationContainer">
            <div className="navigationContent">
                <div className="logo">
                    <img src={Logo} alt="logo" />
                    <h1>Talkbot.id</h1>
                </div>
                <div className="menu">
                    <Link to="/" className={location.pathname == "/" ? "bolder" : "" }>HOME</Link>
                    <Link to="/tutorial" className={location.pathname == "/tutorial" ? "bolder" : "" }>TUTORIAL</Link>
                    <Link to="/purchase" className={location.pathname == "/purchase" ? "bolder" : "" }>PURCHASE</Link>
                    <Link to="/aboutus" className={location.pathname == "/aboutus" ? "bolder" : "" }>ABOUT US</Link>
                </div>
            </div>
        </div>
    )
}

export default Navigation
