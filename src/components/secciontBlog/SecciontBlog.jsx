import { blogArtitulos } from "../../helps/blogArtitulos";
import { Section } from "../compartir"
import { BlogCart } from "./blog-Card";



import "./secciontblog.scss"


export const SecciontBlog = () => {
  return (
    <Section 
        title="Blog & Articulos"
        id="blog"
        className="bg-black"
    >
        <div className="blog-content-wraooer">

        {
            blogArtitulos.map( (articulo) => (
                <BlogCart
                    key={articulo.id}
                    {...articulo}
                />
            ))

        }
        </div>
       
    </Section >
  )
}
