


import "../components/compartir/section.scss"
import "./contacto.scss"
import { Section } from "./compartir"
import { ContactoInfomacion } from "./ContactoInfomacion"
import { Formulario } from "./Forms/Formulario"


export const Contacto = () => {
    
    return (
        <Section id="contacto" title="Me gustaria que trabajaramos juntos, puedes contactarme ? " background="light" >

            <div className="contactoSection">
                <ContactoInfomacion />
                <Formulario />

            </div>

        </Section>
    )
}
