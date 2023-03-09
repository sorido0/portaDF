

import logo from '../images/logoLetra.png'

import '../components/style.scss'
import { Button } from './compartir/Button'

export const Header = () => {
  return (
    <div className="hander">
        <div className="logoSorido0">
            <img src={ logo } alt="sorido0" />

        </div>

        <menu className="navegacion">
          <span className='navegacionItem'> Porfolio </span>
          <span className='navegacionItem'> Proyecto </span>
          <span className='navegacionItem'> Blog & Articulos </span>
          <Button  text="Contacto"/>
        </menu>

    </div>
  )
}
