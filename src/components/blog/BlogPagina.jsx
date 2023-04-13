
// Mejor programador del mundo diseña un blog en React y estilizado con Tailwind CSS, 
// debe estar diseñado en dos partes página principal y páginas de artículos dentro de 
// los artículos se pueden realizar imágenes o video y deben de estar organizado de las 
// siguientes formas, el título video o imagen fecha contenido autor 


import React from "react";
import { Link } from "react-router-dom";
import { Section } from "../compartir";
import { BlogView } from "./BlogView";



export const BlogPagina = () => {
    // Sample data for articles
    const articulos = [
        {
            id: 1,
            titulo: "articulo 1",
            Fecha: "April 10, 2023",
            contenido: "Mejor programador del mundo diseña un blog en React y estilizado con Tailwind CSS, debe estar diseñado en dos partes página principal y páginas de artículos dentro de los artículos se pueden realizar imágenes o video y deben de estar organizado de las siguientes formas, el título video o imagen fecha contenido autor",
            author: "John Doe",
            imgUrl: "https://picsum.photos/200/300",
            videoUrl: "https://example.com/image1.jpg",
        },
        {
            id: 1,
            titulo: "articulo 2",
            Fecha: "April 10, 2023",
            contenido: "Mejor programador del mundo diseña un blog en React y estilizado con Tailwind CSS, debe estar diseñado en dos partes página principal y páginas de artículos dentro de los artículos se pueden realizar imágenes o video y deben de estar organizado de las siguientes formas, el título video o imagen fecha contenido autor",
            author: "John Doe",
            imgUrl: "https://picsum.photos/200/300",
            videoUrl: "https://example.com/image1.jpg"
        },
        // Add more articles here
    ];

    return (
        <div className="content bg-black w-full h-full">
            <div className="container mx-auto  justify-center p-5">
                <div className="flex justify-center pt-5">
                    <h1 className="text-white text-3xl"> Blog  <span> & </span> Artuclos  </h1>
                </div>
            </div>

            <div className="flex justify-center">

                {
                    articulos.map((articulo) => (
                        <div className="grid-cols-1  w-[80%] justify-center cursor-pointer ">
                            <BlogView
                                key={articulo.id}
                                titulo={articulo.titulo}
                                fecha={articulo.Fecha}
                                contenido={articulo.contenido}
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



