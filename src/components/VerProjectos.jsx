
import { GrShare } from "react-icons/gr";

import "./verProjectos.scss";

export const VerProjectos = ( { proyectos })  => {
    return (

        <div className="contenPreyectos">
            {proyectos.map((proyecto) => {
                return (
                    <div className="itemProyecto" key={proyecto.id}>
                        {/* <h1>{proyecto.nombre}</h1>
                            <p>{proyecto.descripcion}</p> */}
                        <div className="meta-content" onClick={ () => window.open(proyecto.url, "_blank") }>
                            <h3>{ proyecto.nombre }</h3>
                            <div className="go-to-cita" onClick={ () => window.open(proyecto.url, "_blank") }>
                                <span className="text"> Ver proyecto </span>
                                <GrShare className="arrow-icon"  color="#2559cd" onClick={ () => window.open(proyecto.url, "_blank") }/>
                            </div>
                        </div>
                        <img src={proyecto.imagen} alt={proyecto.nombre} />
                    </div>
                )
            })}

        </div>

    )
}
