
import { useParams } from "react-router-dom";

import { blogArtitulos } from "../../helps";
import ReactPlayer from "react-player";

export const BlogArtitulos = () => {
    // Get article id from URL
    const { id } = useParams();

    // Find the article with the matching id
    const articulo = blogArtitulos.find((articulo) => articulo.id === Number(id));
    //console.log(articulo);
    return (
        <>

            {articulo ? (
                <div className="bg-black container flex-col p-5 w-full justify-center ">
                    <div className="flex justify-center pt-5">
                        <h1 className="text-white text-3xl"> {articulo.titulo} </h1>
                    </div>
                    <div className="flex justify-center pt-5">
                        {articulo.mediaType === "imagen" && (
                            <img src={articulo.imgUrl} alt={articulo.title} className="mb-4" />
                        )}
                        {articulo.mediaType === "video" && (
                            <ReactPlayer url={articulo.videoUrl} alt={articulo.title} className="mb-4" controls />
                        )}
                    </div>
                    <div className="flex justify-center pt-5">
                        <div className="w-[75%] md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 m-2 flex-col">

                            <blockquote className="m-3">
                              
                                    {articulo.contenido.parrafo1?   <p className="text-lg font-medium text-justify"> {articulo.contenido.parrafo1}  <br /> <br /> </p>  : null}
                                    {articulo.contenido.parrafo2?   <p className="text-lg font-medium text-justify"> {articulo.contenido.parrafo2}  <br /><br /> </p> : null}
                                    {articulo.contenido.parrafo3?   <p className="text-lg font-medium text-justify"> {articulo.contenido.parrafo3}  <br /><br /> </p> : null}
                                    {articulo.contenido.parrafo4?   <p className="text-lg font-medium text-justify"> {articulo.contenido.parrafo4}  <br /><br /> </p> : null}
                                
                            </blockquote>
                            <figcaption className="font-medium m-3 ">
                                <div className="text-sky-500 dark:text-sky-400">
                                    {articulo.author}
                                </div>
                                <div className="text-slate-700 dark:text-slate-500">
                                    {articulo.Fecha}
                                </div>
                            </figcaption>
                        </div>

                    </div>
                </div>
            ) : (
                <p>Article not found.</p>
            )}
        </>
    );
};






