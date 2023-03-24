
import { Section } from './compartir';

import './habilidades.scss';
import { ReactSVG } from 'react-svg';
import { useEffect, useState } from 'react';
import { conocimiento, borderStyler } from '../helps';
//import conocimiento from '../helps/conocimiento';



export const Habilidades = () => {

    const [verD, setverD] = useState(false);
    const [cambioLenguaje, setcambioLenguaje] = useState("hola");
    const [NombreDescripcion, setNombreDescripcion] = useState({ nombreW: "", descripcionW: "" });

    const descripcionDelenguajes = ({ lengua = "mmgv" }) => {
        let verdad = false;
        setcambioLenguaje(lengua)
        //console.log({lengua, cambioLenguaje, verD})

        if (lengua !== cambioLenguaje && verD === verdad) {
            //console.log("hola")
            return setverD(!verD)
        }

        if (lengua !== cambioLenguaje) {
            setverD(!!verD)
        } else {
            setverD(!verD)
        }

        return ""
    }

    
    const retonarDescripcionYnombre = ({ lengua = "yunito" }) => {
        let descripcionF = "";
        let nombreF = "";
        conocimiento.filter(nombre => nombre.nombre === cambioLenguaje ? descripcionF = nombre.desc : "")
        conocimiento.filter(nombre => nombre.nombre === cambioLenguaje ? nombreF = nombre.nombre : "")
        return {
            descripcionF,
            nombreF
        }
    }
    
    useEffect(() => {
       // let comparaLenfua = cambioLenguaje;
        const { nombreF, descripcionF } = retonarDescripcionYnombre({ lengua: cambioLenguaje })
        setNombreDescripcion({ nombreF, descripcionF })
    }, [cambioLenguaje])




    const {nombreF, descripcionF } = NombreDescripcion;
   
    return (
        <Section
            id="Habilidades"
            background={"dark"}
            title="Habilidades"
        >
            <div className="habilidades" >

                {conocimiento?.map((habilidad) => {
                    return (
                        <div className="habilidad" key={habilidad?.id}
                            onClick={() => { descripcionDelenguajes({ lengua: habilidad?.nombre }) }}
                            style={
                                borderStyler( habilidad?.nombre)
                            }
                        >
                            <ReactSVG src={habilidad?.icon} title={habilidad?.nombre} id="svg" />
                            <h3>{habilidad?.nombre}</h3>
                        </div>

                    )

                },

                )}


                <div className='descripcionLenguaje' 
                    style={!verD ? { display: "none" } : { display: "flex" } && borderStyler( nombreF ) }
                >
                    <h3 style={{
                        color: "white",
                    }}>{nombreF}</h3> : <p>{descripcionF}</p>
                </div>

            </div>

        </Section>
    )
}
