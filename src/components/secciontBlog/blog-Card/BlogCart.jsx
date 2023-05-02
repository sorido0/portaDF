


import { BsFillArrowUpRightCircleFill } from "react-icons/bs"
import "./blogcart.scss"


export const BlogCart = ({
    id,
    titulo,
    Fecha,
    contenido,
    author,
    imgUrl,
    videoUrl,
}) => {
   // console.log(contenido)
  return (
    <div className="blog-card">
        <div>
            <img className="image-section" src={imgUrl} alt={titulo} />
        </div>
        <div className="content-section"> 
            <div className="info-bar">
                <div className="user-name"> By { author }</div>
                <div className="posted-date"> { Fecha }</div>
            </div>
            <h3>{titulo}</h3>
            <p>{contenido.parrafo1}</p>
            <div className="readmore-cta">
                <span className="text"> Ir al blog </span>
                <BsFillArrowUpRightCircleFill className="icon" />
            </div>
        </div>
    </div>
  )
}
