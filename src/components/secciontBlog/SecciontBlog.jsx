import { Link } from "react-router-dom";
import { blogArtitulos } from "../../helps/blogArtitulos";
import { Section } from "../compartir"
import { BlogCart } from "./blog-Card";



import "./secciontblog.scss"


export const SecciontBlog = () => {
    return (
        <Section
            title="Blog & Articulos"
            id="blog"
            className="bg-black items-center justify-center flex"
        >
            <div className="blog-content-wraooer">

                {
                    blogArtitulos.map((articulo) => (
                        <Link to={`/articulo/${articulo.id}`} className="w-full h-full bg-black"  key={articulo.id}>
                            <BlogCart
                                key={articulo.id}
                                {...articulo}
                            />
                        </Link>
                    ))

                }
            </div>

        </Section >
    )
}
