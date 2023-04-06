
//import { BsFillBriefcaseFill } from "react-icons/bs";

import "./style.scss";


export const Button = ({ text = "Contacto", accion, children }) => {



    return (
        <div className="buttonContacto" onClick={accion}>
            <span className="textButton" >{text}</span>
            <span className="iconButton  animate__animated animate__backInRight" >
                {children}
            </span>
        </div>
    )
}
