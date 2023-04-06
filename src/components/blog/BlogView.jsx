


export const BlogView = () => {
  return (
    <div className="article-list">
   
        <div className="article-container" key={artitulos.id}>
            <div className="img-container">
                <img src={artitulos.image} alt={artitulos.title} />
            </div>
            <div className="article-body">
                <h2>{artitulos.title}</h2>
                <p>{artitulos.description}</p>
                <div className="article-footer">
                    <span>{artitulos.date} · </span>
                    <span>{artitulos.ReadingTime}</span>
                </div>
            </div>
        </div>
    </div>
  )
}
