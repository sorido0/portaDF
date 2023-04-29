
// Public and private routes 

import { Route, Routes  } from "react-router-dom"
import App from "../App"
import { BlogPagina } from "../components/blog"
import { BlogArtitulos } from "../components/blog/BlogArtituclo"

  
  
  export const AppRouter = () => {
    return (
      <div>

        <Routes>
            
                <Route exact path="/*" element={<App />} />
                <Route exact path="/blog" element={<BlogPagina />} />
                <Route exact path="/articulo/:id" element={<BlogArtitulos />} />
               

        </Routes>
        
      </div>
    )
  }
  