
import "./filltro.scss";
import { useState } from 'react';


const filData = [
  {
    nombre: "App web ",
    id: "app"
  },

  {
    nombre: "Paginas Web",
    id: "web"
  },
  {
    nombre: "Todos",
    id: "all"
  },

]

export const Filtro = ({ filtroProyectos }) => {

  const [activo, setactivo] = useState("");

  const selecionItem = (id) => {
    setactivo(id);
    filtroProyectos(id);
    //console.log(id);
  }


  return (

    <div className="contemItem">
      {

        filData.map((proyecto) => {
          return (
            <ul
              key={proyecto.id}
              className="filtroIetm"
            >
              <li onClick={() => selecionItem(proyecto.id)} className={`itemfiltro ${activo === proyecto.id ? "active" : ""
                }`
              }

              >
                {proyecto.nombre}
              </li>
            </ul>
          )

        })
      }
    </div>



  )
}
