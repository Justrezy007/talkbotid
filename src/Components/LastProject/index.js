import React from 'react'
import Style from './style.css'
import {AA,BB,DD} from "../../Assets"

const LastProject = () => {
    return (
        <div id="LastProjectContainer">
            
            <div className="lastProjectCard">
                <div className="imageLastProject">
                    <img src={AA} />
                </div>
                <div className="descriptionLastProject">
                    <h3>Project Noob</h3>
                    <p className="levelLastProject">Level Noob</p>
                    <p>Pembuatan project nuub sekali dengan cara yang nuub sehingga dapat menyalakan anduinuub</p>
                    <div className="buttonLastProject">
                    <a href="#">JOIN</a>
                    </div>
                </div>
            </div>

            <div className="lastProjectCard">
                <div className="imageLastProject">
                    <img src={BB} />
                </div>
                <div className="descriptionLastProject">
                    <h3>Project Noob</h3>
                    <p className="levelLastProject">Level Noob</p>
                    <p>Pembuatan project nuub sekali dengan cara yang nuub sehingga dapat menyalakan anduinuub</p>
                    <div className="buttonLastProject">
                    <a href="#">JOIN</a>
                    </div>
                </div>
            </div>

            <div className="lastProjectCard">
                <div className="imageLastProject">
                    <img src={DD} />
                </div>
                <div className="descriptionLastProject">
                    <h3>Project Noob</h3>
                    <p className="levelLastProject">Level Noob</p>
                    <p>Pembuatan project nuub sekali dengan cara yang nuub sehingga dapat menyalakan anduinuub</p>
                    <div className="buttonLastProject">
                    <a href="#">JOIN</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LastProject
