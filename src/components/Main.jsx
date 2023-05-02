import { TbFileDownload } from "react-icons/tb";

import { Button } from "./compartir";
import lenguajes from "../images/hand.png";
//import iconos from "../images/tech-icons.png";

import "./mainScss.scss";

export const Main = () => {
    return (
        <div className="introMAin">
            <div className="layoutMain">
                <div className="leftMain">
                    <h1 className="titulo">
                        <span className="small-text">
                            <span className="text"> Hola!</span>
                            <span className="icon">
                                <img src={lenguajes} alt="icon" className="animate-pulse" />
                            </span>
                            <span>, Soy </span>
                        </span>
                        <span className="big-text"> Dev.Sorido0 </span>
                    </h1>
                    <p>
                        Ingeniero en informática
                        con más de 6 años de
                        experiencia en desarrollador web full stack,
                        Y asesoría de TIC, trabajo como analista de sistemas 
                        en HMRA.
                    </p>
                    <br />
                    <Button text="Curriculum" accion={ () => window.open("https://drive.google.com/file/d/1RfbsRxyi1xgidpQBLHYT6XlpTIxRQm7Y/view?usp=sharing", "_blank") } > <TbFileDownload /> </Button>
                </div>
                {/* <div className="rightMain">
                    <img src={iconos} alt="iconos" />
                </div>     */}
            </div>
          
        </div>
    )
}
