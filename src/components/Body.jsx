import "../components/style.scss"
import cloud from "../images/cloud.png"
import cloudSoft from "../images/cloud-soft.png"
import { Header } from './Header';
import { Main } from "./Main";


export const Body = () => {
    return (
        <div>

            <div className="Intro-section" id="portafolio">
                <div
                    className="vector-gb"
                    id="parallax"
                >
                </div>
                <img
                    src={cloud}
                    className="cloud"
                    alt="cloud"
                />
                <img
                    src={cloudSoft}
                    className="cloud-suft"
                    alt="cloudSoft"
                />

                <div className="content">
                    <Header />
                      
                    <Main />
                </div>
            </div>


        </div>
    )
}
