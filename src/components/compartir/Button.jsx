
import { BsFillBriefcaseFill } from "react-icons/bs";

import "./style.scss";


export const Button = ({text = "Contacto"}) => {

  

  return (
    <div className="buttonContacto">
        <span className="textButton">{text}</span> 
        <span className="iconButton  animate__animated animate__backInRight">
            <BsFillBriefcaseFill />
        </span>
    </div>
  )
}
