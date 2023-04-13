

import logo from '../images/logoLetra.png'
import { BsFillBriefcaseFill } from "react-icons/bs";

import '../components/style.scss'
import { Button } from './compartir/Button'
import { scrollToSection } from './utils/helpers'
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className="hander">
        <div className="logoSorido0">
            <img src={ logo } alt="sorido0" />

        </div>

        <menu className="navegacion">
          <span className='navegacionItem' onClick={ () => scrollToSection("portafolio") }> Porfolio </span>
          <span className='navegacionItem' onClick={ () => scrollToSection("proyectos") } > Proyecto </span>
          <Link to="/blog">
          <span className='navegacionItem' onClick={ () => scrollToSection("blog") }> Blog & Articulos </span>
          </Link>
          <Button  text="Contacto" accion={ () => scrollToSection("contacto") }> <BsFillBriefcaseFill /> </Button>
        </menu>

    </div>
  )
}
