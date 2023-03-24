
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
                        <div className="meta-content">
                            <h3>{ proyecto.nombre }</h3>
                            <div className="go-to-cita">
                                <span className="text"> Ver proyecto </span>
                                <GrShare className="arrow-icon"  color="#2559cd"/>
                            </div>
                        </div>
                        <img src={proyecto.imagen} alt={proyecto.nombre} />
                    </div>
                )
            })}

        </div>

    )
}