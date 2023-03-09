

import "./section.scss";

export const Section = ({children, id, className, title, background }) => {
  return (
    <div
        id={id || ""}
        className={`section ${className ? className : ""} 
            ${ 
                background === "dark" ? "dark" : "light "
            }	
        `}
    >
        <div className="content">
            {
                title && (
                    <h2 className="title">
                        {title}
                    </h2>
                )

            }
        </div>
        { children }

    </div>
  )
}
