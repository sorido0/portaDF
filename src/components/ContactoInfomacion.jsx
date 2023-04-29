

import { FcPhoneAndroid, FcFeedback } from "react-icons/fc";
import './contactoInfomacion.scss'

export const ContactoInfomacion = () => {
  return (
    <div className="contenContacto">
        <h4>
        Mi objetivo es brindarle un servicio excepcional y garantizar que esté satisfecho con mi trabajo. Por lo tanto, no dude en contactarme en cualquier momento, ya sea que tenga preguntas, comentarios o sugerencias.
        </h4>
        <div className='opcionContacto'>
            <FcPhoneAndroid className='iconoContacto'/>
            <span>+1 809-313-9823</span>
        </div>
        <div className='opcionContacto'>
            <FcFeedback className='iconoContacto'/>
            <span>ing.angelsoriano@gmail.com</span>
        </div>

    </div>
  )
}
