


import "../components/compartir/section.scss"
import "./contacto.scss"
import { Section } from "./compartir"
import { ContactoInfomacion } from "./ContactoInfomacion"
import { Formulario } from "./Forms/Formulario"


export const Contacto = () => {
    
    return (
        <Section id="contacto" title="Tienes alguna pregunta, puedes contactarme es gratis😎? " background="light" >

            <div className="contactoSection">
                <ContactoInfomacion />
                <Formulario />

            </div>

        </Section>
    )
}
