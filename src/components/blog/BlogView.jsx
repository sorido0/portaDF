import { Link } from "react-router-dom"



export const BlogView = ({
    id,
    titulo,
    fecha,
    contenido,
    author,
    imgUrl,
    videoUrl,
}) => {


    return (

        <Link to={`/articulo/${id}`} className="w-full h-full bg-black">
        <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 m-2" >
            <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={imgUrl} alt={titulo} />

            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <div className="flex justify-center pt-5">
                    <h1 className="text-black text-3xl"> {titulo} </h1>
                </div>
                <blockquote>
                    <p className="text-lg font-medium">
                        “{contenido}”
                    </p>
                </blockquote>
                <figcaption className="font-medium">
                    <div className="text-sky-500 dark:text-sky-400">
                        {author}
                    </div>
                    <div className="text-slate-700 dark:text-slate-500">
                        {fecha}
                    </div>
                </figcaption>
            </div>
        </figure>
        </Link>
    )
}
