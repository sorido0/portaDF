
import { Section } from './compartir';

import conocimiento from '../helps/conocimiento';

import './habilidades.scss';
import { ReactSVG } from 'react-svg';
import { useState } from 'react';


export const Habilidades = () => {


    const [verD, setverD] = useState(true)

    const descripcionDelenguajes = ({ lengua = "mmgv"}) => {
        setverD(!verD)
       return console.log(lengua)
    }




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
                         onClick={ () => {descripcionDelenguajes({lengua: habilidad?.nombre})} }
                            style={
                                habilidad?.nombre === "JavaScript" ? { border: "1px #FFC300 solid" } : { border: "none" }
                                    | habilidad?.nombre === "React" ? { border: "1px #2599be solid" } : { border: "none" }
                                        | habilidad?.nombre === "Nodejs" ? { border: "1px #28B463 solid" } : { border: "none" }
                                            | habilidad?.nombre === "MongoDB" ? { border: "1px #0E6251 solid" } : { border: "none" }
                                                | habilidad?.nombre === "HTML" ? { border: "1px #FF8000 solid" } : { border: "none" }
                                                    | habilidad?.nombre === "CSS" ? { border: "1px #2599be solid" } : { border: "none" }
                            }
                        >


                            <ReactSVG src={habilidad?.icon} title={habilidad?.nombre} id="svg"  />
                            <h3>{habilidad?.nombre}</h3>
                        </div>

                    )

                }
                )}

                <div className='descripcionLenguaje' style={ verD ? { display: "none" } : { display: "flex"}  }>
                    <h3 style={{
                        color: "white",
                    }}>hola</h3> : <p>adios</p>
                </div>

            </div>





        </Section>
    )
}
