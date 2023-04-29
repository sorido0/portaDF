

import { BsFillBriefcaseFill, BsFilterSquare, BsFillXCircleFill } from "react-icons/bs";
import { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../images/logoLetra.png'

import '../components/style.scss'
import { Button } from './compartir/Button'
import { scrollToSection } from './utils/helpers'

export const Header = () => {

    const [mobilMenu, setmobilMenu] = useState(false);

    const handleMobilMenu = (selecion) => {
        setmobilMenu(!mobilMenu)   
        scrollToSection(selecion)
    }



    return (
        <div className="hander">
            <div className="logoSorido0">
                <img src={logo} alt="sorido0" />

            </div>

            <div
                className="mobileMenu"
                onClick={
                    () => setmobilMenu(!mobilMenu)
                }
            >
                {
                    mobilMenu
                        ? <BsFillXCircleFill size={24} color="#fff" />
                        : <BsFilterSquare size={24} color="#fff" />
                }
            </div>

            <menu className={
                `navegacion ${mobilMenu ? "active" : ""} `
            } >
                <span className='navegacionItem' onClick={() => scrollToSection("portafolio")}> Porfolio </span>
                <span className='navegacionItem' onClick={() => scrollToSection("proyectos")} > Proyecto </span>
                <Link to="/blog">
                    <span className='navegacionItem' onClick={() => scrollToSection("blog")}> Blog & Articulos </span>
                </Link>
                <Button text="Contacto" accion={() => scrollToSection("contacto")}> <BsFillBriefcaseFill /> </Button>
            </menu>

        </div>
    )
}
