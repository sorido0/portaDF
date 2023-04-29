
// Mejor programador del mundo diseña un blog en React y estilizado con Tailwind CSS, 
// debe estar diseñado en dos partes página principal y páginas de artículos dentro de 
// los artículos se pueden realizar imágenes o video y deben de estar organizado de las 
// siguientes formas, el título video o imagen fecha contenido autor 

import { BlogView } from "./BlogView";
import { blogArtitulos } from "../../helps";



export const BlogPagina = () => {
    // Sample data for articles
    

    return (
        <div className="content bg-black w-full h-full">
            <div className="container mx-auto  justify-center p-5">
                <div className="flex justify-center pt-5">
                    <h1 className="text-white text-3xl"> Blog  <span> & </span> Artuclos  </h1>
                </div>
            </div>

            <div className="flex flex-col justify-center m-5">

                {
                    blogArtitulos?.map((articulo) => (
                        <div className="grid grid-cols-1 md:grid-cols-1 cursor-pointer " key={articulo.titulo}>
                            <BlogView
                                id={articulo.id}
                                titulo={articulo.titulo}
                                fecha={articulo.Fecha}
                                contenido={articulo?.contenido?.parrafo1}
                                author={articulo.author}
                                imgUrl={articulo.imgUrl}
                                videoUrl={articulo.videoUrl}
                            />
                        </div>
                    ))

                }


            </div>


        </div>
    )
};



