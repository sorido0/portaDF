

import { FcPhoneAndroid, FcFeedback } from "react-icons/fc";
import './contactoInfomacion.scss'

export const ContactoInfomacion = () => {
  return (
    <div className="contenContacto">
        <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Cupiditate quam tempora natus iusto praesentium amet.
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
