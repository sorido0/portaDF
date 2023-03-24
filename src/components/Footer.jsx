



import { Section, SocialIcon } from './compartir';
import logoSorido0 from '../images/logoLetra.png';
import { scrollToSection } from './utils/helpers';
import { socialContacto } from '../helps';
import './footer.scss'


export const Footer = () => {
	return (
		<Section id="footer" className="footer" background="dark" >
			<div className='contenFooter'>
				<div className="footerLogo">
					<img src={logoSorido0} alt="sorido0" />
				</div>
				<ul className='footerMenuItems'>
					<li className='footerMenuItem' 
						onClick={ () => scrollToSection("portafolio") }
					>	
						Portafolio
					</li>
					<li className='footerMenuItem' 
						onClick={ () => scrollToSection("Habilidades") }
					>	
						Hablidades 
					</li>
					<li className='footerMenuItem' 
						onClick={ () => scrollToSection("blog") }
					>	
						Blog & Artículos
					</li>
					<li className='footerMenuItem' 
						onClick={ () => scrollToSection("contacto") }
					>	
						Contacto 
					</li>
				</ul>
				<div className="footerSocials">
					{
						socialContacto.map( (social, index) => (
							<div className="footerSocial" key={social.id}>
								<SocialIcon
									key={index}
									icono={social.icon}
									color={social.color}
									link={social.url}
								/>

							</div>
						))

					}
				</div>
				<div className="derrechos">
					<div className="copyrightText">
						<p>© 2021 Sorido0. Todos los derechos reservados.</p>
					</div>
				</div>

			</div>

		</Section>

	)
}
