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
                                <img src={lenguajes} alt="icon" />
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
                    <Button text="Curriculum" > <TbFileDownload /> </Button>
                </div>
                {/* <div className="rightMain">
                    <img src={iconos} alt="iconos" />
                </div>     */}
            </div>
          
        </div>
    )
}
